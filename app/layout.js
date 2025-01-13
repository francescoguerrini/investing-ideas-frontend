"use client";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className=" w-screen ">
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
