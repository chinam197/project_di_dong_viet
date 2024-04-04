import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRoles } from "../../redux/middlewares/roles/getRoles.middleware";

const Roles = () => {
  console.log(1);
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.getRolesSate.roleList);
  useEffect(() => {
    dispatch(getRoles());
  }, []);
  return (
    <div className="p-10 wrapper-roles">
      <h1 className="font-semibold">Quản lý quyền :</h1>
      <hr className="pt-3" />
      <Link
        to="/admin/roles/add"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Tạo quyền
      </Link>
      <div className="pt-3">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded p-10 my-3">
          Xóa quyền đã chọn
        </button>

        <table className="w-full table-auto border">
          <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
            <tr>
              <th />
              <th className="p-2">
                <div className="text-left font-semibold">Tên quyền</div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold"></div>
              </th>
              <th className="p-2">
                <div className="text-left font-semibold">Sửa</div>
              </th>
              <th className="p-2">
                <div className="text-center font-semibold">Xóa</div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {Array.isArray(roles?.data) &&
              roles?.data.map(({ id, name }) => {
                return (
                  <tr key={id}>
                    <td className="p-2">
                      <input
                        type="checkbox"
                        className="h-5 w-5"
                        defaultValue="id-2"
                      />
                    </td>
                    <td className="p-2">
                      <div>
                        <div className="font-medium text-gray-800">{name}</div>
                      </div>
                    </td>
                    <td className="p-2">
                      <div className="text-left"></div>
                    </td>
                    <td className="p-2">
                      <Link to={`${"/admin/roles/edit"}/${id}`}>
                        <i className="fa-solid fa-wrench h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600 text-[14px]"></i>
                      </Link>
                    </td>
                    <td className="p-2">
                      <div className="flex justify-center">
                        <button>
                          <i className="fa-solid fa-trash h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600 text-[14px]"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
