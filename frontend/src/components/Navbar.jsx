import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, setAdmin } from "../../redux/slices/adminSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const adminUsername = useSelector((state) => state.admin.adminUsername);

  const dispatch = useDispatch();

  const onLogout = () => {
    try {
      dispatch(logout());
      toast.success("logout successfully");
      navigate("/login");
    } catch (error) {
      toast.error("error in logout");
    }
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-xl font-semibold">
        <Link to={"/"}> Employee Management</Link>
      </div>
      <div className="flex items-center justify-center ml-5">
        <div className="">
          <Link to={"/employee"} className="text-slate-50 font-bold">
            Employee List
          </Link>
        </div>
      </div>

      <div className="text-gray-300 mr-8">
        {" "}
        <button className="text-gray-300 hover:text-white" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
