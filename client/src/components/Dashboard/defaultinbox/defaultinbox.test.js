// import "@testing-library/jest-dom";
// import React from "react";
// import { fireEvent, render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import Addapartment from "./addApartment.js";

// test('renders the addApartment page', () => {
//     render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Addapartment />
//             </BrowserRouter>
//         </React.StrictMode>);

//     expect(screen.getByText("Property Details")).toBeInTheDocument();
//     expect(screen.getByPlaceholderText("Property Name")).toBeInTheDocument();
//     expect(screen.getByPlaceholderText("Price")).toBeInTheDocument();
//     expect(screen.getByPlaceholderText("Image url")).toBeInTheDocument();
//     expect(screen.getByPlaceholderText("Category")).toBeInTheDocument();
//     expect(screen.getByPlaceholderText("Property Name")).toBeInTheDocument();
//     expect(screen.getByText("Submit Data")).toBeInTheDocument();

// });

// test('button navigates from addApartment back to /sidebar', () => {
//     window.history.pushState({}, "", "/sidebar");
//     render(
//         <BrowserRouter>
//             <Addapartment />
//         </BrowserRouter>
//     );
//     expect(screen.getByText(/Back/g)).toBeInTheDocument();
// });