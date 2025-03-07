import React from "react";
import "../styles/Sustainability.css"; // Import the CSS file

const Sustainability = () => {
  const sustainabilityData = [
    {
      title: "Eco-Friendly Materials",
      description: "We use organic cotton, recycled fabrics, and sustainable dyes to minimize our environmental impact.",
      image: "/images/sus4.jpeg",
    },
    {
      title: "Ethical Sourcing",
      description: "Our suppliers follow fair trade principles, ensuring safe working conditions and fair wages for artisans.",
      image: "/images/sus3.png",
    },
    {
      title: "Minimal Waste Production",
      description: "We implement zero-waste cutting techniques and upcycle fabric scraps into accessories and packaging.",
      image: "/images/sus2.jpg",
    },
    {
      title: "Sustainable Packaging",
      description: "Our packaging is 100% biodegradable and plastic-free, reducing landfill waste and promoting recyclability.",
      image: "/images/sus.jpg",
    },
  ];

  return (
    <div className="s">
      {/* Header Section */}
     <div className="sustainability-header">
  <h1 className="sustainability-title">SUSTAINABILITY</h1>
  <p className="sustainability-text">
    As a brand, our purpose lies in incorporating a lens of consciousness into all our business practices. 
    Each policy is continuously reviewed with the best practices, adapted, and improved upon to meet our goals 
    of energy consumption, carbon efficiency, and repurposing resources. With each update, we take strides towards 
    our sustainability goals.
  </p>
</div>

      

      {/* Sustainability Sections */}
      <div className="max-w-5xl mx-auto p-6">
        {sustainabilityData.map((item, index) => (
          <div key={index} className={`sustainability-section ${index % 2 === 0 ? "reverse" : ""}`}>
            <img src={item.image} alt={item.title} className="sustainability-image" />
            <div className="sustainability-content">
              <h2 className="sustainability-title">{item.title}</h2>
              <p className="sustainability-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-12 pb-12">
        <h2 className="sustainability-title ">Join Our Mission</h2>
        <p className="sustainability-description">
          Support sustainable fashion and make a difference. Choose Fashion Shaili for a greener future!
        </p>
      </div>
    </div>
  );
};

export default Sustainability;
