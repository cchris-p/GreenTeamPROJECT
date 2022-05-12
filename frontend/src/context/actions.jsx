/* eslint-disable no-unused-vars */
import Axios from "axios";
import { baseUrl } from "../util/baseUrl";

let axiosConfig = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    Axios.post(`${baseUrl}/user-login`, loginPayload).then((res) => {
      if (res.data.success) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data }, axiosConfig);
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        window.location.href = "/practice";
      }
    });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function loginAdmin(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    Axios.post(`${baseUrl}/admin-login`, loginPayload).then((res) => {
      if (res.data.success) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        localStorage.setItem("currentAdmin", JSON.stringify(res.data));
        window.location.href = "/admin/documentation";
      }
    });
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function createAccountUser(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_CREATE_ACCOUNT" });
    Axios.post(`${baseUrl}/user-create`, loginPayload).then((res) => {
      dispatch({ type: "CREATE_ACCOUNT_SUCCESS", payload: res.data });
      return res.data;
    });
  } catch (error) {
    dispatch({ type: "CREATE_ACCOUNT_ERROR", error: error });
  }
}

export async function logoutUser(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentAdmin");
  localStorage.removeItem("token");
}

export async function logoutAdmin(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("currentAdmin");
  localStorage.removeItem("token");
}
