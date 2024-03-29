//Tương ứng với model User
const { User } = require("../models/index");
const Repository = require("../core/repository");
module.exports = class extends Repository {
  getModel() {
    return User;
  }

  getLastestUser() {
    return this.findAll({
      order: [["id", "desc"]],
      limit: 5,
    });
  }
};
