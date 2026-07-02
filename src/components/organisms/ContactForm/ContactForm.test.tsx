import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  const apiUrl = "https://api.trashbox.io/submit";
  const apiKey = "test-api-key";

  beforeEach(() => {
    vi.stubEnv("NEXT_PUBLIC_TRASHBOX_API_KEY", apiKey);
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("submits the form directly to the Trashbox API", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValue({
      json: async () => ({ success: true }),
    } as Response);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "555-0100" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "I need an inspection." },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": apiKey,
        },
        body: JSON.stringify({
          name: "Jane Doe",
          email: "jane@example.com",
          message: "I need an inspection.",
          metadata: {
            phone: "555-0100",
          },
          _honeypot: "",
        }),
      });
    });
  });

  it("shows a success message after a successful submission", async () => {
    vi.mocked(fetch).mockResolvedValue({
      json: async () => ({ success: true }),
    } as Response);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      await screen.findByRole("heading", { name: /message sent/i }),
    ).toBeInTheDocument();
  });

  it("shows an error message when submission fails", async () => {
    vi.mocked(fetch).mockResolvedValue({
      json: async () => ({ success: false, message: "Something went wrong." }),
    } as Response);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello" },
    });
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      await screen.findByText(/something went wrong/i),
    ).toBeInTheDocument();
  });
});
