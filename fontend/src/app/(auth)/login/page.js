import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import style from "./style/style.scss";
const Login = () => {
  return (
    <div className="h-[600px] bg-[#F2F2F2] px-2 pt-4 login">
      <div>
        <Image
          src="https://didongviet.vn/svg/Header/logonew.svg"
          className="w-[100%] block"
          width={200}
          height={132}
          alt="logo"
        />
      </div>
      <div className="my-3 mt-8">
        <form action="">
          <div className="h-[40px] my-5 mb-6">
            <input
              type="text"
              placeholder="Số điện thoại"
              className="inline-block w-[100%] px-3 py-2 border-current border"
            />
          </div>
          <div className="h-[40px] flex mt-8">
            <input
              type="text"
              placeholder="Mật khẩu"
              className="inline-block w-[100%] px-3 py-2 border-current border"
            />
            <button
              className="text-[gray] block h-[100%] bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              type="button"
            >
              <FontAwesomeIcon icon={faEye} width={20} />
            </button>
          </div>
          <div className="h-[40px] flex mt-8">
            <button className="bg-[#BE1E2D] block w-[100%] rounded-lg text-[#ffffff] text-[16px] ">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
      <a href="" className="text-">
        Quên mật khẩu
      </a>
      <div>
        <div className="flex items-center gap-3 justify-center text-[#898989]">
          <div className="line"></div>
          <div>Hoặc đăng nhập bằng</div>
          <div className="line"></div>
        </div>
        <div className="flex justify-center mt-5">
          <ul className="flex gap-7 items-center">
            <li>
              <a href="http://localhost:3005/auth/google/callback">
                <Image
                  src="https://didongviet.vn/icon/login/googleicon.png"
                  alt="google"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <Image
                src="https://didongviet.vn/icon/login/faceicon.png"
                alt="facebook"
                width={30}
                height={30}
              />
            </li>
          </ul>
        </div>
        <div className="text-center text-[15px] mt-2">
          <p>Bạn chưa có tài khoản?</p>
          <a href="/register">Đăng ký tại đây</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
