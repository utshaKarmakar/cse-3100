import React from "react";

const AboutUs = () => {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#4CAF50", marginBottom: "20px" }}>About Us</h1>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Welcome to <strong>Purrfect Adoption</strong>! Our mission is to create a world where every cat has a
        loving and caring home. We partner with shelters and rescue organizations to connect adoptable cats
        with kindhearted individuals and families looking for a furry friend.
      </p>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Whether you're looking for a playful kitten or a calm senior cat, we are here to help you find
        your ideal companion. Our platform is designed to make the adoption process easy, transparent, 
        and joyful for both adopters and our feline friends.
      </p>
      <p style={{ fontSize: "16px", color: "#555" }}>
        Thank you for choosing to adopt and not shop. Together, we can give cats the love and care they
        deserve while reducing the number of homeless animals.
      </p>
      <p style={{ fontSize: "16px", color: "#555", fontStyle: "italic", marginTop: "20px" }}>
        “Saving one cat won’t change the world, but it will surely change the world for that one cat.” 
      </p>
    </div>
  );
};

export default AboutUs;
