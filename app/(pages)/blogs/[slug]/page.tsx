import { getAllPosts, getPostBySlug } from "@/app/lib/actions/blog";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
};
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <article>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
