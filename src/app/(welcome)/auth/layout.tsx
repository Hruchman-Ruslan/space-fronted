import React, { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  signup: ReactNode;
  signin: ReactNode;
}

export default function Layout({ children, signup, signin }: LayoutProps) {
  return (
    <>
      {children}
      <div>{signup}</div>
      <div>{signin}</div>
    </>
  );
}
