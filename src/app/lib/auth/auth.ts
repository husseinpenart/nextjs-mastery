import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { connectDB } from '../mongoose';
import { User } from '../model/User';
import bcrypt from 'bcryptjs';


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw new Error('User not found');

        const isValid = await bcrypt.compare(credentials!.password, user.password);
        if (!isValid) throw new Error('Invalid password');

        return { id: user._id, email: user.email, name: user.name };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/Signin',
  },
};
