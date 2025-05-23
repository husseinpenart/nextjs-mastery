import { prisma } from "@/app/lib/model/prisma";
import TodoForm from "./TodoForm/page";
import { toggleTodo } from "@/app/lib/actions/todos";


export default async function TodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>
      <TodoForm />
      <ul className="mt-4 space-y-2">
        {todos.map(todo => (
          <form
            key={todo.id}
            action={async () => {
              'use server';
              await toggleTodo(todo.id, !todo.done);
            }}
          >
            <button className="block text-left w-full p-2 border rounded">
              <span className={todo.done ? 'line-through' : ''}>{todo.title}</span>
            </button>
          </form>
        ))}
      </ul>
    </div>
  );
}
