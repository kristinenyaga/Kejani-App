import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ApartmentForm from "/home/sheikh/Prodev-project/client/src/components/Dashboard/Addapartment/apartmentform.js";

test('renders the apartmentform', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <ApartmentForm />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByPlaceholderText("UserName")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Role")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Apartment Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Location")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Image_url")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("u")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();

});

