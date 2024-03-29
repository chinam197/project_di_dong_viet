const bcrypt = require("bcrypt");
const { User, Provider, Administrator } = require("../models/index");
const LocalStrategy = require("passport-local").Strategy;
module.exports = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  async (username, password, done) => {
    const provider = await Provider.findOne({
      where: { name: "local" },
    });

    const administrator = await Administrator.findOne({
      where: { username, provider_id: provider.id },
    });
    if (!administrator) {
      return done(null, false, {
        message: "Tài khoản không tồn tại",
      });
    }
    const result = bcrypt.compareSync(password, administrator.password);
    if (!result) {
      return done(null, false, {
        message: "Mật khẩu không chính xác",
      });
    }
    return done(null, administrator);
  }
);
