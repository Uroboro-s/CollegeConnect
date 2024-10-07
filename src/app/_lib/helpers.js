import { cloudinary } from "./cloudinary"; // your config path
import { NextRequest } from "next/server";
import { transporter } from "./nodemailer";

const uploadToCloudinary = (fileUri, fileName, folder_name) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: "auto",
        filename_override: fileName,
        folder: folder_name, // any sub-folder name in your cloud
        use_filename: true,
      })
      .then((result) => {
        resolve({ success: true, result });
      })
      .catch((error) => {
        reject({ success: false, error });
      });
  });
};

const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: to,
    subject: subject,
    text: text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      throw new Error("Email not sent!");
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};

export { uploadToCloudinary, sendMail };
