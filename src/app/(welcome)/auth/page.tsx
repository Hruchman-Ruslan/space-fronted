"use client";

import React from "react";

import { useRouter } from "next/navigation";

import Demo from "../../components/demo";
import Button from "../../components/button";

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();

  return (
    <section className="flex gap-20">
      <Demo />
      <div className="flex items-center justify-center gap-10 w-96 h-96 border-4 border-red-500">
        <Button onClick={() => router.push("auth/signup")}>Sign Up</Button>
        <Button onClick={() => router.push("auth/signin")}>Sign In</Button>
      </div>
    </section>
  );
}
