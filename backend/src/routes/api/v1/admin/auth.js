var express = require("express");
var router = express.Router();
const passport = require("passport");
const {
  errorResponse,
  successResponse,
} = require("../../../../helpers/response");
const {} = require("../../../../models/index");
const authAdminController = require("../../../../controllers/admin/api/v1/auth.controller");
const adminAuthRouter = (app) => {
  router.post("/login", authAdminController.login);
  router.post(
    "/login",
    passport.authenticate("local", {
      failureFlash: true,

      failWithError: "e",
      failureMessage: "Vui lòng nhập email và mật khẩu",
      badRequestMessage: "Vui lòng nhập email và mật khẩu",
    }),
    async (req, res) => {
      res.json({
        data: req.user,
      });
    }
  );
  router.get("/login");
  router.get("/logout", (req, res) => {
    req.logout((error) => {
      if (!error) {
        return res.redirect("/auth/admin");
      }
    });
  });

  router.get("/profile", async (req, res) => {
    return res.json({});
  });

  return app.use("/api/v1/admin/auth", router);
};

module.exports = adminAuthRouter;
