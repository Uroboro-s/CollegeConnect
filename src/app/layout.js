import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | CollegeConnect",
    default: "Welcome | CollegeConnect",
  },
  description: "Updating people with VIT Bhopal events",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
