import React, { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({ auth: {}, setAuth: () => { } });

const AuthContextProvider = (props) => {
    const setAuth = (auth) => {
        setState({ ...state, auth: auth })
    }
    const initState = {
        auth: {},
        setAuth: setAuth
    }

    const [state, setState] = useState(initState)

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContextProvider, AuthContext };