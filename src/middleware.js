import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  async function middleware(req) {
    const token = req.nextauth.token;

    // access dashboard just role ADMIN and SUPER ADMIN
    if (req.nextUrl.pathname.startsWith("/dashboard")) {
      if (token?.role === "ADMIN") {
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/register")) {
      if (token?.role === "ADMIN") {
        return NextResponse.redirect(new URL("/", req.url));
      }
      return NextResponse.next();
    }
  },
  {
    callbacks: {
      authorized: async ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/((?!general).*)",
    "/register",
    "/register/((?!general).*)",
  ],
};
