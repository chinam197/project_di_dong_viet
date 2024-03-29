import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { client } from "../../config/client";
import loginSlice from "../../redux/slice/authSlice";
import { spinerEl } from "../../redux/slice/spinerSlice";
import { toast } from "react-toastify";
const { onSpiner } = spinerEl.actions;
const { login } = loginSlice.actions;

const Login = () => {
  const dispatch = useDispatch();

  const [isRules, setIsRules] = useState({
    usernameSpace: false,
    checkPassword: false,
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Tên đăng nhập bắt buộc phải nhập")
        .max(100, "Tên đăng nhập không được nhập quá 100 ký tự"),
      password: Yup.string()
        .required("Mật khẩu không được để trống")
        .max(100, "Mật khẩu không được nhập quá 100 ký tự"),
    }),
    onSubmit: async (values) => {
      dispatch(onSpiner(true));
      try {
        if (formik.values.username.includes(" ")) {
          return;
        }

        const { response, data } = await client.post(
          "/api/v1/admin/auth/login",
          {
            username: values.username,
            password: values.password,
          }
        );
        if (data.status === 200) {
          dispatch(login(true));
          dispatch(onSpiner(false));
          toast.success("Đăng nhập thành công");
        }
        if (response.ok === 400 || 401 || 403) {
          dispatch(onSpiner(false));
          formik.errors.err = "Tài khoản hoặc mật khẩu không chính xác";
        }

        // Xử lý phản hồi từ máy chủ ở đây
      } catch (error) {
        dispatch(onSpiner(true));

        console.error("Error submitting form:", error);
      }
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-[100vh] w-[100vw]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto xl:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border xl:mt-0 xl:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 xl:space-y-6 xl:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 xl:text-xl dark:text-white">
              Sign in to your account
            </h1>{" "}
            <form
              className="space-y-4 xl:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <h1>{formik.errors.err}</h1>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >
                  USERNAME
                </label>
                {formik.touched.username && formik.errors.username ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 rounded relative text-[14px]">
                    {formik.errors.username}
                  </span>
                ) : null}
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 xl:text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter username"
                  required=""
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                {formik.touched.password && formik.errors.password ? (
                  <span className="bg-red-100 border border-red-400 text-red-700 rounded relative text-[14px]">
                    {formik.errors.password}
                  </span>
                ) : null}
                <div className="relative">
                  <input
                    type={isRules.checkPassword ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 xl:text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />

                  <i
                    className={
                      isRules.checkPassword
                        ? "fa-regular fa-eye absolute right-6 top-[50%] translate-y-[-50%]"
                        : "fa-regular fa-eye-slash absolute right-6 top-[50%] translate-y-[-50%]"
                    }
                    onClick={() => {
                      setIsRules({
                        ...isRules,
                        checkPassword: !isRules.checkPassword,
                      });
                    }}
                  ></i>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-xl">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-xl font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={
                    formik.values.username.includes(" ")
                      ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                  }
                >
                  Đăng nhập
                </button>
              </div>

              <p className="text-xl font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
