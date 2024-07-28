// src/components/Modal.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ isOpen, onClose, image, onNext, onPrev }) => {
    if (!isOpen || !image) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>
                <button className="prev-button" onClick={onPrev}>←</button>
                <img src={image.src} alt={image.alt} />
                <button className="next-button" onClick={onNext}>→</button>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }),
    onNext: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired
};

export default Modal;
