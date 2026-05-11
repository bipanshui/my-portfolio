import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders a button by default", () => {
    render(<Button>Launch</Button>);

    expect(screen.getByRole("button", { name: "Launch" })).toBeInTheDocument();
  });

  it("supports rendering as a child link", () => {
    render(
      <Button asChild variant="outline">
        <a href="/contact">Contact</a>
      </Button>
    );

    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("href", "/contact");
  });
});
