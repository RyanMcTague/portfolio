import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Home Page", ()=>{
  render(<Home/>)
  
  it("contains 'Ryan McTague as an h1'", ()=>{
    const tag = screen.getByText("Ryan McTague")
    expect(tag).toBeInTheDocument()
    expect(tag.childNodes.length).toBe(1)
    expect(tag.tagName.toLowerCase()).toBe('h1')
  })
})