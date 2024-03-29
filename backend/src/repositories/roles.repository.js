//Tương ứng với model User
const { Role } = require("../models/index");
const Repository = require("../core/repository");
module.exports = class extends Repository {
  getModel() {
    return Role;
  }

  postRole(values) {
    return this.create({ name: values.toString().trim() });
  }
  getRole() {
    return this.findAll();
  }
};
