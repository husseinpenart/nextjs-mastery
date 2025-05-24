'use server';

import { getUserSession } from "../auth/auth";


export async function protectedAction() {
  const session = await getUserSession();
  if (!session) throw new Error('Unauthorized');


}