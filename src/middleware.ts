import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/auth(.*)",
    "/portal(.*)",
    "/images(.*)",
    "/public(.*)",
    "/favicon.ico",
  ],
  ignoredRoutes: ["/chatbot"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
