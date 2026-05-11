import { describe, expect, it } from "vitest";

import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges Tailwind classes predictably", () => {
    expect(cn("p-2", "p-4", false && "text-red-500")).toBe("p-4");
  });
});
