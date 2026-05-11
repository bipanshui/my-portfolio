import * as React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  motion: {
    div: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) => (
      <div {...props}>{children}</div>
    ),
  },
}));

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

describe("Sheet", () => {
  it("renders content when open and calls back on backdrop click", () => {
    const handleOpenChange = vi.fn();

    const { container } = render(
      <Sheet open onOpenChange={handleOpenChange}>
        <SheetContent>
          <SheetTitle>Menu</SheetTitle>
          <p>Navigation content</p>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByRole("heading", { name: "Menu" })).toBeInTheDocument();
    expect(screen.getByText("Navigation content")).toBeInTheDocument();

    const backdrop = container.querySelector(".fixed.inset-0.z-40");
    expect(backdrop).not.toBeNull();
    fireEvent.click(backdrop as HTMLElement);

    expect(handleOpenChange).toHaveBeenCalledWith(false);
  });
});
