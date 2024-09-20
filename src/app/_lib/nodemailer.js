import nodemailer from "nodemailer";
// import { config } from "dotenv";
// config();

// console.log(process.env.GMAIL_PASS);
// console.log(process.env.GMAIL_USER);
// console.log(process.env.SUPABASE_URL);
export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smptp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// const mailOptions = {
//   from: "mishrajanmeyjai04@gmail.com",
//   to: "janmeyjaimishra2022@vitbhopal.ac.in",
//   subject: "Bye from Nodemailer",
//   text: "This is a 2nd test email sent using Nodemailer.",
// };
