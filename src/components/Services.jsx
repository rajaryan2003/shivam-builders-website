import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'fas fa-building',
      title: 'Building Construction',
      description: 'Complete residential and commercial building construction with modern techniques and quality materials.',
      features: ['Foundation Work', 'Structural Design', 'Quality Materials', 'Timely Completion']
    },
    {
      id: 2,
      icon: 'fas fa-tools',
      title: 'Renovation & Remodeling',
      description: 'Transform your existing space with our professional renovation and remodeling services.',
      features: ['Interior Design', 'Structural Changes', 'Modern Upgrades', 'Cost Effective']
    },
    {
      id: 3,
      icon: 'fas fa-eye',
      title: 'Site Supervision',
      description: 'Professional site supervision ensuring quality control and project management throughout construction.',
      features: ['Quality Control', 'Progress Monitoring', 'Safety Compliance', 'Regular Updates']
    },
    {
      id: 4,
      icon: 'fas fa-drafting-compass',
      title: 'Civil Engineering Services',
      description: 'Comprehensive civil engineering solutions including planning, design, and technical consultation.',
      features: ['Structural Design', 'Technical Planning', 'Engineering Consultation', 'Blueprint Creation']
    },
    {
      id: 5,
      icon: 'fas fa-home',
      title: 'Residential Projects',
      description: 'Custom residential construction tailored to your specific needs and lifestyle requirements.',
      features: ['Custom Design', 'Personal Touch', 'Quality Finish', 'Warranty']
    },
    {
      id: 6,
      icon: 'fas fa-industry',
      title: 'Commercial Projects',
      description: 'Large-scale commercial construction projects with focus on functionality and aesthetics.',
      features: ['Large Scale', 'Commercial Standards', 'Modern Facilities', 'Business Ready']
    }
  ];

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Our <span className="text-primary-custom">Services</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Comprehensive Construction Solutions for All Your Building Needs
            </p>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-4">
              <div 
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>

                <div className="service-content">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-features">
                    <ul className="feature-list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <i className="fas fa-check text-primary-custom"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-phone"></i>
                    <p>Contact for Details</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="services-cta" data-aos="fade-up">
              <h4 className="mb-3">Need a Custom Solution?</h4>
              <p className="mb-4">
                We offer specialized construction services tailored to your specific requirements. 
                Contact us to discuss your project needs.
              </p>
              <button 
                className="btn btn-primary-custom btn-lg"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fas fa-phone me-2"></i>
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 