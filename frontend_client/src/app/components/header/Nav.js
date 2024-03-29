import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/home_page/didong.png";
import {
  faSearch,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import style from "./style/style.nav.scss";
import Image from "next/image";
const Nav = () => {
  return (
    <nav className="nav px-2">
      <div>
        <ul className="flex justify-between py-2 items-center">
          <li>
            <FontAwesomeIcon
              icon={faBars}
              width={25}
              className="text-[#ffff] mt-1"
            />
          </li>
          <li>
            <Image className="w-[424]" src={logo} alt="logo" height={30} />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCartShopping}
              width={25}
              className="text-[#ffff] mt-1"
            />
          </li>
        </ul>
      </div>
      <div className="relative">
        <input
          type="text"
          className="inline-block w-[100%] text-[#d1d5db] rounded-[8px] text-[14px] py-[8px] px-4"
          placeholder="Tìm kiếm..."
        />
        <FontAwesomeIcon
          icon={faSearch}
          width={25}
          className="absolute right-0 top-2/4 translate-y-[-50%] text-[#be1b2d] px-1 mr-5"
        />
      </div>
    </nav>
  );
};

export default Nav;
