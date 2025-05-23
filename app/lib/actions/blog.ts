// lib/blog.ts

import { BlogPost } from "@/app/components/@types";

const dummyPosts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    content: "Welcome to the blog.",
  },
  {
    slug: "nextjs-app-router",
    title: "App Router in Next.js",
    content: "App router is amazing.",
  },
];

export async function getAllPosts(): Promise<BlogPost[]> {
  return dummyPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = dummyPosts.find((p) => p.slug === slug);
  return post ?? null;
}
