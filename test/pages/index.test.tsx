import Home from "../../pages/index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("Home Page", ()=>{
  render(<Home/>)
  
  it("contains 'Ryan McTague as an h1'", ()=>{
    const el = screen.getByTestId("name-container")
    const h1 = el.querySelector('h1')
    expect(el.childNodes.length).toBe(1)
    expect(h1).toBeDefined()
    expect(h1!.innerHTML).toBe("Ryan McTague")
  })
})