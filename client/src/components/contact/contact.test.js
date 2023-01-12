import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Addapartment from "./addApartment.js";
import ContactForm from "./contact.js";

test('renders the addApartment page', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <ContactForm />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();

});

