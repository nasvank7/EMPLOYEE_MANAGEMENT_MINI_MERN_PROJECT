import React from "react";

import App from "../App";
import AdminLogin from "../pages/AdminLogin";
import AdminHome from "../pages/AdminHome";
import EmployeeList from "../components/EmployeeList";
import { Provider } from "react-redux";
import store from "../../redux/store";
import CreateEmployee from "../components/CreateEmployee";
import EditEmployee from "../components/EditEmployee";

export const adminRoutes = {
  path: "/",
  element: (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  children: [
    {
      path: "/",
      element: <AdminHome />,
    },
    {
      path: "/employee",
      element: <EmployeeList />,
    },
    {
      path: "/addEmployee",
      element: <CreateEmployee />,
    },
    {
      path: "/editemployee",
      element: <EditEmployee />,
    },
  ],
};

export const adminLogin = {
  path: "/login",
  element: (
    <Provider store={store}>
      <AdminLogin />
    </Provider>
  ),
};
