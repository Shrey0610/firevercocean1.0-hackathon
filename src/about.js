import React from 'react';

import './about.css'
const About = () => {
    return(
        <about id='about'>
<section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>VidhyaYatraAI- Connecting with future</h2>
          <p>
            {" "}
            VidhyaYatraAI stands as a leading force in innovative educational solutions. We believe technology should simplify learning, enhance security, and create a comfortable environment for students. Our mission is to deliver cutting-edge educational technology, enriching daily lives. Our team of experts is dedicated to innovation and excellence, refining skills over years of experience. Our goal is to craft a seamless and integrated educational experience, embracing the latest advancements. Join us on the journey of transforming education with VidhyaYatraAI.
          </p>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p>
            At VidhyaYatraAI, we prioritize the utmost security and privacy for your educational journey. Employing cutting-edge technologies and protocols, we ensure the safeguarding of your data and devices. Our dedication to excellence has earned us accolades and awards from esteemed industry experts and organizations. This commitment, coupled with a focus on customer satisfaction, distinguishes us in the educational technology landscape.
            </p>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
            Explore the possibilities of enhancing your educational experience with VidhyayatraAI. Reach out to us today to discover more about our innovative products and services. Learn how VidhyayatraAI can revolutionize your educational journey by providing a more connected and automated learning environment. Let's shape the future of education together!
            </p>
            <a href="#" className="btn-learn-more">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="testimonials section-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-title">
      <h2>Our Team</h2>
      <p>
        The Strength of Team is each individual member. The strength of each
        individual member is a team.
      </p>
    </div>
    <div
      className="testimonials-slider swiper"
      data-aos="fade-up"
      data-aos-delay={100}
      style={{ display: 'flex' }} // Add this inline style to make images side by side
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide" style={{ flex: '0 0 50%' }}>
          <div className="testimonial-item">
            <img
              src="/SHREY.jpeg"
              className="testimonial-img"
              alt=""
              style={{ height: '500px', width: '100%' }}
            />
            <h3>Shrey Shah</h3>
          </div>
        </div>
        <div className="swiper-slide" style={{ flex: '0 0 50%' }}>
          <div className="testimonial-item">
            <img
              src="/WhatsApp Image 2024-02-04 at 12.49.12 PM.jpeg"
              className="testimonial-img"
              alt=""
              style={{ height: '500px', width: '100%' }}
            />
            <h3>Shubham Prajapati</h3>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </div>
</section>
</about>)
}

export default About;