"use client"

import React from "react";
import { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const AuthProvider = createContext({});
const AuthContext = ({ children }: any) => {
  const authProviders = useFirebase();
  return (
    <AuthProvider.Provider value={authProviders}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
