import React, { useEffect, useState } from "react";
import { deleteEmployee, getEmployee } from "../api/apiCall";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchUser, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await getEmployee();
        console.log(response);
        if (response?.status === 200) {
          setEmployees(response.data);
        } else {
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmployees();
  }, []);

  const filteredEmployee = employees.filter((employee) => {
    if (!searchUser) {
      return true;
    }

    if (employee.username && typeof searchUser === "string") {
      const matched = employee.username
        .toLowerCase()
        .includes(searchUser.trim().toLowerCase());
      return matched;
    }

    return false;
  });

  const handleDelete = async (id) => {
    console.log(id);
    const confirmDelete = window.confirm(`Are you sure you want to delete`);
    if (confirmDelete) {
      try {
        const response = await deleteEmployee(id);
        if (response?.status === 200) {
          setEmployees((prevEmployees) =>
            prevEmployees.filter((employee) => employee._id !== id)
          );
          toast.success("User deleted successfully");
        } else {
          toast.error("Failed to delete user");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while deleting user");
      }
    } else {
      toast.info("User not deleted");
    }
  };
  const handleEdit = async (
    id,
    username,
    email,
    mobile,
    designation,
    gender,
    course
  ) => {
    navigate("/editemployee", {
      state: {
        id,
        username,
        email,
        mobile,
        designation,
        gender,
        course,
      },
    });
  };

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <Link to={"/addEmployee"}>
          <button className="bg-teal-500 mt-4 ml-4 border rounded font-semibold text-lime-50 from-neutral-50">
            Create Employee
          </button>
        </Link>
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Employee List</h2>
        <div className="mb-4 flex justify-end">
          <input
            type="text"
            placeholder="Search..."
            value={searchUser}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 border rounded focus:outline-none focus:border-blue-300"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">SI NO</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Mobile No</th>
                <th className="px-4 py-2">Designation</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">created at</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployee.length === 0 ? (
                <tr>
                  <td colSpan="9" className="border px-4 py-2 text-center">
                    No data matching
                  </td>
                </tr>
              ) : (
                filteredEmployee.map((employee, index) => (
                  <tr key={employee.id}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{employee.username}</td>
                    <td className="border px-4 py-2">{employee.email}</td>
                    <td className="border px-4 py-2">{employee.mobile}</td>
                    <td className="border px-4 py-2">{employee.designation}</td>
                    <td className="border px-4 py-2">{employee.gender}</td>
                    <td className="border px-4 py-2">{employee.course}</td>
                    <td className="border px-4 py-2">
                      {employee.createdAt.split("T")[0]}
                    </td>
                    <td className="border px-4 py-2 flex items-center">
                      <button
                        className="ml-2 bg-green-600 border rounded px-3 py-1 text-white"
                        onClick={() =>
                          handleEdit(
                            employee._id,
                            employee.username,
                            employee.email,
                            employee.mobile,
                            employee.designation,
                            employee.gender,
                            employee.course
                          )
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="ml-2 bg-red-800 border rounded px-3 py-1 text-white"
                        onClick={() => handleDelete(employee._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
