const UserRepository = require("../repositories/user.repository");
const userRepository = new UserRepository();
module.exports = {
  createUser: () => {
    //Gọi model user
  },
  login: () => {
    //Gọi model user
  },
  getUsers() {
    return userRepository.getLastestUser();
  },
};
