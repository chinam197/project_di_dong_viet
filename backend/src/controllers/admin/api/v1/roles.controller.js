const PermissionServices = require("../../../../services/permission.service");
const RoleServices = require("../../../../services/roles.service");
const { Role, Permission } = require("../../../../models/index");
const {
  successResponse,
  errorResponse,
} = require("../../../../helpers/response");

module.exports = {
  roles: async (req, res) => {
    const { id } = req.params;
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
  getRoles: async (req, res) => {
    const { id } = req.params;
    try {
      const data = await RoleServices.roleById(id);
      res.json({ data });
    } catch {}
  },

  handleAdd: async (req, res) => {
    try {
      const { name, isPermission } = req.body;
      const role = await RoleServices.postRole(name);
      const permission = await PermissionServices.createPermission(
        isPermission
      );
      await role.addPermissions(permission);
      successResponse(res, 200, "success");
    } catch {
      errorResponse(req, 400, "Server Error");
    }
  },
  handleRoleEdit: async (req, res) => {
    const { id } = req.params;
    const { isPermission } = req.body;
    try {
      if (!isPermission) {
        isPermission = [];
      }
      await RoleServices.roleUpdate(req.body);
      const role = await Role.findByPk(id);
      if (role && isPermission.length) {
        //Lấy được 1 mảng chứa danh sách các instance của từng permission (Đã được thêm vào database hoặc được lấy ra từ database)
        const permissionInstances = await Promise.all(
          isPermission.map(async (value) => {
            const [permissionInstance] = await Permission.findOrCreate({
              where: { value: value.trim() },
              defaults: { value: value.trim() },
            });
            console.log(permissionInstance);
            return permissionInstance;
          })
        );
        console.log("end");
        await role.setPermissions(permissionInstances);
        // Gửi phản hồi thành công và kết thúc xử lý bằng lệnh return
        return successResponse(res, 400, "success");
      }
    } catch {
      // Gửi phản hồi lỗi
      console.log("err");
      errorResponse(res, 400, "Server Err");
    }

    // Bạn không cần gọi res.json() ở đây nữa vì đã gửi phản hồi ở trên
  },
};
