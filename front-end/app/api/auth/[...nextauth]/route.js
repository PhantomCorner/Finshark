import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDb } from "@utils/database";
import User from "@models/user";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        await connectToDb();
        // check if a user exists
        const isExists = await User.findOne({
          email: profile.email,
        });
        // if not, create a new one and save to db
        if (!isExists) {
          console.log("name", profile.name);
          await User.create({
            email: profile.email,
            username: profile.name.replaceAll(" ", "").toLocaleLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
});
export { handler as GET, handler as POST };
