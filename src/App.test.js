import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

//Search for a GitHub user profile
// Auser can search, view a user profile

it("should display correctly", () => {
  render(<App />)
  const inputElement = screen.getByPlaceholderText(/Enter GitHub Username/i)
  const buttonElement = screen.getByText(/Add Card/)
  const cardElements = document.getElementsByClassName("github-profile")
  expect(inputElement).toBeInTheDocument()
  expect(buttonElement).toBeInTheDocument()
  expect(cardElements.length).not.toEqual(0)
})

it("should search correctly", async () => {
  render(<App />)
  jest.spyOn(window, "fetch")
  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" }),
  })

  const inputElement = screen.getByPlaceholderText(/Enter GitHub Username/i)
  const buttonElement = screen.getByText(/Add Card/)
  console.log(buttonElement)
  act(() => {
    fireEvent.change(inputElement, { target: { value: "Dan Abramov" } })
    userEvent.click(buttonElement)
  })

  // const cardElements = document.getElementsByClassName("github-profile")
  // const finalCardElement = cardElements[cardElements.length - 1]
  // const usernameElement = finalCardElement.getElementsByClassName("name")
  // expect(usernameElement).toHaveTextContent("Dan Abramov")
  expect(window.fetch).toHaveBeenCalledTimes(1)
  expect(inputElement.value).toBe("Dan Abramov")
})
