"use client";

import React, { ReactNode, useState } from "react";
import Button from "../../components/button";
import Video from "../../components/video";
import { AuthProvider } from "../../context/authContext";

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
    <>
      <Video src="/auth.mp4" />
      <section className="w-full h-dvh grid grid-cols-2 grid-rows-2 justify-center items-center gap-40 relative">
        {children}
        <div className="flex items-center gap-10 justify-center p-2">
          {!showSignUp && !showSignIn && (
            <Button onClick={handleSignUpClick} twClass="w-40">
              Sign Up
            </Button>
          )}
          {!showSignIn && !showSignUp && (
            <Button onClick={handleSignInClick} twClass="w-40">
              Sign In
            </Button>
          )}
          {showSignUp && (
            <div className="flex gap-4">
              <Button onClick={handleCancelSignUp}>Back</Button>
              <div>
                <AuthProvider>{signup}</AuthProvider>
              </div>
            </div>
          )}
          {showSignIn && (
            <div className="flex gap-4">
              <Button onClick={handleCancelSignIn}>Back</Button>
              <div>
                <AuthProvider>{signin}</AuthProvider>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
