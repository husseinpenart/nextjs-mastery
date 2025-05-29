// components/BlogCard.js
import Link from "next/link";
import { PostTypes } from "./@types";
import Image from "next/image";

export default function BlogCard({ post }: PostTypes) {
  return (
    <div className="border p-4 my-2 w-96 ">
      <Image
        alt={post.title || "alt"}
        src={post?.image?.trim()}
        width={300}
        height={300}
        quality={70}
        
      />
      <h2>{post.title}</h2>
      <Link href={`/blogs/${post.slug}`}>Read More</Link>
    </div>
  );
}
