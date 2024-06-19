import { render, screen }  from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test('should load Contact Us component', () => {
    //render UI component to the JS DOM  first befor testing 
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})
// you can write test OR it
it('Should load button inside conteact component', () => {
  render(<Contact/>);

  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
})

