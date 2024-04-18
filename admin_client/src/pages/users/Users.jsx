import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/middlewares/getUsers.middleware";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.getUserState.userList);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers("/api/v1/admin"));
  }, []);
  return (
    <div className="p-[10px]">
      <h1>Danh sách người dùng:</h1>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="p-4">
              STT
            </th>

            <th scope="col" className="p-4">
              Tên
            </th>

            <th scope="col" className="p-4">
              Email
            </th>
            <th scope="col" className="p-4">
              SDT
            </th>
            <th scope="col" className="p-4">
              Phân quyền
            </th>
            <th scope="col" className="p-4">
              Sửa
            </th>
            <th scope="col" className="p-4">
              Xóa
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length ? (
            <>
              {users.map(({ id, firt_name, last_name, phone, email }, i) => (
                <tr
                  className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  key={i}
                >
                  <td className="p-4 w-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="flex items-center mr-3">{i + 1}</div>
                  </th>
                  <td className="px-4 py-3">
                    <span className="bg-primary-100 text-primary-800 text-xl font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {firt_name + " " + last_name}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-primary-100 text-primary-800 text-xl font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {email}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-primary-100 text-primary-800 text-xl font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      {phone}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        data-modal-target="delete-modal"
                        data-modal-toggle="delete-modal"
                        className="flex items-center text-[#60a5fa]   hover:text-white border border-[#60a5fa]   hover:bg-[#60a5fa]   focus:ring-4 focus:outline-none focus:ring-[#60a5fa]   font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-[#60a5fa]   dark:text-[#60a5fa]   dark:hover:text-white dark:hover:bg-[#60a5fa]   dark:focus:ring-[#60a5fa]  "
                        onClick={() => {
                          navigate(`/users/permissions/${id}`);
                        }}
                      >
                        Phân quyền
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        data-drawer-target="drawer-read-product-advanced"
                        data-drawer-show="drawer-read-product-advanced"
                        aria-controls="drawer-read-product-advanced"
                        className="py-2 px-3 flex items-center text-sm font-medium text-center text-[#facc15] focus:outline-none bg-white rounded-lg border border-[#facc15] hover:bg-[#facc15] hover:text-[white] focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-4 w-4 mr-2 -ml-0.5"
                        >
                          <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                        </svg>
                        Sửa
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        data-modal-target="delete-modal"
                        data-modal-toggle="delete-modal"
                        className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-2 -ml-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
