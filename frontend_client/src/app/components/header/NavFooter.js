import Image from "next/image";
import {
  faHome,
  faBarsProgress,
  faLocation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 px-2 h-[60px] bg-[#f7f7f7] z-10 py-3 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      <ul className="flex items-center justify-around gap-6 h-[100%]">
        <li className="text-[#808A94]">
          <a href="" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHome} width={30} height={30} />
            <p>Trang chủ</p>
          </a>
        </li>
        <li className="text-[#808A94]">
          <a href="" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faBarsProgress} width={30} height={30} />
            <p>Danh mục</p>
          </a>
        </li>
        <li className="text-[#808A94]">
          <a href="" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faLocation} width={30} height={30} />
            <p>Cửa hàng</p>
          </a>
        </li>
        <li className="text-[#808A94]">
          <a href="/login" className="flex flex-col items-center">
            <FontAwesomeIcon
              icon={faUser}
              width={30}
              height={30}
              className="text-[#808A94]"
            />
            <p>Tài khoản</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavFooter;
