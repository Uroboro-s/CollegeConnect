import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { createUser, getAccount, getRoles, getUser } from "./data_service";
import isSamePassword from "../_utils/isSamePassword";

const authConfig = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")

      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // console.log(credentials);
        const user = credentials;

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // console.log("herer11");
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      // console.log(user);

      //credentials passed
      if (user.password) {
        const existingUser = await getUser(user.email);
        if (!existingUser) return false;
        // console.log(existingUser);
        const userAccount = await getAccount(existingUser.id);
        // console.log(userAccount);
        const result = await isSamePassword(
          user.password,
          userAccount[0].hashedPassword
        );

        console.log(result);
        return result;
      }
      if (user && user.email.includes("@vitbhopal.ac.in")) {
        try {
          const existingUser = await getUser(user.email);

          user.name = existingUser.name;
          user.image = existingUser.image;

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
      console.log(session);
      const currUser = await getUser(session.user.email);
      session.user.name = currUser.name;
      session.user.reg_no = currUser.reg_no;
      session.user.image = currUser.image;

      const admins = await getRoles("admin");

      const filtered = admins.filter(
        (admin) => admin.user_email === session.user.email
      );

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
