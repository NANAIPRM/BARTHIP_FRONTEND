import {
  getAccessToken,
  addAccessToken,
  removeAccessToken,
} from "../utils/localStorage";
import { googleLogin } from "../api/google-api";
import { getMe } from "../api/auth-api";

export const glogin = async (credential) => {
  const res = await googleLogin(credential);
  addAccessToken(res.data.token);
  getMe(res.data.token);
};
