export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
  phone?: string;
  _honeypot: string;
}

export interface ContactFormResult {
  success: boolean;
  message?: string;
}

export const TRASHBOX_SUBMIT_URL = "https://api.trashbox.io/submit";

interface SubmitContactFormOptions {
  apiUrl: string;
  apiKey: string;
}

export async function submitContactForm(
  payload: ContactFormPayload,
  { apiUrl, apiKey }: SubmitContactFormOptions,
): Promise<ContactFormResult> {
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    const data = (await res.json()) as ContactFormResult;

    if (data.success) {
      return { success: true };
    }

    return {
      success: false,
      message: data.message ?? "Something went wrong.",
    };
  } catch {
    return {
      success: false,
      message: "Network error. Please try again.",
    };
  }
}
