import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Testing Header", () => {
  test("Header is rendering", () => {
    render(<Header />);
  })

  test("Header is rendering with title", () => {
     render(<Header />);
     expect(screen.getByText(/Kinshasa Digital */)).toBeInTheDocument();
  })

  test("Header is rendering with academy", () => {
     render(<Header />);
     fireEvent.click(screen.getByText(/Add academy */));
     expect(screen.getByText(/Kinshasa Digital Academy */)).toBeInTheDocument();
  })
});
