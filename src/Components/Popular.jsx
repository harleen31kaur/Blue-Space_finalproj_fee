
import React, { useEffect, useState } from 'react';
import statue from '/statue.jpg';
import tajMahal from '/taj mahal.jpg';
import museum from '/museum.jpg';
import fort from '/fort.jpeg';

const Popular = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: statue,
            title: 'Statue of Unity',
            description: "It's huge, almost gigantic! That is the first reaction most people have as they speed down the winding road leading to the towering Statue of Unity (SoU). A long bridge connects the mainland to the..."
        },
        {
            image: tajMahal,
            title: 'Most Famous',
            description: "India is a remarkable tourist destination that offers a plethora of experiences to travelers. From the grandiose Taj Mahal, one of the wonders of the World, to opulent palaces and forts, India..."
        },
        {
            image: museum,
            title: 'Museums',
            description: "The glorious ancient history of India with its rich cultural heritage and a vibrant potpourri of traditions has been immortalized in various museums and galleries across the country from pre-historic..."
        },
        {
            image: fort,
            title: 'Forts and Palaces',
            description: "India is blessed with heritage riches and a royal lineage. Vestiges of Indian royalty can be felt in the various forts and palaces speckled across the country. From hill forts in Rajasthan to..."
        }
    ];

    const showSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='popular'>
            <h2 id="a">Popular in India</h2>
            <p id="b">India is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve.</p>
            <div className="slider">
                <button className="prev" onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)}>&#10094;</button>
                <div className="slider-wrapper">
                    {slides.map((slide, index) => (
                        <div className="slide" key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                            <div className="slide-content">
                                <img src={slide.image} alt={`Image ${index + 1}`} style={{ width: '100vw', height: 'auto', maxWidth: '100%', maxHeight: '400px' }} />
                                <div className="text">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="next" onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)}>&#10095;</button>
            </div>
        </div>
    );
}

export default Popular;