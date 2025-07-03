"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/UserContext";

export default function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserName } = useUser();
  const router = useRouter();

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);
      setUserName(data.user.username);
      // Redirect to the dashboard
      router.push('/dashboard');

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="account">
          <input
            type="text"
            placeholder="Account"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="password">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}