import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("displays in 'light' mode when initialized", () => {
  const { screen } = render(<App />);
  expect(screen.getByRole(".App.light")).toBeInTheDocument();
});

test("changes to 'dark' mode when the button is clicked", () => {
  const { screen } = render(<App />);
  expect(screen.getByRole(".App.light")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole(".App.dark")).toBeInTheDocument();
});

test("changes back to 'light' mode when the button is clicked twice", () => {
  const { screen } = render(<App />);
  expect(screen.getByRole(".App.light")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole(".App.dark")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/ Mode/));

  expect(screen.getByRole(".App.light")).toBeInTheDocument();
});
