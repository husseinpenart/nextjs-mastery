'use server';

import { z } from 'zod';
import { connectDB } from '../mongoose';
import { Post } from '../model/Post';

const schema = z.object({
  title: z.string().min(1),
  content: z.string().optional(),
});

export async function addPost(formData: FormData) {
  const raw = {
    title: formData.get('title'),
    content: formData.get('content'),
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    throw new Error('Validation failed');
  }

  await connectDB();
  await Post.create(parsed.data);
}
