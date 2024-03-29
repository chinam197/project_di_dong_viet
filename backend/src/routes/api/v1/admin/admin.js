const express = require("express");
const router = express.Router();
const rolesController = require("../../../../controllers/admin/api/v1/roles.controller");
const adminRouteV1 = (app) => {
  router.get("/roles", rolesController.roles);
  // router.get("/roles/add", rolesController.getRoles);
  router.post("/roles/add", rolesController.handleAdd);
  return app.use("/api/v1/admin", router);
};

module.exports = adminRouteV1;
