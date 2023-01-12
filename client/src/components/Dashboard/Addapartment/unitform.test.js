import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UnitForm from "./unitform.js";

test('renders the addApartment page', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <UnitForm />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("Add Unit")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Apartment Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Apartment Type")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Unit Number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Location")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("price")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Image_url")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("u")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();

});

