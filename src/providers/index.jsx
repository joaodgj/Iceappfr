import React from "react";
import { AuthContextProvider } from "../contexts/auth";

const Providers = (props) => {
  return (
      <AuthContextProvider>
        {props.children}
      </AuthContextProvider>
  );
};

export default Providers;