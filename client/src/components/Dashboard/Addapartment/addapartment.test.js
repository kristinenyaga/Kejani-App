import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Addapartment from "../Addapartment/addapartment.js";

test('renders the addApartment page', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <Addapartment />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("Kejani App")).toBeInTheDocument();
    expect(screen.getByText("Your Apartments")).toBeInTheDocument();
    expect(screen.getByText("Add apartment")).toBeInTheDocument();


});

