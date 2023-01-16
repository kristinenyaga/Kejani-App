import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Apartment from "./apartment.js";


test('button adds Apartment & navigates to /unitform', () => {
    window.history.pushState({}, "", "/unitform");
    render(
        <BrowserRouter>
            <Apartment />
        </BrowserRouter>
    );
    expect(screen.getByText(/Add Unit/g)).toBeInTheDocument();
});

