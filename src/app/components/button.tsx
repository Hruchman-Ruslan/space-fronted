import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode;
  onclick?: () => void;
  twClass?: string;
}

export default function Button({
  onclick,
  children,
  twClass = "",
  ...rest
}: ButtonProps) {
  return (
    <>
      <button
        onClick={onclick}
        {...rest}
        className={`min-w-6 p-2 rounded-xl bg-gradient-to-r from-black to-slate-700 font-extrabold text-lg ${twClass}`}
      >
        {children}
      </button>
    </>
  );
}
