import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { authDataContext } from "./AuthContext.jsx";
export const UserDataContext = createContext();
function UserContext({ children }) {
  const { serverUrl } = useContext(authDataContext);
  const [userData, setUserData] = useState(null);
 const getCurrentUser = async () => {
    try {
      const result = await axios.get(
        `${serverUrl}/api/user/currentuser`,
        { withCredentials: true }
      );
      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.error(error);
    }
  };
 useEffect(() => {
    getCurrentUser();
  }, [serverUrl]);
const value = {
    userData,
    setUserData,
    getCurrentUser,
  };
 return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
}
export default UserContext;
