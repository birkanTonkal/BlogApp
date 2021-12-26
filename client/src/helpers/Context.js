import React from "react";
import { useContext, useState } from "react";

export const Context = createContext(null);

export function ContextProvider({ child }) {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <Context.Provider value={{ loggedIn, setLoggedIn }}>
            {child}
        </Context.Provider>
    );
}
