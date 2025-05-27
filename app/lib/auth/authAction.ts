'use server';


import bcrypt from 'bcryptjs';
import { connectDB } from '../mongoose';
import { User } from '../model/User';

export async function registerUser(
  prevState: any,             
  formData: FormData
): Promise<{ message?: string } | undefined> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    await connectDB();
    const existing = await User.findOne({ email });
    if (existing) return { message: 'User already exists' };

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashed });

    return { message: 'Registration successful' }; 
  } catch (err: any) {
    return { message: err.message || 'Something went wrong' };
  }
}
