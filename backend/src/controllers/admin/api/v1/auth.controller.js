const {
  errorResponse,
  successResponse,
} = require("../../../../helpers/response");
const {
  User,
  Blacklist,
  UserToken,
  Administrator,
} = require("../../../../models/index");
const bcrypt = require("bcrypt");
const users = require("../../../../repositories/user.repository");
const {
  createAccessToken,
  createRefreshToken,
  verifyToken,
} = require("../../../../utils/jwt");
module.exports = {
  login: async (req, res) => {
    //1. Validate
    const { username, password } = req.body;
    if (!username || !password) {
      return errorResponse(
        res,
        400,
        "Bad Request",
        "Vui lòng nhập lại username và mật khẩu"
      );
    }
    //2. Kiểm tra username tồn tại
    try {
      const administrator = await Administrator.findOne({
        where: { username },
      });
      if (!administrator) {
        return errorResponse(res, 400, "Bad Request", {
          username: "username không tồn tại",
        });
      }
      //3. Lấy password hash
      const { password: hash } = administrator;
      //4. So sánh password hash với password từ request
      if (!bcrypt.compareSync(password, hash)) {
        return errorResponse(res, 400, "Bad Request", {
          Unauthorized: "Tài  khoản hoặc mật khẩu không chính xác",
        });
      }
      // //5. Tạo token bằng JWT
      // const accessToken = createAccessToken({ userId: user.id });
      // const refreshToken = createRefreshToken();
      // //Thêm refreshToken vào database
      // await UserToken.create({
      //   refresh_token: refreshToken,
      //   user_id: user.id,
      // });
      // //6. Trả về Response
      // if (!accessToken) {
      //   return errorResponse(res, 500, "Server Error");
      // }
      return successResponse(res, 200, "Success");
    } catch {}
  },
  profile: (req, res) => {
    return successResponse(res, 200, "Success", req.user);
  },
  logout: async (req, res) => {
    const { accessToken, exp } = req.user;
    const [blacklist] = await Blacklist.findOrCreate({
      where: { token: accessToken },
      defaults: { token: accessToken, expired: exp },
    });
    if (blacklist) {
      return successResponse(res, 200, "Success");
    }
    return errorResponse(res, 500, "Server Error");
  },
  refresh: async (req, res) => {
    //Input: Refresh Token (Body)
    const refreshToken = req.body.refresh_token;
    const userToken = await UserToken.findOne({
      where: { refresh_token: refreshToken },
    });
    if (!userToken) {
      return errorResponse(res, 400, "Bad Request");
    }
    //Nếu tồn tại trong Database --> Lấy userId
    const { user_id: userId } = userToken;

    //Verify Token --> Kiểm tra hết hạn
    const decoded = verifyToken(refreshToken);
    if (!decoded) {
      return errorResponse(res, 401, "Unathorize");
    }
    //Khởi tạo accessToken mới
    const accessToken = createAccessToken({ userId });

    //Trả về response
    if (!accessToken) {
      return errorResponse(res, 500, "Server Error");
    }
    return successResponse(res, 200, "Success", {
      accessToken,
      refreshToken,
    });
  },
  signup: async (req, res) => {
    res.json({});
  },
};
