import React from "react";

import Demo from "../../components/demo";

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Demo />
      <Demo style={{ visibility: "hidden" }} />
      <Demo style={{ visibility: "hidden" }} />
    </>
  );
}
