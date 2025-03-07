import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Banner1.css";

const Banner1 = ({ bannerslide }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === bannerslide.length - 1 ? 0 : prevSlide + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [bannerslide.length]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === bannerslide.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? bannerslide.length - 1 : prevSlide - 1));
    };

 
    return (
        <div className="banner-slider">
            {bannerslide.map((banner, index) => (
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
                        onClick={() => navigate(banner.link)} 
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={banner.image} alt={banner.title} />
                    </div>
                </div>
            ))}
    
            {/* Dots Navigation */}
            <div className="dots-container">
                {bannerslide.map((_, index) => (
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

export default Banner1;
