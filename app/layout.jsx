import React from "react";
import "@styles/globals.css";

export const metadata = {
  title: "Travile_Website",
  description: "This is a travel website with Next.js 15",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className="w-[100%]">
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
