import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/navbar.js";

let container;

beforeEach(() => {
    container = render(
        <React.StrictMode>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </React.StrictMode>
    ).container;
});

test('wraps content in a div with "navbar" class', () => {
    expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Signup <Nav.Link>", async () => {
    const a = screen.queryByText(/Signup/g);

    expect(a).toBeInTheDocument();
    expect(a.tagName).toBe("A");
    expect(a.href).toContain("/");

    fireEvent.click(a, { button: 0 });

});

test("renders a Login <Nav.Link>", async () => {
    const a = screen.queryByText(/Login/g);

    expect(a).toBeInTheDocument();
    expect(a.tagName).toBe("A");
    expect(a.href).toContain("/");

    fireEvent.click(a, { button: 0 });
});

test("renders a Contact Us <Nav.Link>", async () => {
    const a = screen.queryByText(/Contact Us/g);

    expect(a).toBeInTheDocument();
    expect(a.tagName).toBe("A");
    expect(a.href).toContain("/");

    fireEvent.click(a, { button: 0 });

});