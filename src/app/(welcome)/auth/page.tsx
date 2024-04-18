import React from "react";

import Demo from "../../components/demo";
import FullScreen from "../../components/full-screen";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Demo />
      <Demo />
      <Demo />
      <FullScreen />
    </>
  );
}
