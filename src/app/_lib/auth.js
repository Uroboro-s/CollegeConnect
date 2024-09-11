import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { createUser, getRoles, getUser } from "./data_service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      if (user && user.email.includes("@vitbhopal.ac.in")) {
        try {
          const existingUser = await getUser(user.email);

          if (!existingUser) {
            await createUser(user.name, user.email, user.image);
          }
          return true;
        } catch {
          return false;
        }
      } else {
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
    async session({ session, user }) {
      const currUser = await getUser(session.user.email);
      const admins = await getRoles("admin");
      // console.log(admins);
      const filtered = admins.filter(
        (admin) => admin.user_email === session.user.email
      );
      // console.log(filtered);
      if (filtered.length != 0) session.user.isAdmin = true;
      else session.user.isAdmin = false;
      session.user.id = currUser.id;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth(authConfig);
