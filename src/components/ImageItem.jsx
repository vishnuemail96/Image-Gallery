// src/components/ImageItem.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './ImageItem.css';

const ImageItem = ({ image, onClick }) => {
    return (
        <div className="image-item" onClick={onClick}>
            <img src={image.src} alt={image.alt} />
        </div>
    );
};

ImageItem.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default ImageItem;
