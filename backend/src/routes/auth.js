var express = require("express");
var router = express.Router();
const passport = require("passport");
const authController = require("../controllers/api/v1/auth.controller");
router.get("/login", authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    badRequestMessage: "Vui lòng nhập email và mật khẩu",
    successRedirect: "/",
  })
);
router.get("/logout", (req, res) => {
  req.logout((error) => {
    if (!error) {
      return res.redirect("/auth/login");
    }
  });
});
router.get("/google", passport.authenticate("google"));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureFlash: true,
    failureRedirect: "http://localhost:3000/login",
    successRedirect: "http://localhost:3000",
  })
);
module.exports = router;
