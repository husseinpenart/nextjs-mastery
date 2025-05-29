'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await signIn('credentials', {
      email: form.get('email'),
      password: form.get('password'),
      redirect: false,
    });

    if (res?.error) setError(res.error);
    else router.push('/main');
  }

  return (
    <form onSubmit={handleLogin} className="space-y-10 p-4 max-w-md mx-auto">
      <input name="email" type="email" placeholder="Email" required className="input" />
      <input name="password" type="password" placeholder="Password" required className="input" />
      <button type="submit" className="btn">Login</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
