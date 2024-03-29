const RolesRepositories = require("../repositories/roles.repository");
const RolesRepository = new RolesRepositories();
module.exports = {
  getRoles: () => {
    return RolesRepository.getRoles();
  },
  postRole(name) {
    return RolesRepository.postRole(name);
  },
};
