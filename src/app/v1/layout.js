import { Inter } from "next/font/google";

import Header from "@/app/_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | CollegeConnect",
    default: "Welcome | CollegeConnect",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex-1 grid h-full">
        <main className="mx-auto w-full h-full">{children}</main>
      </div>
    </>
  );
}
/* 
<div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div> */
