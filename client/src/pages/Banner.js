import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Banner.css";

const Banner = ({ banners }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === banners.length - 1 ? 0 : prevSlide + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [banners.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === banners.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? banners.length - 1 : prevSlide - 1));
    };

    return (
        <div className="banner-slider">
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${banner.image})`, display: index === currentSlide ? 'block' : 'none' }}
                >
                    <div className="content">
                        {/* <h2>{banner.title}</h2>
                        <p>{banner.description}</p> */}
                    </div>
                    <div 
                        className="image-click" 
                        onClick={() => navigate(banner.link)} // Navigates within the same tab on image click
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={banner.image} alt={banner.title} />
                    </div>
                </div>
            ))}
            
            {/* Dot Indicators for Navigation */}
            <div className="dots-container">
                {banners.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${index === currentSlide ? 'active-dot' : ''}`} 
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
        </div>
        </div>
    );
};

export default Banner;
