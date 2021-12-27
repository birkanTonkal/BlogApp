import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer.js";

const CUSTOM = {
  account: JSON.parse(localStorage.getItem("account")) || null,
  error: false,
};

export const AuthContext = createContext(CUSTOM);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, CUSTOM);

  useEffect(() => {
    localStorage.setItem("account", JSON.stringify(state.account));
  }, [state.account]);

  return (
    <AuthContext.Provider
      value={{
        account: state.account,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


