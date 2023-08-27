import React from "react";
import Navbar from "../components/Navbar";

const AdminHome = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="py-5">
        <div className="flex justify-center items-center">
          <div className="mt-40 p-5 flex flex-col justify-center  items-center bg-white w-3/4 md:w-2/4 rounded shadow-lg">
            <h1 className="text-center mb-4 text-2xl font-semibold">WELCOME</h1>
            <p className="text-center mb-4">To Admin Panel</p>
            <h2 className="mb-4"></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
