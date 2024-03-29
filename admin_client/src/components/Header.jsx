import React from "react";
import Nav from "./nav/nav";
import "./nav/style.scss";
const Header = () => {
  return (
    <header className="basis-[20%]  w-[280px] left-0 top-0 bottom-0 z-[10]">
      <Nav />
    </header>
  );
};

export default Header;
