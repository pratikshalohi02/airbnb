import React, { Children, createContext } from "react";
import { useState } from "react";
export const authDataContext=createContext()

function AuthContext({children}){
  let serverUrl="https://airbnb-backend-prx3.onrender.com"
  let [loading,setLoading]=useState(false)
  let value={
    serverUrl,
    loading,setLoading
   }
  return(
     <div>
<authDataContext.Provider value={value}>
  {children}
</authDataContext.Provider>
    </div>
  );
}
export default AuthContext
