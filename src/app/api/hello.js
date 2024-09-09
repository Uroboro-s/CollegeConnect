// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from "next/server";

export function GET(req, res) {
  return NextResponse.status(200).json({ name: "John Doe" });
}
