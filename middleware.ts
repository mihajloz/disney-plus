export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/brands/:path*",
    "/movies/:path*",
    "/originals/:path*",
    "/search/:path*",
    "/series/:path*",
  ],
};
