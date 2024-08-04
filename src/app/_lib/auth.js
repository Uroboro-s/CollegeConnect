import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { createUser, getUser } from "./data_service";

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
      }
    },
  },
  // async session({ session, user }) {
  //   const guest = await getGuest(session.user.email);
  //   // console.log(guest);
  //   session.user.guestId = guest.id;
  //   return session;
  // },

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
