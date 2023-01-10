import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "./sidebar.js";

test('renders the SideBar', () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <SideBar />
            </BrowserRouter>
        </React.StrictMode>);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Add Appartment")).toBeInTheDocument();
    expect(screen.getByText("Inbox")).toBeInTheDocument();
    expect(screen.getByText("Reviews")).toBeInTheDocument();
    expect(screen.getByText("Tenants")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();

});