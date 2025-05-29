'use client'
import { addPost } from "@/src/app/lib/actions/blog";
import { useFormStatus } from "react-dom";

export default function NewPostPage() {
  const {pending} = useFormStatus()
  return (
    <form action={addPost} className="max-w-xl mx-auto mt-10 space-y-4">
      <input
        name="title"
        placeholder="Title"
        className="border p-2 w-full"
        required
      />
      <input
        name="image"
        placeholder="image link"
        className="border p-2 w-full"
        required
      />
      <input
        name="slug"
        placeholder="blog slug "
        className="border p-2 w-full"
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        className="border p-2 w-full"
      />
      <button
        disabled={pending}
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Create Post
      </button>
    </form>
  );
}
