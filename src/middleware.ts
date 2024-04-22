import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token");

  if (cookie) {
    return NextResponse.redirect(
      new URL("http://localhost:3000/main", request.url)
    );
  }

  if (!cookie) {
    return NextResponse.redirect(
      new URL("http://localhost:3000/auth", request.url)
    );
  }
}

export const config = {
  matcher: "/",
};
