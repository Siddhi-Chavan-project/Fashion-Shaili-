import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpg"
            alt="about-us"
            style={{ width: "100%", marginTop: "60px" }}
          />
        </div>
        <div className="col-md-6">
 
          <p className="text-justify mt-2">      <br></br>   <h1> ABOUT US</h1>
            At Fashion Shaili, we believe that fashion is more than just clothing—it's an expression of culture, personality, and confidence. Our platform seamlessly blends modern fashion with traditional Indian aesthetics, bringing you a curated selection of stylish clothing, accessories, and beauty products.
            <br />
            <br />
            Whether you're looking for ethnic elegance, contemporary chic, or fusion styles, our collection caters to fashion enthusiasts who love to experiment with trends while staying rooted in cultural heritage. We are committed to offering a secure, user-friendly shopping experience that celebrates individuality and creativity.
            <br />
            <br />
            Join us in redefining fashion with a touch of heritage!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
