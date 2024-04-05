import type { Metadata } from "next";

import { EB_Garamond } from "next/font/google";

import "./globals.css";

const font = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space",
  description: "The project was created for educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
