"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input/Input";
import { Label } from "@/components/atoms/Label/Label";
import { Textarea } from "@/components/atoms/Textarea/Textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-ambient">
        <h2 className="mb-stack-md font-headline text-xl font-semibold text-primary">
          Message Sent
        </h2>
        <p className="text-on-surface-variant">
          Thank you for reaching out. Joel will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-ambient">
      <h2 className="mb-stack-md font-headline text-xl font-semibold text-primary">
        Send us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-stack-md">
        <div className="grid grid-cols-1 gap-stack-md sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required autoComplete="name" />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows={4} required />
        </div>
        <Button type="submit" variant="gold" className="w-full py-3">
          Send Message
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
