// index.ts
'use client';

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCustomer } from '@/data/data';
import { Anchor } from "lucide-react";
import { useState } from 'react';

export default function IgyMarinaEmailInputPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === '') {
      setMessage('Please enter a valid email address.');
    } else {
      try {
        await createCustomer(email, 'customer', 1);
        setMessage(`Thank you! The email ${email} has been submitted.`);
      } catch (error) {
        setMessage('There was an error submitting your email. Please try again.');
      }
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <Anchor className="h-12 w-12 text-blue-600 mx-auto" />
          <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-black">Igy Marina Email Signup</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
        {message && (
          <Alert>
            <AlertDescription className="text-black">{message}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
