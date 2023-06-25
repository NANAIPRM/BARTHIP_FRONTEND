import { createContext, useEffect, useState } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/localStorage";
import { googleLogin } from "../api/google-api";
import { getMe } from "../api/auth-api";

export const GoogleContext = createContext();

export default function GoogleContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const glogin = async (credential) => {
    console.log(credential);
    const res = await googleLogin(credential);
    console.log(res);
    addAccessToken(res.data.token);
    getMe(res.data.token);
  };

  useEffect(() => {
    const fetchMe = async () => {
      let token = getAccessToken();
      if (token) {
        const me = await getMe();
        setUser(me.data.user);
      }
    };
    fetchMe();
  }, []);

  return (
    <GoogleContext.Provider value={{ user, glogin }}>
      {children}
    </GoogleContext.Provider>
  );
}
