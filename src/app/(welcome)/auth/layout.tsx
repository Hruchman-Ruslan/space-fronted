"use client";

import React, { ReactNode, useState } from "react";
import Button from "../../components/button";

export interface LayoutProps {
  children: ReactNode;
  signup: ReactNode;
  signin: ReactNode;
}

export default function Layout({ children, signup, signin }: LayoutProps) {
  const [showSignUp, setShowSignUp] = useState<boolean>(false);
  const [showSignIn, setShowSignIn] = useState<boolean>(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleCancelSignUp = () => {
    setShowSignUp(false);
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleCancelSignIn = () => {
    setShowSignIn(false);
  };

  return (
    <section className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-10">
      {children}
      <div className="flex items-center gap-2 justify-center p-14 border-4 border-red-500">
        {!showSignUp && !showSignIn && (
          <Button onClick={handleSignUpClick}>Sign Up</Button>
        )}
        {!showSignIn && !showSignUp && (
          <Button onClick={handleSignInClick}>Sign In</Button>
        )}
        {showSignUp && (
          <>
            <Button onClick={handleCancelSignUp}>Back</Button>
            <div>{signup}</div>
          </>
        )}
        {showSignIn && (
          <>
            <Button onClick={handleCancelSignIn}>Back</Button>
            <div>{signin}</div>
          </>
        )}
      </div>
    </section>
  );
}
