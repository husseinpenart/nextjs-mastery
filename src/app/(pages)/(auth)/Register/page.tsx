'use client';

import { registerUser } from '@/src/app/lib/auth/authAction';
import { useFormState } from 'react-dom';

export default function Register() {
  const [state, formAction] = useFormState(registerUser, undefined);

  return (
    <form action={formAction} className="space-y-4 p-4 max-w-md mx-auto">
      <input name="name" placeholder="Name" required className="input" />
      <input name="email" type="email" placeholder="Email" required className="input" />
      <input name="password" type="password" placeholder="Password" required className="input" />
      <button type="submit" className="btn">Register</button>
      {state?.message && <p className="text-red-500">{state.message}</p>}
    </form>
  );
}
