import React, { createContext, useState, ReactNode } from "react";

export interface User {
  name: string;
  email: string;
  token: string;
}

export interface AuthContextProps {
  user: User | null;
  setUser(user: User | null): void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  console.log("user", user);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
