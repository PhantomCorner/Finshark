import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDb } from "@utils/database";
console.log(process.env.GOOGLE_ID);
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  async session({ session }) {
    // check if a user exists

    // if not, create a new one and save to db
    try {
      await connectToDb();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  async signIn({ profile }) {},
});
export { handler as GET, handler as POST };
