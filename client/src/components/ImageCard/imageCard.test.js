import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ImageCard from "./imageCard.js";

test('button navigates from imageCard back to /sidebar', () => {
    window.history.pushState({}, "", "/sidebar");
    render(
        <BrowserRouter>
            <ImageCard />
        </BrowserRouter>
    );
    expect(screen.getByText(/Back/g)).toBeInTheDocument();
});