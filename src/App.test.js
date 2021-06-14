import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

//Search for a GitHub user profile
// Auser can search, view a user profile
beforeAll(() => {
  jest.spyOn(window, "fetch")
})

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

  window.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" }),
  })

  const inputElement = screen.getByPlaceholderText(/Enter GitHub Username/i)
  const buttonElement = screen.getByText(/Add Card/)
  fireEvent.change(inputElement, { target: { value: "Dan Abramov" } })
  fireEvent.click(buttonElement)

  await waitFor(() => {
    const cardElements = document.getElementsByClassName("github-profile")
    const finalCardElement = cardElements[cardElements.length - 1]
    const usernameElement = finalCardElement.querySelector(".name")

    expect(window.fetch).toHaveBeenCalledTimes(1)
    expect(inputElement.value).toBe("Dan Abramov")
    expect(usernameElement).toHaveTextContent("Dan Abramov")
  })
})
