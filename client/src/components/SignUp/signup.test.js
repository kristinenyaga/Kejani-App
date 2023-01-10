import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./signup.js";

test('renders the SignUp page', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        </React.StrictMode>);

    // expect(screen.getByText("Property Details")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("Property Name")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("Price")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("Image url")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("Category")).toBeInTheDocument();
    // expect(screen.getByPlaceholderText("Property Name")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();

});