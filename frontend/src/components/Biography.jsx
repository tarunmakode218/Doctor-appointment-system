import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome! We are delighted to have you here. 
          At our core, we believe in excellence, integrity, 
          and commitment. Our team strives to deliver unmatched 
          quality and ensure that every experience with us is valuable 
          and fulfilling.

       With a deep understanding of your needs, we go beyond expectations—offering
      personalized solutions, building trust, and delivering results that truly make 
      a difference. Whether you're just getting started or looking to grow further, 
      we are here to guide and support you every step of the way.

              Let's build something exceptional together!
          </p>
          <p>We are all in 2025!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          We take pride in delivering solutions that stand out for their 
          precision and impact. With a deep sense of responsibility, we 
          approach every challenge with integrity, commitment, and a drive 
          for excellence.Our team is equipped to navigate complexities and 
          deliver results, even in the most demanding situations. We believe 
          in clarity, value, and building meaningful relationships with those 
          we serve. Every detail matters—and we’re here to make a difference through
           thoughtful execution and unwavering support.
          </p>
          <p>Welcome to a space where excellence meets intention.</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
