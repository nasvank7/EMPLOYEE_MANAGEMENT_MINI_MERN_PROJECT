import "./App.css";

import Navbar from "./components/Navbar";

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
