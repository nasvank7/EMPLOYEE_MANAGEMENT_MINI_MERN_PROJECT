import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import EmployeeList from "./components/EmployeeList";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const admin = useSelector((state) => state.admin.adminUsername);

  return admin ? (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  ) : (
    <Navigate to={"/login"} />
  );
}

export default App;
