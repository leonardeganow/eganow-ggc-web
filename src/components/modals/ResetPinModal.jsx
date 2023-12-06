import { Modal } from '@mui/material';
import React from 'react'

const style = {
    position: "relative",
    top: "54%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height:"100%",
    // height: loginState  ? "auto" : "500px",
    width: "95vw", // Use viewport width
    // maxWidth: loginState ?"400px": "800px", // Set a maximum width if needed
    boxShadow: "40px",
    padding: "1rem",
    overflow: "auto",
    // maxHeight: "600px",
    borderRadius: "1rem",
    zIndex: 6666,
    backgroundColor: "green"

};


function ResetPinModal({ open, close }) {
    return (
        <div className='bg-danger'>
            <Modal
                open={open}
                onClose={close}
            >
                <div className="p-md-4 p-3 " >
                    <div className='d-flex justify-content-center align-items-center bg-white'>
                        sfsdfsd
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ResetPinModal;
