// src/App.jsx
import { useState } from 'react';
import Gallery from './components/Gallery';
import Modal from './components/Modal';
import './App.css';

const images = [
    { src: '/images/img5.jpg', alt: 'Image 1' },
    { src: '/images/img2.jpg', alt: 'Image 2' },
    { src: '/images/img3.jpg', alt: 'Image 3' },
    { src: '/images/img4.jpg', alt: 'Image 4' },
    { src: '/images/img11.jpg', alt: 'Image 5' },
    { src: '/images/img6.jpg', alt: 'Image 6' },
    { src: '/images/img7.jpg', alt: 'Image 7' },
    { src: '/images/img8.jpg', alt: 'Image 8' },
    { src: '/images/img9.jpg', alt: 'Image 9' },
    { src: '/images/img10.jpg', alt: 'Image 9' },
];

const App = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const openModal = (index) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    const showNextImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const showPrevImage = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const currentImage = images[selectedImageIndex];

    return (
        <div className="app">
            <h1>IMAGE GALLERY</h1>
            <Gallery images={images} onImageClick={openModal} />
            <Modal
                isOpen={selectedImageIndex !== null}
                onClose={closeModal}
                image={currentImage}
                onNext={showNextImage}
                onPrev={showPrevImage}
            />
        </div>
    );
};

export default App;
