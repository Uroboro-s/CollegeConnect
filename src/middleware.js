// import { NextResponse } from "next/server";

// export function middleware(request) {
//   console.log(request);
//   return NextResponse.redirect(new URL("/login", request.url));
// }

// export const config = {
//   matcher: ["/v1/home", "/v1/about"],
// };
//redirects every time
//what we need is that redirection depends upon auth
import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/v1/home", "/v1/about"],
};
