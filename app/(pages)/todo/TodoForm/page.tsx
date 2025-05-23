'use client';

import { addTodo } from '@/app/lib/actions/todos';
import { useRef } from 'react';

export default function TodoForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        'use server';
        const title = formData.get('title') as string;
        await addTodo(title);
        ref.current?.reset();
      }}
      className="flex gap-2"
    >
      <input name="title" required placeholder="New todo" className="input" />
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}
