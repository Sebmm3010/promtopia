import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    // async signIn({ profile }) {
    //   try {
        
    //   } catch (error) {
        
    //   }
    // },
  },
});

export { handler as Get, handler as Post };
