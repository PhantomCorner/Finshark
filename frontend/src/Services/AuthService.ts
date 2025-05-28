import axios from "axios";
import type { UserProfile, UserProfileToken } from "../Models/User";
import { handleError } from "../Helper/ErrorHandler";

const API_URL = "http://localhost:5254/api";
export const loginAPI = async function (userName: string, passWord: string) {
  try {
    const data = await axios.post<UserProfileToken>(
      `${API_URL}/account/login`,
      {
        userName: userName,
        passWord: passWord,
      }
    );
    return data;
  } catch (e) {
    handleError(e);
  }
};
export const registerAPI = async function (
  userName: string,
  passWord: string,
  email: string
) {
  try {
    const data = await axios.post<UserProfileToken>(
      `${API_URL}/account/register`,
      {
        userName: userName,
        email: email,
        passWord: passWord,
      }
    );
    return data;
  } catch (e) {
    handleError(e);
  }
};
