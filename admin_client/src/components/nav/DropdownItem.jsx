import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
const DropdownItem = (props) => {
  const item =
    props?.venDors ??
    props?.User ??
    props?.Categories ??
    props?.Products ??
    props?.Orders ??
    props?.Authentication;

  return (
    <div>
      {item.listChildren.map(({ key, value }, index) => {
        return (
          <Link
            key={index}
            to={key}
            className="text-[black] border border-1 block "
          >
            {value ?? ""}
          </Link>
        );
      })}
    </div>
  );
};

export default DropdownItem;
