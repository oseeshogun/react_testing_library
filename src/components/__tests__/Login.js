import { render, screen, fireEvent } from "@testing-library/react"
import Login from "../Login"

describe("Testing Login component", () => {
  test("Login is rendering", () => {
    render(<Login />)
  })

  test("Login has email and password input", () => {
    render(<Login />)
    // screen.debug()
    expect(screen.getByPlaceholderText(/Email */)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Email */).type).toEqual("email")
    expect(screen.getByPlaceholderText(/Password */)).toBeInTheDocument()
  })

  test("Login has login button", () => {
    render(<Login />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  test("Login user", async () => {
    render(<Login />)
    fireEvent.change(screen.getByPlaceholderText(/Email */), { target: { value: "amos@gmail.com" }})
    fireEvent.change(screen.getByPlaceholderText(/Password */), { target: { value: "amos" }})
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(/Vous êtes connecté */, { }, {  timeout: 5000 })).toBeInTheDocument()
  })
})
