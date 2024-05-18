"use client"; 

import React, { useState } from 'react';
import {useRouter} from 'next/navigation';
const SubmitButton = () => {
const [email, setEmail] = useState('');
const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('src/server/api/routers/mongodb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      console.log(data); // Handle success based on your needs
    } catch (error) {
      console.error('Failed to submit email:', error);
    }
   
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="text-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded-md border border-white bg-black px-4 py-2 focus:border-purple-500 focus:outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="ml-2">
        Join Waitlist
      </button>
    </form>
  </>
  );
};

export default SubmitButton;