import React from 'react';
import { Toast } from 'react-bootstrap';
import upArrow from '../assets/up-arrow.svg';

export default function ScrollToast({ navigateTop }) {
    return (
        <Toast
            show={navigateTop}
            onClick={() => window.scrollTo(0, 0)}
            id="up-arrow-toast"
        >
            <img src={upArrow} id="up-arrow" alt="" />
        </Toast>
    );
}
