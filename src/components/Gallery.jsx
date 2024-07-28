// src/components/Gallery.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from './ImageItem';
import './Gallery.css';

const Gallery = ({ images, onImageClick }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <ImageItem
                    key={index}
                    image={image}
                    onClick={() => onImageClick(index)}
                />
            ))}
        </div>
    );
};

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired
};

export default Gallery;
