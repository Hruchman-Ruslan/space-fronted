import Link from "next/link";
import React, { HTMLAttributes } from "react";

export interface NavigationProps
  extends Partial<HTMLAttributes<HTMLAnchorElement>> {
  href: string;
  children?: React.ReactNode;
}

export default function Navigation({
  href,
  children,
  ...rest
}: NavigationProps) {
  return (
    <Link
      href={href}
      {...rest}
      className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-9xl p-4"
    >
      {children}
    </Link>
  );
}
