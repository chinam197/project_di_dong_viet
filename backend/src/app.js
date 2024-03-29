require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const passportLocal = require("./passports/passport.local");
const passportGoogle = require("./passports/passport.google");

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const adminRouteV1 = require("./routes/api/v1/admin/admin");
const adminAuthRouter = require("./routes/api/v1/admin/auth");
const { Administrator } = require("./models/index");
const cors = require("cors");
const app = express();
//
const bycrypt = require("bcrypt");

const hash = bycrypt.hashSync("Chinam2004@", 10);
// console.log(hash);
app.use(
  session({
    secret: "f8",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use("local", passportLocal);
passport.use("google", passportGoogle);

passport.serializeUser(function (user, done) {
  done(null, user.id); //Lưu user.id vào session
});

passport.deserializeUser(async function (id, done) {
  const user = await Administrator.findByPk(id);
  done(null, user);
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const whitelist = ["http://localhost:3000", "http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    const mode = process.env.NODE_ENV || "development";
    if (mode === "development") {
      return callback(null, true);
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
cors(corsOptions);
// app.use(authMiddleware);
app.use("/", indexRouter);
app.use("/auth", authRouter);
adminAuthRouter(app);
adminRouteV1(app);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
