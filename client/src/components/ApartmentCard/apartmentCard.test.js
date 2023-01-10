import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApartmentCard from "./apartmentCard.js";

test('renders the Apartment card', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <ApartmentCard />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("Apartments")).toBeInTheDocument();


});

