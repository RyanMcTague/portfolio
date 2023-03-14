import axios from "axios";
import HelloButton from "../../components/HelloButton";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("HelloButton", ()=>{
  let mockFn: any
  beforeAll(()=>{
    jest.mock('axios')
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get = jest.fn().mockResolvedValue({ data: { message: "Hello!" } });
    mockFn = jest.fn()
  })

  beforeEach(()=>{
    render(<HelloButton onClick={mockFn}/>)
    jest.clearAllMocks()
  })

  it("renders 'Click Me!' with a button tag", async ()=>{
    const el = screen.getByTestId('hello-button')
    expect(el).toBeInTheDocument()
    expect(el.tagName.toLowerCase()).toBe('button')
    expect(el.innerHTML.trim()).toBe('Click Me!')  
  })

  it("clicking the button flips text to 'Click Me! Hello!' and 'Click Me!'", async()=>{
    const el = screen.getByTestId('hello-button')
    fireEvent.click(el)
    
    await waitFor(()=>{
      expect(mockFn).toHaveBeenCalled()
      const changedEl = screen.getByTestId('hello-button')
      expect(el).toBeInTheDocument()
      expect(changedEl.innerHTML).toBe('Click Me! Hello!')  
    })

    const changedEl = screen.getByTestId('hello-button')
    fireEvent.click(changedEl)
    await waitFor(()=>{
      expect(mockFn).toHaveBeenCalledTimes(2)
      const changedEl = screen.getByTestId('hello-button')
      expect(el).toBeInTheDocument()
      expect(changedEl.innerHTML.trim()).toBe('Click Me!')  
    })
  })
})