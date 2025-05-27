import React from "react";

const Modal = ({ setIsModalOpen ,component}) => {
    return <div className="modal">
        <div className="close-icon" onClick={()=>setIsModalOpen(false)}>&times;</div>
        <div className="modal-component">
            {component && component}
        </div>
    </div>;
};

export default Modal;
