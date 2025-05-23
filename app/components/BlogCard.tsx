// components/BlogCard.js
import Link from 'next/link';
import { PostTypes } from './@types';

export default function BlogCard({ post }:PostTypes) {
  return (
    <div className="border p-4 my-2">
      <h2>{post.title}</h2>
      <Link href={`/blogs/${post.slug}`}>Read More</Link>
    </div>
  );
}
