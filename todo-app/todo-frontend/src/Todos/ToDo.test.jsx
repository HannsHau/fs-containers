import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDo from "./ToDo";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("create a ToDo component", () => {
  const mockTodo = {
    text: "Think again",
    done: false,
  };

  const { getByText } = render(<ToDo todo={mockTodo} />);

  expect(getByText("Think again")).toBeInTheDocument();
});
