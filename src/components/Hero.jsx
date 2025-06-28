import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay">
        <div className="container">
          <div className="row min-vh-100 align-items-center">
            <div className="col-lg-8 col-md-10 mx-auto text-center">
              <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                {/* Company Logo/Icon */}
                <div className="hero-icon mb-4">
                  <i className="fas fa-building"></i>
                </div>
                
                {/* Company Name */}
                <h1 className="hero-title" data-aos="fade-up" data-aos-delay="400">
                  Shivam Chhotu
                  <span className="text-primary-custom"> Builders & Contractors</span>
                </h1>
                
                {/* Tagline */}
                <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="600">
                  Your Trusted Local Builder in Samastipur, Bihar
                </p>
                
                {/* Description */}
                <p className="hero-description" data-aos="fade-up" data-aos-delay="800">
                  Building dreams into reality with quality construction, 
                  professional service, and years of experience in the industry.
                </p>
                
                {/* CTA Buttons */}
                <div className="hero-buttons" data-aos="fade-up" data-aos-delay="1000">
                  <button 
                    className="btn btn-primary-custom btn-lg me-3 mb-3"
                    onClick={scrollToContact}
                  >
                    <i className="fas fa-phone me-2"></i>
                    Contact Us
                  </button>
                  <button 
                    className="btn btn-outline-light btn-lg mb-3"
                    onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                  >
                    <i className="fas fa-tools me-2"></i>
                    Our Services
                  </button>
                </div>
                
                {/* Contact Info */}
                <div className="hero-contact-info" data-aos="fade-up" data-aos-delay="1200">
                  <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6">
                      <div className="contact-item">
                        <i className="fas fa-phone text-primary-custom"></i>
                        <span>+91 9934884283</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="contact-item">
                        <i className="fas fa-envelope text-primary-custom"></i>
                        <span>shivam.chhotu.builder@gmail.com</span>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="contact-item">
                        <i className="fas fa-map-marker-alt text-primary-custom"></i>
                        <span>Samastipur, Bihar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1400">
        <div className="scroll-arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero; 