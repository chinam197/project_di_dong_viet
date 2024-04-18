import React, { useEffect, useState } from "react";
import { getRoles } from "../../redux/middlewares/roles/getRoles.middleware";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { client } from "../../config/client";
import { toast } from "react-toastify";
import { spinerEl } from "../../redux/slice/spinerSlice";
const { onSpiner } = spinerEl.actions;
const UserPermissions = () => {
  const { id } = useParams();
  const [addRoles, setAddRoles] = useState([]);
  const roles = useSelector((state) => state.getRolesSate.roleList);
  const { data: roleList } = roles;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoles());
  }, []);
  const handleChange = (e, id) => {
    if (e.target.checked) {
      setAddRoles([...addRoles, `${id}`]);
    } else {
      setAddRoles(addRoles.filter((roleId) => roleId !== `${id}`));
    }
  };
  const handleAdd = async () => {
    dispatch(onSpiner(true));

    const { response, data } = await client.post(
      `/api/v1/admin/permissions/${id}`,
      {
        addRoles,
      }
    );
    if (!response.ok) {
      dispatch(onSpiner(false));
      toast.error("Đã xảy ra lỗi vui lòng thử lại sau.");
    }
    if (response.status === 200 || response.status === 201) {
      dispatch(onSpiner(false));
      toast.success("Thêm quyền thành công.");
    }
    return;
  };

  return (
    <div className="p-10">
      <table className="w-full table-auto border">
        <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
          <tr>
            <th />
            <th className="p-2">
              <div className="text-left font-semibold">Tên quyền</div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm">
          {Array.isArray(roleList) &&
            roleList.map(({ id, name }) => {
              return (
                <tr key={id}>
                  <td className="p-2">
                    <input
                      type="checkbox"
                      className="h-5 w-5"
                      defaultValue="id-2"
                      onChange={(e) => {
                        handleChange(e, id);
                      }}
                    />
                  </td>
                  <td className="p-2">
                    <div>
                      <div className="font-medium text-gray-800">{name}</div>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button
        type="button"
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleAdd}
      >
        Lưu thay đổi
      </button>
      <button className="mt-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
        Hủy
      </button>
    </div>
  );
};

export default UserPermissions;
