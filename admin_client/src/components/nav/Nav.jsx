import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DropdownItem from "./DropdownItem";
import { list } from "./menuList";
const { venDors, User, Categories, Products, Orders, Authentication } = list;

import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState({
    name: "",
    status: false,
  });

  const toggleMenu = (name) => {
    setIsOpen((prevState) => ({
      ...prevState,
      name: name,
      status: prevState.name !== name ? true : !prevState.status,
    }));
  };

  return (
    <nav className="transition ease-in-out delay-150 duration-300">
      <div className="wrapper-logo">
        <Link to="/">
          <img
            src="data:image/png;base64,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"
            alt="didongviet"
            className="logo"
          />
        </Link>
      </div>
      <div className="menu-list">
        <ul>
          <li>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-table-columns"></i>
              <Link className="title" to="/admin/roles">
                Quản lý quyền.
              </Link>
            </div>
          </li>
          <hr />
          <li id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
            <div
              className="flex items-center gap-2"
              onClick={() => {
                toggleMenu("venDors");
              }}
            >
              <i className="fa-solid fa-users"></i>
              <p className="title">NHÀ CUNG CẤP</p>
              <i
                className={`fa-solid fa-chevron-right ${
                  isOpen.status && isOpen.name === "venDors"
                    ? "hidden"
                    : "block"
                }`}
              ></i>
              <i
                className={`fa-solid fa-chevron-down  ${
                  isOpen.status && isOpen.name === "venDors"
                    ? "block"
                    : "hidden"
                }`}
              ></i>
            </div>

            <div
              id="dropdown"
              className={` ${
                isOpen.status && isOpen.name === "venDors" ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-[90%] dark:bg-gray-700`}
            >
              <DropdownItem venDors={venDors} />
            </div>
          </li>
          <li id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
            <div
              className="flex items-center gap-2"
              onClick={() => {
                toggleMenu("User");
              }}
            >
              <i className="fa-solid fa-users"></i>
              <p className="title">NGƯỜI DÙNG</p>{" "}
              <i
                className={`fa-solid fa-chevron-right ${
                  isOpen.status && isOpen.name === "User" ? "hidden" : "block"
                }`}
              ></i>
              <i
                className={`fa-solid fa-chevron-down  ${
                  isOpen.status && isOpen.name === "User" ? "block" : "hidden"
                }`}
              ></i>
            </div>

            <div
              id="dropdown"
              className={` ${
                isOpen.status && isOpen.name === "User" ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-[90%] dark:bg-gray-700`}
            >
              <DropdownItem User={User} />
            </div>
          </li>
          <hr />
          <li id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
            <div
              className="flex items-center gap-2"
              onClick={() => {
                toggleMenu("Categories");
              }}
            >
              <i className="fa-solid fa-film"></i>
              <p className="title">THỂ LOẠI</p>{" "}
              <i
                className={`fa-solid fa-chevron-right ${
                  isOpen.status && isOpen.name === "Categories"
                    ? "hidden"
                    : "block"
                }`}
              ></i>
              <i
                className={`fa-solid fa-chevron-down  ${
                  isOpen.status && isOpen.name === "Categories"
                    ? "block"
                    : "hidden"
                }`}
              ></i>
            </div>

            <div
              id="dropdown"
              className={` ${
                isOpen.status && isOpen.name === "Categories"
                  ? "block"
                  : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-[90%] dark:bg-gray-700`}
            >
              <DropdownItem Categories={Categories} />
            </div>
          </li>

          <li id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
            <div
              className="flex items-center gap-2"
              onClick={() => {
                toggleMenu("Products");
              }}
            >
              <i className="fa-brands fa-shopify"></i>
              <p className="title">CÁC SẢN PHẨM</p>{" "}
              <i
                className={`fa-solid fa-chevron-right ${
                  isOpen.status && isOpen.name === "Products"
                    ? "hidden"
                    : "block"
                }`}
              ></i>
              <i
                className={`fa-solid fa-chevron-down  ${
                  isOpen.status && isOpen.name === "Products"
                    ? "block"
                    : "hidden"
                }`}
              ></i>
            </div>

            <div
              id="dropdown"
              className={` ${
                isOpen.status && isOpen.name === "Products" ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-[90%] dark:bg-gray-700`}
            >
              <DropdownItem Products={Products} />
            </div>
          </li>

          <li id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
            <div
              className="flex items-center gap-2"
              onClick={() => {
                toggleMenu("Orders");
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="title">ĐƠN ĐẶT HÀNG</p>{" "}
              <i
                className={`fa-solid fa-chevron-right ${
                  isOpen.status && isOpen.name === "Orders" ? "hidden" : "block"
                }`}
              ></i>
              <i
                className={`fa-solid fa-chevron-down  ${
                  isOpen.status && isOpen.name === "Orders" ? "block" : "hidden"
                }`}
              ></i>
            </div>

            <div
              id="dropdown"
              className={` ${
                isOpen.status && isOpen.name === "Orders" ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-[90%] dark:bg-gray-700`}
            >
              <DropdownItem Orders={Orders} />
            </div>
          </li>
          <li>
            <p>
              <a href="">Đánh giá</a>
            </p>
          </li>
          <li>
            <a href="">Nhãn hiệu</a>
          </li>
          <hr />
          <li id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
            <div
              className="flex items-center gap-2"
              onClick={() => {
                toggleMenu("Authentication");
              }}
            >
              <i className="fa-solid fa-shield-halved"></i>
              <p className="title">XÁC THỰC</p>
              <i
                className={`fa-solid fa-chevron-right ${
                  isOpen.status && isOpen.name === "Authentication"
                    ? "hidden"
                    : "block"
                }`}
              ></i>
              <i
                className={`fa-solid fa-chevron-down  ${
                  isOpen.status && isOpen.name === "Authentication"
                    ? "block"
                    : "hidden"
                }`}
              ></i>
            </div>
            <div
              id="dropdown"
              className={`${
                isOpen.status && isOpen.name === "Authentication"
                  ? "block"
                  : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-[90%] dark:bg-gray-700`}
            >
              <DropdownItem Authentication={Authentication} />
            </div>
          </li>
          <li>
            <Link to="/logout">Đăng xuất</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
