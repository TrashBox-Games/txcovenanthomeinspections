"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/atoms/Button/Button";
import { Input } from "@/components/atoms/Input/Input";
import { Label } from "@/components/atoms/Label/Label";
import { Textarea } from "@/components/atoms/Textarea/Textarea";
import type { ContactFormPayload } from "@/lib/contact-form";
import { submitContactForm, TRASHBOX_SUBMIT_URL } from "@/lib/contact-form";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: ContactFormPayload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
      _honeypot: String(formData.get("_honeypot") ?? ""),
    };

    try {
      const apiKey = process.env.NEXT_PUBLIC_TRASHBOX_API_KEY;

      if (!apiKey) {
        setStatus("Contact form is not configured.");
        return;
      }

      const data = await submitContactForm(payload, {
        apiUrl: TRASHBOX_SUBMIT_URL,
        apiKey,
      });

      if (data.success) {
        setSubmitted(true);
        setStatus(null);
        form.reset();
      } else {
        setStatus(data.message ?? "Something went wrong.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
        <input
          type="text"
          name="_honeypot"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <Button
          type="submit"
          variant="gold"
          className="w-full py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send className="h-4 w-4" />
        </Button>
        {status && !submitted ? (
          <p
            role="status"
            className={
              status === "Sending..."
                ? "text-on-surface-variant"
                : "text-error"
            }
          >
            {status}
          </p>
        ) : null}
      </form>
    </div>
  );
}
