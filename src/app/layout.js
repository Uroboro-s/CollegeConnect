import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";

import Header from "@/app/_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | CollegeConnect",
    default: "Welcome | CollegeConnect",
  },
  description: "Updating people with VIT Bhopal events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 grid h-full">
          <main className="mx-auto w-full h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
/* 
<div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div> */
