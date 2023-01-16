import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from './App';


test('renders the homepage', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Signup")).toBeInTheDocument();
    expect(screen.getByText("Featured Properties")).toBeInTheDocument();
});


test('renders all routes', () => {
    window.history.pushState({}, "", "/login");
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByText(/Login/g)).toBeInTheDocument();
});

