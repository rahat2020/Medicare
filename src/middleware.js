import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("🚀 ~ middleware ~ request:", request);
  // Middleware logic here
  return NextResponse.next();
}
