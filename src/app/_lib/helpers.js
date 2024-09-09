import { cloudinary } from "./cloudinary"; // your config path
import { NextRequest } from "next/server";

// type UploadResponse =
//   { success: true; result?: UploadApiResponse } |
//   { success: false; error: UploadApiErrorResponse };

const uploadToCloudinary = (fileUri, fileName) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: "auto",
        filename_override: fileName,
        folder: "product-images", // any sub-folder name in your cloud
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
