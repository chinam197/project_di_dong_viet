import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { client } from "../../config/client";
import { useSelector, useDispatch } from "react-redux";
import { spinerEl } from "../../redux/slice/spinerSlice";
import { toast } from "react-toastify";
const { onSpiner } = spinerEl.actions;
const RolesAdd = () => {
  const [permissions, setPermission] = useState([]);

  const [checkboxPermissions, isCheckboxPermission] = useState({
    users_read: false,
    users_create: false,
    users_update: false,
    users_delete: false,
    roles_read: false,
    roles_create: false,
    roles_update: false,
    roles_delete: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChecked = (e) => {
    isCheckboxPermission({
      ...checkboxPermissions,
      [e.target.name]: e.target.checked,
    });
  };

  const formik = useFormik({
    initialValues: {
      role: "",
    },
    validationSchema: Yup.object({
      role: Yup.string().required("Vui lòng nhập tên quyền"),
    }),
    onSubmit: async (values) => {
      dispatch(onSpiner(true));
      const { role: name } = values;
      const isPermissions = [];
      for (let i in checkboxPermissions) {
        if (checkboxPermissions[i]) {
          isPermissions.push(`${i}`);
        }
      }
      try {
        const { response, data } = await client.post(
          "/api/v1/admin/roles/add",
          {
            name,
            isPermissions,
          }
        );
        if (!response.ok) {
          dispatch(onSpiner(false));
          throw new Error("Server Error");
        }
        if (response.status === 400) {
          dispatch(onSpiner(false));
          toast.success("Thêm quyền thất bại vui lòng thử lại sau");
        }

        dispatch(onSpiner(false));
        navigate("/admin/roles");
        toast.success("Tạo quyền thành công");
      } catch {}
    },
  });
  const handlechange = (e) => {
    setPermission({ ...permissions, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-10">
      <h1 className="font-semibold">Thêm Quyền :</h1>
      <div>
        <div className="w-full md:w-1/2 px-3 py-3">
          <label
            className="block uppercase tracking-wide text-gray-700   mb-2 text-[16px]"
            htmlFor="grid-last-name"
          >
            {formik.errors.role ? (
              <span className="font-bold text-[red]">{formik.errors.role}</span>
            ) : (
              <span>Tên</span>
            )}
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="..."
            onChange={formik.handleChange}
            name="role"
          />
        </div>
        <form action="" onSubmit={formik.handleSubmit}>
          <table className="w-full table-auto">
            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
              <tr>
                <th className="p-2 col-span-3">
                  <div className="text-left font-semibold">Module</div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold"></div>
                </th>
                <th className="p-2">
                  <div className="text-left font-semibold"></div>
                </th>
                <th className="p-2">
                  <div className="text-center font-semibold"></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              <tr>
                <td className="p-2">
                  <div className="font-medium text-gray-800">
                    Quản lý người dùng
                  </div>
                </td>

                <td className="p-2">
                  <div className="flex items-baseline  gap-5">
                    <label
                      htmlFor="users.read"
                      className="font-medium text-gray-800"
                    >
                      Xem
                    </label>
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      name="users_read"
                      value="users.read"
                      id="users.read"
                      onInput={handlechange}
                      onClick={handleChecked}
                    />
                  </div>
                </td>

                <td className="p-2">
                  <div className="flex items-baseline  gap-5">
                    <label
                      htmlFor="users.create"
                      className="font-medium text-gray-800"
                    >
                      Thêm
                    </label>
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      name="users_create"
                      value="users.create"
                      id="users.creat"
                      onInput={handlechange}
                      onClick={handleChecked}
                    />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-baseline  gap-5">
                    <label
                      htmlFor="users.update"
                      className="font-medium text-gray-800"
                    >
                      Sửa
                    </label>
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      name="users_update"
                      value="users.update"
                      id="users.update"
                      onInput={handlechange}
                      onClick={handleChecked}
                    />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-baseline  gap-5">
                    <label
                      htmlFor="users.delete"
                      className="font-medium text-gray-800"
                    >
                      Xóa
                    </label>
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      name="users_delete"
                      value="users.delete"
                      id="users.delete"
                      onInput={handlechange}
                      onClick={handleChecked}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div>
                    <div className="font-medium text-gray-800">
                      Quản lý quyền
                    </div>
                  </div>
                </td>

                <td className="p-2">
                  <div className="flex items-baseline  gap-5">
                    <label
                      htmlFor="roles.read"
                      className="font-medium text-gray-800"
                    >
                      Xem
                    </label>
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      name="roles_read"
                      value="roles.read"
                      id="roles.read"
                      onInput={handlechange}
                      onClick={handleChecked}
                    />
                  </div>
                </td>

                <td className="p-2">
                  <div className="flex items-baseline  gap-5">
                    <label
                      htmlFor="roles.create"
                      className="font-medium text-gray-800"
                    >
                      Thêm
                    </label>
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      name="roles_create"
                      value="roles.create"
                      id="roles.creat"
                      onInput={handlechange}
                      onClick={handleChecked}
                    />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-baseline  gap-5">
                    <label
                      htmlFor="roles.update"
                      className="font-medium text-gray-800"
                    >
                      Sửa
                    </label>
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      name="roles_update"
                      value="roles.update"
                      id="roles.update"
                      onInput={handlechange}
                      onClick={handleChecked}
                    />
                  </div>
                </td>
                <td className="p-2">
                  <div className="flex items-baseline  gap-5">
                    <label
                      htmlFor="roles.delete"
                      className="font-medium text-gray-800"
                    >
                      Xóa
                    </label>
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      name="roles_delete"
                      value="roles.delete"
                      id="roles.delete"
                      onInput={handlechange}
                      onClick={handleChecked}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded p-10 my-3"
            type="submit"
          >
            Thêm
          </button>
        </form>
      </div>
    </div>
  );
};

export default RolesAdd;
