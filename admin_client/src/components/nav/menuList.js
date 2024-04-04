export const list = {
  Authentication: {
    listChildren: [
      {
        key: "/auth/signup",
        value: "SignUp",
      },
      {
        key: "/auth/signin",
        value: "SignIn",
      },
    ],
  },
  Orders: {
    listChildren: [
      {
        key: "/auth/signup",
        value: "Đơn hàng mới",
      },
      {
        key: "/orders-products-all",
        value: "Lịch sử đơn hàng",
      },
      {
        key: "/orders-product-detail",
        value: "Chi tiết đơn hàng",
      },
    ],
  },
  Products: {
    listChildren: [
      {
        key: "/prodcuts",
        value: "Thêm sản phẩm",
      },
      {
        value: "Danh sách sản phẩm",
        key: "",
      },
      {
        value: "Sản phẩm dạng lưới",
        key: "",
      },
      {
        value: "Chi tiết sản phẩm",
        key: "",
      },
    ],
  },
  Categories: {
    listChildren: [
      {
        value: "Danh mục chính",
        key: "/",
      },
      {
        value: "Danh mục phụ",
        key: "/",
      },
    ],
  },
  User: {
    listChildren: [
      { value: "Danh sách người dùng", key: "/users/all" },
      {
        value: "Thông tin người dùng",
        key: "/users/info",
      },
      {
        value: "Quản lý người dùng",
        key: "/users",
      },
    ],
  },
  venDors: {
    listChildren: [
      {
        key: "/",
        value: "Hồ sơ nhà cung cấp",
      },
      {
        value: "Danh sách nhà cung cấp",
        key: "/",
      },
    ],
  },
};
