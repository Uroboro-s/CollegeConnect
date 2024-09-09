import { uploadToCloudinary } from "@/app/_lib/helpers";
import { NextResponse } from "next/server";

export async function POST(req) {
  // your auth check here if required

  try {
    const formData = await req.formData();
    const file = formData.get("image");
    // console.log(file);

    const fileBuffer = await file.arrayBuffer();

    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");

    // this will be used to upload the file
    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

    const res = await uploadToCloudinary(fileUri, file.name);

    console.log(res);

    if (res.success && res.result) {
      return NextResponse.json({
        message: "success",
        imgUrl: res.result.secure_url,
      });
    } else return NextResponse.json({ message: "failure" });
  } catch (error) {
    console.log(error);
    throw new Error("error in route.js");
  }
}
