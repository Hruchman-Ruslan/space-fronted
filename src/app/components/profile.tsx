"use client";

import React, { useState } from "react";
import Image from "next/image";

import avatar from "/public/avatar.jpg";

export interface ProfileProps {}

export default function Profile({}: ProfileProps) {
  const [active, setActive] = useState<boolean>(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="absolute top-10 right-10">
      <div
        className="w-16 h-16 bg-transparent border-2 border-dashed rounded-full border-violet-700 overflow-hidden cursor-pointer relative"
        onClick={() => toggle()}
      >
        <Image src={avatar} alt="avatar" className="w-full h-full" />
      </div>

      {active && (
        <ul className="flex flex-col justify-center items-center gap-2">
          <li>
            <p className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-xl cursor-pointer">
              Profile
            </p>
          </li>
          <li>
            <p className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-xl cursor-pointer">
              Logout
            </p>
          </li>
        </ul>
      )}
    </div>
  );
}
