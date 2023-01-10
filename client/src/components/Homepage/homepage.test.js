import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./homepage.js";

test("renders 'Whether You Are Renting Or Listing A House This Is The Place For You.' inside of a <h1 />", () => {
    render(
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>);
    const h1 = screen.queryByText(/Whether You Are Renting Or Listing A House This Is The Place For You./g);
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
});

test('renders the Homepage "List House" button', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <Homepage />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("List House")).toBeInTheDocument();

});

test('renders the Homepage "Rent House" button', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <Homepage />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("Rent House")).toBeInTheDocument();

});

test("renders 'Copyright text' inside of a <h1 />", () => {
    render(
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>);
    const h1 = screen.queryByText(/Copyright 2022  Kejani | All Rights Reserved/g);
    expect(h1).toBeInTheDocument();
    expect(h1.tagName).toBe("H1");
});
