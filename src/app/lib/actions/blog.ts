"use server";

import { z } from "zod";
import { connectDB } from "../mongoose";
import { Post } from "../model/Post";
import mongoose from "mongoose";
import { revalidateTag } from "next/cache";

const schema = z.object({
  title: z.string().min(1),
  content: z.string().optional(),
  image: z.string().optional(),
  slug: z.string().optional(),
});
export async function getAllPosts() {
  await connectDB();
  const result = await Post.find().sort({ createdAt: "desc" });
  return result;
}
export async function getPostBySlug(slug: string) {

  await connectDB();
  const result = await Post.findOne({ slug });
  return result;
}
export async function addPost(formData: FormData) {
  const raw = {
    title: formData.get("title"),
    content: formData.get("content"),
    image: formData.get("image"),
    slug: formData.get("slug"),
  };

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Validation failed");
  }

  await connectDB();
  await Post.create(parsed.data);
}
