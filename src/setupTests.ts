import "@testing-library/jest-dom";

import { vi } from "vitest";

vi.mock("framer-motion", async () => {
  const React = await import("react");

  return {
    motion: new Proxy(
      {},
      {
        get: (_, element) =>
          React.forwardRef((props: any, ref) =>
            React.createElement(element as string, { ...props, ref })
          ),
      }
    ),
  };
});
