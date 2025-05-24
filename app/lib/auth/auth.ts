import { getSession } from 'next-auth/react';
import { authConfig } from './auth.config';


export async function getUserSession() {
  return await getSession(authConfig);
}
