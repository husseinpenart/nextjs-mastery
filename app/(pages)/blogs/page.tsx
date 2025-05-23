import BlogCard from "@/app/components/BlogCard";
import { getAllPosts } from "@/app/lib/actions/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
