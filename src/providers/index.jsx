import React from "react";
import { AuthContextProvider } from "../contexts/auth";
import ToasterProvider from "./toastProvider";

const Providers = (props) => {
  return (
      <AuthContextProvider>
        <ToasterProvider>
          {props.children}
        </ToasterProvider>
      </AuthContextProvider>
  );
};

export default Providers;