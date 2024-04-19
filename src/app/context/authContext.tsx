import React, { createContext, useState, ReactNode } from "react";

import { handleApiError, signIn, signUp } from "../api";

export interface User {
  name: string;
  email: string;
  token: string;
}

export interface AuthContextProps {
  name: string;
  email: string;
  password: string;
  user: User | null;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSignUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<User>;
  handleSignIn: (email: string, password: string) => Promise<User>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  name: "",
  email: "",
  password: "",
  user: null,
  setName: () => {},
  setEmail: () => {},
  setPassword: () => {},
  handleSignUp: async () => {
    throw new Error("handleSignUp not implemented");
  },
  handleSignIn: async () => {
    throw new Error("handleSignIn not implemented");
  },
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const createUser = await signUp(name, email, password);
      setUser(createUser);
      return createUser;
    } catch (error) {
      handleApiError(error);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    try {
      const findUser = await signIn(email, password);
      setUser(findUser);
      return findUser;
    } catch (error) {
      handleApiError(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        name,
        email,
        password,
        user,
        setName,
        setEmail,
        setPassword,
        handleSignUp,
        handleSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
