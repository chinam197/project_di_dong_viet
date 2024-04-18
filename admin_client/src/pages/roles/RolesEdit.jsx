import React, { useLayoutEffect, useRef } from "react";
import "./style.scss";
import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { client } from "../../config/client";
import { useSelector, useDispatch } from "react-redux";
import { spinerEl } from "../../redux/slice/spinerSlice";
import { useParams } from "react-router-dom";
import { isPermission } from "../../helpers/isPermissions";
import { toast } from "react-toastify";
const { onSpiner } = spinerEl.actions;
const RolesEdit = () => {
  const { id } = useParams();
  const [permissions, setPermission] = useState([]);
  const [roleIntance, setRoleIntance] = useState({});
  const onSpinerstate = useSelector((state) => state.onSpiner.onSpiner);
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
  const editPermission = [];
  const dispatch = useDispatch();
  const handleChecked = (e) => {
    isCheckboxPermission({
      ...checkboxPermissions,
      [e.target.name]: e.target.checked,
    });
  };
  const handleGetRolePermission = async () => {
    onSpiner(true);
    const { response, data: role } = await client.get(
      `/api/v1/admin/roles/edit/${id}`
    );
    const { data } = role;
    data.permissions.map(({ value }) => {
      isCheckboxPermission({
        ...checkboxPermissions,
        [value]: true,
      });
      if (editPermission.indexOf(value) === -1) {
        editPermission.push(value);
      }
    });
    setRoleIntance(role);
    onSpiner(false);
  };
  useEffect(() => {
    handleGetRolePermission();
  }, [onSpinerstate]);
  const formik = useFormik({
    initialValues: {
      role: "",
    },
    validationSchema: Yup.object({
      role: Yup.string()
        .required("Vui lòng nhập tên quyền")
        .max(100, "Tên không được vượt quá 100 ký tự"),
    }),
    onSubmit: async (values) => {
      dispatch(onSpiner(true));
      const { role: name } = values;
      const isPermissions = [];
      Object.keys(checkboxPermissions).forEach((keys, value) => {
        if (checkboxPermissions[keys] === true) {
          console.log(keys);
          isPermissions.push(keys);
        }
      });
      console.log(checkboxPermissions);
      try {
        const { response, data } = await client.post(
          `/api/v1/admin/roles/edit/${id}`,
          {
            id,
            name,
            isPermissions,
          }
        );

        if (!response.ok) {
          dispatch(onSpiner(false));
          throw new Error("Server Error");
          toast.error("Chinh sửa thất bại vui lòng thử lại sau!");
        }

        dispatch(onSpiner(false));
        toast.success("Chỉnh sửa thành công!");
      } catch {}
    },
  });
  formik.initialValues.role = roleIntance?.data?.name || "";
  const handlechange = (e) => {
    setPermission({ ...permissions, [e.target.name]: e.target.value });
  };
  return (
    <div className="p-10">
      <h1 className="font-semibold">Sửa Quyền :</h1>
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
            defaultValue={roleIntance?.data?.name}
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
                      defaultChecked={isPermission(
                        roleIntance?.data?.permissions,
                        "users_read"
                      )}
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
                      defaultChecked={isPermission(
                        roleIntance?.data?.permissions,
                        "users_create"
                      )}
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
                      defaultChecked={isPermission(
                        roleIntance?.data?.permissions,
                        "users_update"
                      )}
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
                      defaultChecked={isPermission(
                        roleIntance?.data?.permissions,
                        "users_delete"
                      )}
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
                      defaultChecked={isPermission(
                        roleIntance?.data?.permissions,
                        "roles_read"
                      )}
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
                      id="roles.create"
                      onInput={handlechange}
                      onClick={handleChecked}
                      defaultChecked={isPermission(
                        roleIntance?.data?.permissions,
                        "roles_create"
                      )}
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
                      defaultChecked={isPermission(
                        roleIntance?.data?.permissions,
                        "roles_update"
                      )}
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
                      defaultChecked={isPermission(
                        roleIntance?.data?.permissions,
                        "roles_delete"
                      )}
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
            Lưu
          </button>
        </form>
      </div>
    </div>
  );
};

export default RolesEdit;
