import React from "react";
import Nav from "./nav/nav";
import "./nav/style.scss";

const Header = () => {
  return (
    <header className="flex items-center p-2">
      <div>
        <i className="fa-solid fa-chevron-right text-[white] chevron"></i>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
