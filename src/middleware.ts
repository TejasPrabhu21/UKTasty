import { withAuth } from "next-auth/middleware";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;
    if (token) {
      if (token.role !== "admin") {
        return new Response("Unauthorized", { status: 403 });
      }
    } else {
      return Response.redirect(new URL("/admin/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
);

export const config = { matcher: ["/admin/:path*"] };
