import { cloudinary } from "./cloudinary"; // your config path
import { NextRequest } from "next/server";

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

export { uploadToCloudinary };
