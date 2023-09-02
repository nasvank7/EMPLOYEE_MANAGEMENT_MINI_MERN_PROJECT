import { adminUrls } from "../const/routesPath";
import { methodApi } from "./config";

export const postLogin = async (data) => {
  try {
    const resp = await methodApi("post", adminUrls.adminLogin, data);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
export const getEmployee = async () => {
  try {
    const resp = await methodApi("get", adminUrls.employeeList);
    return resp;
  } catch (error) {
    console.log(error);
  }
};
export const deleteEmployee = async (id) => {
  try {
    const resp = await methodApi("delete", adminUrls.deleteEmployee + `/${id}`);
    return resp;
  } catch (error) {}
};

export const createEmployee = async (data) => {
  try {
    const resp = await methodApi("post", adminUrls.createEmployee, data);
    console.log(resp);
    return resp;
  } catch (error) {}
};

export const editEmployee = async (id, data) => {
  try {
    const resp = await methodApi(
      "put",
      adminUrls.editEmployee + `/${id}`,
      data
    );
    return resp;
  } catch (error) {}
};
