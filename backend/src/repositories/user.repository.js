//Tương ứng với model User
const { Administrator } = require("../models/index");
const Repository = require("../core/repository");
module.exports = class extends Repository {
  getModel() {
    return Administrator;
  }

  getLastestUser() {
    return this.findAll({
      order: [["id", "desc"]],
      attributes: ["firt_name", "last_name", "email", "phone"],
      limit: 10,
    });
  }
};
