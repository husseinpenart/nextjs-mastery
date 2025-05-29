import BlogCard from "@/src/app/components/BlogCard";
import { getAllPosts } from "../../lib/actions/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-4 flex flex-wrap gap-8">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}

      
    </div>
  );
}
