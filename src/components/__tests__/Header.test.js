import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should render header Component with a login button", () => {
  //Using Provide r bc Redux code in Hearder.js component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton  = screen.getByRole("button", {name: "login"});
  expect(loginButton).toBeInTheDocument();
});


test("should render header Component with a cart button", () => {
    //Using Provide r bc Redux code in Hearder.js component
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    
    //Used to find some part of Cart-(0 items) /Cart/ this is rejex
    const loginButton  = screen.getByText(/Cart/);
    expect(loginButton).toBeInTheDocument();
  });

  test("should render header Component with a logout button", () => {
    //Using Provide r bc Redux code in Hearder.js component
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    
    //Used to find some part of Cart-(0 items) /Cart/ this is rejex
    const loginButton  = screen.getByRole("button",{name: "login"});

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name : "logout"});

    expect(logoutButton).toBeInTheDocument();
  });