import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editEmployee } from "../api/apiCall";
import { validationSchema } from "../const/validation";
import { toast } from "react-toastify";
function EditEmployee() {
  const location = useLocation();
  const {
    id,
    initialUsername,
    initialEmail,
    initialMobile,
    initialDesignation,
    initialGender,
    initialCourse,
  } = location.state || {};
  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail);
  const [mobile, setMobile] = useState(initialMobile);
  const [designation, setDesignation] = useState(initialDesignation);
  const [course, setCourse] = useState(initialCourse);

  const [gender, setGender] = useState(initialGender);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(
        {
          username,
          email,
          mobile,
          designation,
          gender,
          course,
        },
        { abortEarly: false }
      );
      const data = {
        username,
        email,
        mobile,
        designation,
        gender,
        course,
      };
      console.log(data);

      const response = await editEmployee(id, data);
      console.log(response);
      if (response?.status !== 200) {
        setErr(response?.data.err);
      } else {
        toast.success("edited employee Successfully", { autoClose: 2000 });
        navigate("/employee");
      }
    } catch (validationError) {
      const errorMessage = validationError.errors.join("");
      setErr(errorMessage);
      toast.error(errorMessage);
      toast.error();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg mt-36">
        <h1 className="text-2xl font-bold  text-center">Edit Employee</h1>
        <form className="w-full max-w-lg mt-36">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Username
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 borderrounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="jane"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Mobile No
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="tel"
                placeholder="09836432477"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Designation
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                >
                  <option>Phd</option>
                  <option>Msc</option>
                  <option>Mhd</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <fieldset>
                <legend className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Gender
                </legend>
                <div className="flex">
                  <label className="mr-4">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                    />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Course
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option>BBA</option>
                  <option>acca</option>
                  <option>cma</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
            Upload Image
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
      </div> */}
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full px-3">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
