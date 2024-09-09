import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  // console.log(req.body);
  const body = await req.json();
  // || {};
  console.log(body);
  const { paramsToSign } = body;

  console.log(paramsToSign);
  console.log("here");

  const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;

  try {
    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      apiSecret
    );
    console.log("her a;sp");
    console.log(signature);
    return NextResponse.json({ signature });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
