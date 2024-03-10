import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import ProductWidget from "./ProductWidget";

describe("ProductWidget test", () => {
  test("should show 100 plastic bottles", () => {
    render(
      <ProductWidget
        key={1}
        widgetSetting={{
          id: 1,
          type: "plastic bottles",
          amount: 100,
          action: "collects",
          active: true,
          linked: true,
          selectedColor: "green",
        }}
      />
    );

    expect(screen.getByText(/100 plastic bottles/i)).toBeDefined();
  });

  test("should show 100 plastic bottles", () => {
    render(
      <ProductWidget
        key={1}
        widgetSetting={{
          id: 2,
          type: "trees",
          amount: 10,
          action: "plants",
          active: false,
          linked: false,
          selectedColor: "black",
        }}
      />
    );

    expect(screen.getByText(/This product plants/i)).toBeDefined();
  });

  test("should show 100 plastic bottles", () => {
    render(
      <ProductWidget
        key={1}
        widgetSetting={{
          id: 3,
          type: "carbon",
          amount: 20,
          action: "offsets",
          active: false,
          linked: false,
          selectedColor: "blue",
        }}
      />
    );

    expect(screen.getByText(/20kgs of carbon/i)).toBeDefined();
  });
});
