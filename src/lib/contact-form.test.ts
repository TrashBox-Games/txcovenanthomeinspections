import {
  buildSubmitRequest,
  submitContactForm,
  type ContactFormPayload,
  type ContactFormResult,
} from "./contact-form";

const payload: ContactFormPayload = {
  name: "Jane Doe",
  email: "jane@example.com",
  message: "I need an inspection.",
  phone: "555-0100",
  _honeypot: "",
};

describe("buildSubmitRequest", () => {
  it("maps phone into metadata for the Trashbox API", () => {
    expect(buildSubmitRequest(payload)).toEqual({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I need an inspection.",
      metadata: {
        phone: "555-0100",
      },
      _honeypot: "",
    });
  });

  it("omits metadata when phone is not provided", () => {
    expect(
      buildSubmitRequest({
        name: "Jane Doe",
        email: "jane@example.com",
        message: "I need an inspection.",
        _honeypot: "",
      }),
    ).toEqual({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I need an inspection.",
      _honeypot: "",
    });
  });
});

describe("submitContactForm", () => {
  const apiUrl = "https://api.trashbox.io/submit";
  const apiKey = "test-api-key";

  beforeEach(() => {
    vi.stubGlobal("fetch", vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("posts the API request body with phone in metadata", async () => {
    const mockFetch = vi.mocked(fetch);
    mockFetch.mockResolvedValue({
      json: async () => ({ success: true } satisfies ContactFormResult),
    } as Response);

    await submitContactForm(payload, { apiUrl, apiKey });

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

  it("returns success when the API responds with success", async () => {
    vi.mocked(fetch).mockResolvedValue({
      json: async () => ({ success: true } satisfies ContactFormResult),
    } as Response);

    const result = await submitContactForm(payload, { apiUrl, apiKey });

    expect(result).toEqual({ success: true });
  });

  it("returns the API error message when submission fails", async () => {
    vi.mocked(fetch).mockResolvedValue({
      json: async () =>
        ({ success: false, message: "Invalid email." } satisfies ContactFormResult),
    } as Response);

    const result = await submitContactForm(payload, { apiUrl, apiKey });

    expect(result).toEqual({ success: false, message: "Invalid email." });
  });

  it("returns a network error when fetch throws", async () => {
    vi.mocked(fetch).mockRejectedValue(new Error("Network down"));

    const result = await submitContactForm(payload, { apiUrl, apiKey });

    expect(result).toEqual({
      success: false,
      message: "Network error. Please try again.",
    });
  });
});
