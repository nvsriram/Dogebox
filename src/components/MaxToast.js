import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const MaxToast = () => {
    const [open, setOpen] = useState(true);
    const toggleOpen = () => {
        setOpen(false);
    };
    return (
        <Toast id="max-toast" show={open} onClose={toggleOpen}>
            <Toast.Header>All images loaded.</Toast.Header>
        </Toast>
    );
};

export default MaxToast;
