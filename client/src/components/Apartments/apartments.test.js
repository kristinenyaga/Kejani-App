import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Apartments from "./apartments.js";

test('renders the Apartments', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <Apartments />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("Property Name:")).toBeInTheDocument();
    expect(screen.getByText("Location:")).toBeInTheDocument();
    expect(screen.getByText("More details")).toBeInTheDocument();

});

