// lib/actions/todos.ts
'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '../model/prisma';

export async function addTodo(title: string) {
  await prisma.todo.create({
    data: { title },
  });
  revalidatePath('/todos');
}

export async function toggleTodo(id: string, done: boolean) {
  await prisma.todo.update({
    where: { id },
    data: { done },
  });
  revalidatePath('/todos');
}
