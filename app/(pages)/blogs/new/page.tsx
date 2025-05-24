import { addPost } from "@/app/lib/actions/blog";

export default function NewPostPage() {
  return (
    <form action={addPost} className="max-w-xl mx-auto mt-10 space-y-4">
      <input
        name="title"
        placeholder="Title"
        className="border p-2 w-full"
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Post
      </button>
    </form>
  );
}
