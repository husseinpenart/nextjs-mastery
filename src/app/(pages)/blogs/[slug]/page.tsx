import { getAllPosts, getPostBySlug } from "@/src/app/lib/actions/blog";
import Image from "next/image";
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
      <Image
        alt={post.title || "alt"}
        src={post?.image?.trim()}
        width={300}
        height={300}
        quality={70}
      />
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
