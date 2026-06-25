import { createFadeIn } from "./motion";

describe("createFadeIn", () => {
  it("uses the provided duration in the visible variant transition", () => {
    const variants = createFadeIn(2.75);

    expect(variants.visible).toMatchObject({
      transition: { duration: 2.75, ease: "easeOut" },
    });
  });
});
