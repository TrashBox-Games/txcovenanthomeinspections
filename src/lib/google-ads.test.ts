import { GOOGLE_ADS_ID } from "./google-ads";

describe("GOOGLE_ADS_ID", () => {
  it("uses the shared Google Ads conversion account id", () => {
    expect(GOOGLE_ADS_ID).toBe("AW-18285018836");
  });
});
