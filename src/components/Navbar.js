import React from 'react';
import { Navbar as BSNavbar } from 'react-bootstrap';
import logo from '../assets/doge-logo.png';

const Navbar = () => {
    return (
        <BSNavbar className="mx-5 my-0 pb-0 justify-content-center">
            <BSNavbar.Brand href="#" className="mx-0">
                <img
                    alt={logo}
                    src={logo}
                    id="logo"
                    className="img d-inline-block align-middle mx-2"
                />
                <span
                    className="display-4 d-inline-block align-middle mx-2"
                    id="brand"
                >
                    Dogebox
                </span>
                <hr />
            </BSNavbar.Brand>
        </BSNavbar>
    );
};

export default Navbar;
