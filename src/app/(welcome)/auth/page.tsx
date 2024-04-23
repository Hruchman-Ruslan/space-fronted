import React from "react";

import Demo from "../../components/demo";
import FullScreen from "../../components/full-screen";
import Profile from "../../components/profile";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Demo />
      <Demo />
      <Demo />
      <FullScreen />
      <Profile />
    </>
  );
}
