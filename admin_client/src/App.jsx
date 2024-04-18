import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/router/Home";
import Users from "./pages/users/Users";
import Banner from "./components/banner/Banner";
import Login from "./pages/auth/Login";
import Roles from "./pages/roles/Roles";
import { useSelector } from "react-redux";
import Spiner from "./components/spiner/spiner";
import RolesAdd from "./pages/roles/RolesAdd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RolesEdit from "./pages/roles/RolesEdit";
import UserRole from "./pages/userRoles/UserPermissions";
const App = () => {
  const onLogin = useSelector((state) => state.authLogin.onLogin);
  const onSpiner = useSelector((state) => state.onSpiner.onSpiner);
  return (
    <div>
      {onSpiner && <Spiner />}
      <ToastContainer />
      {onLogin ? (
        <div className="flex">
          <div>
            <Header />
          </div>
          <div className="w-[100%]">
            <div>
              <Banner />
            </div>

            <div>
              <Routes>
                <Route path="/" index element={<Home />} />

                <Route path="/users">
                  <Route index element={<Users />} />
                  <Route path="permissions/:id" element={<UserRole />} />
                </Route>
                <Route path="/logout" element={<Login />} />
                <Route />
                <Route path="/admin/roles">
                  <Route index element={<Roles />} />
                  <Route path="add" element={<RolesAdd />} />
                  <Route path="edit/:id" element={<RolesEdit />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
