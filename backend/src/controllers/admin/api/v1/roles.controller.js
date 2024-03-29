const PermissionServices = require("../../../../services/permission.service");
const RoleServices = require("../../../../services/roles.service");
const {
  successResponse,
  errorResponse,
} = require("../../../../helpers/response");

module.exports = {
  roles: async (req, res) => {
    try {
      const rolesAll = await RoleServices.getRoles();
      if (!rolesAll) {
        errorResponse(res, 400, "Server Err");
      }
      successResponse(res, 200, "Success", rolesAll);
    } catch {
      errorResponse(res, 400, "Server Err");
    }
  },
  getRoles: (req, res) => {},
  handleAdd: async (req, res) => {
    const { name, isPermission } = req.body;
    try {
      const role = await RoleServices.postRole(name);
      const permission = await PermissionServices.createPermission(
        isPermission
      );
      role.addPermissions(permission);
      res.json({});
    } catch {
      errorResponse(req, 400, "Server Error");
    }
  },
};
