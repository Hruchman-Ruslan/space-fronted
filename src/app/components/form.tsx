import React, { FormHTMLAttributes, ReactNode } from "react";

export interface FormProps
  extends Partial<FormHTMLAttributes<HTMLFormElement>> {
  children: ReactNode;
}

export default function Form({ children, ...rest }: FormProps) {
  return (
    <form autoComplete="off" {...rest} className="flex flex-col gap-3">
      {children}
    </form>
  );
}
