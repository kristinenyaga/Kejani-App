import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBarPages from "./sideBarPages.js";





test("renders without any errors", () => {
    const errorSpy = jest.spyOn(global.console, "error");

    render(
        <React.StrictMode>
            <BrowserRouter>
                <SideBarPages />
            </BrowserRouter>
        </React.StrictMode>);

    expect(errorSpy).not.toHaveBeenCalled();

    errorSpy.mockRestore();
});

// test('renders the Inbox component using the <Route path="/inbox">', () => {
//     window.history.pushState({}, "", "/inbox");
//     render(
//         <BrowserRouter>
//             <SideBarPages />
//         </BrowserRouter>
//     );
//     expect(screen.queryByText(/Inbox/g)).toBeInTheDocument();
// });


