import { dbConnection } from "@data";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { User } from "@models";

interface user {
  email: string;
  name: string;
  image?: string;
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user?.email });
      session.user.id= sessionUser!._id.toString();
      return session;
    },
    async signIn({ profile }) {
      const { email, name, image } = profile as user;
      try {
        await dbConnection();

        //* Usuario existe?
        const user = await User.findOne({
          email,
        });

        // *Si el usuario no existe
        if (!user) {
          await User.create({
            email: email,
            name: name?.replace(" ", "").toLowerCase(),
            image: image || "",
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
