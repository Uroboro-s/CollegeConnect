import { Inter } from "next/font/google";

import "@/app/_styles/globals.css";
import ToastProvider from "./_components/ToastProvider";

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
      <head>
        {/* <script
          defer
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
        ></script> */}
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}

export default RootLayout;
