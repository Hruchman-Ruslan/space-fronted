"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Button from "../components/button";

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push("auth/signup")}>Sign Up</Button>
      <Button onClick={() => router.push("auth/signin")}>Sign In</Button>
    </>
  );
}
