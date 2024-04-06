import React from "react";

export interface MainProps {}

export default function Main({}: MainProps) {
  return (
    <>
      <h1 className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-9xl p-4">
        Main Page
      </h1>
    </>
  );
}
