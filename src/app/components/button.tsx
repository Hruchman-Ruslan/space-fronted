import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode;
  onclick?: () => void;
}

export default function Button({ onclick, children, ...rest }: ButtonProps) {
  return (
    <>
      <button
        onClick={onclick}
        {...rest}
        className="px-6 py-2 rounded-xl bg-gradient-to-r from-black to-slate-700"
      >
        {children}
      </button>
    </>
  );
}
