import React, { InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  children?: ReactNode;
}

export default function Input({ id, children, ...rest }: InputProps) {
  return (
    <>
      <label htmlFor={id}>
        {children}
        <input type="text" id={id} {...rest} className="px-3 py-2 rounded-xl" />
      </label>
    </>
  );
}
