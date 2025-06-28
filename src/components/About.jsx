import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="row">
          {/* Section Header */}
          <div className="col-12 text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              About <span className="text-primary-custom">Us</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Building Excellence, Delivering Trust
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          {/* About Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-content" data-aos="fade-right">
              <h3 className="about-subtitle mb-4">
                Your Trusted Construction Partner in Samastipur
              </h3>
              
              <div className="about-text">
                <p className="mb-4">
                  Shivam Chhotu Builders and Contractors has been serving the community 
                  of Samastipur, Bihar with dedication and excellence for years. We are 
                  committed to delivering high-quality construction services that meet 
                  the highest standards of safety, durability, and aesthetic appeal.
                </p>
                
                <p className="mb-4">
                  Our team of experienced professionals combines traditional craftsmanship 
                  with modern construction techniques to create structures that stand the 
                  test of time. From residential buildings to commercial projects, we 
                  approach every project with the same level of commitment and attention 
                  to detail.
                </p>
                
                <p className="mb-4">
                  We believe in building not just structures, but relationships. Our 
                  client-centric approach ensures that every project is completed on time, 
                  within budget, and exceeds expectations. Your satisfaction is our 
                  ultimate goal.
                </p>
              </div>

              {/* Key Features */}
              <div className="about-features">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-primary-custom me-2"></i>
                      <span>Quality Construction</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-primary-custom me-2"></i>
                      <span>Timely Delivery</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-primary-custom me-2"></i>
                      <span>Experienced Team</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="feature-item">
                      <i className="fas fa-check-circle text-primary-custom me-2"></i>
                      <span>Competitive Pricing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Image */}
          <div className="col-lg-6">
            <div className="about-image-container" data-aos="fade-left">
              <div className="about-image">
                <div className="image-placeholder">
                  <i className="fas fa-building"></i>
                  <p>Construction Site Image</p>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="experience-badge">
                <div className="badge-content">
                  <h4>5+</h4>
                  <p>Years of Experience</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="stats-container">
                <div className="stat-item">
                  <h5>50+</h5>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h5>100%</h5>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 