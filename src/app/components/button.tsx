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
        className="bg-slate-500 text-cyan-300 py-2 rounded-xl"
      >
        {children}
      </button>
    </>
  );
}
