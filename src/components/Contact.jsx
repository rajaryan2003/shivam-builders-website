import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+91 9934884283',
      link: 'tel:+919934884283'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'shivam.chhotu.builder@gmail.com',
      link: 'mailto:shivam.chhotu.builder@gmail.com'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      value: 'Ward No. 6 (New Nagar Panchayat Ward No-16), Singhia, Near Jyoti Gyan Niketan Public School, Samastipur, Bihar - 848209',
      link: null
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      value: 'Monday - Saturday: 8:00 AM - 6:00 PM',
      link: null
    }
  ];

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="row">
          {/* Section Header */}
          <div className="col-12 text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Contact <span className="text-primary-custom">Us</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Get in Touch for Your Construction Needs
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="contact-info" data-aos="fade-right">
              <h3 className="contact-subtitle mb-4">Get In Touch</h3>
              <p className="contact-description mb-4">
                Ready to start your construction project? Contact us today for a free consultation 
                and quote. Our team is here to help you bring your vision to life.
              </p>

              {/* Contact Details */}
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <i className={info.icon}></i>
                    </div>
                    <div className="contact-text">
                      <h5>{info.title}</h5>
                      {info.link ? (
                        <a href={info.link} className="contact-link">
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="social-media mt-4">
                <h5 className="mb-3">Follow Us</h5>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://wa.me/919934884283" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <div className="contact-form-container" data-aos="fade-left">
              <div className="contact-form">
                <h3 className="form-title mb-4">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-control"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <div className="form-submit">
                    <button 
                      type="submit" 
                      className="btn btn-primary-custom btn-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin me-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane me-2"></i>
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="map-container" data-aos="fade-up">
              <h3 className="map-title mb-4">Find Us on Map</h3>
              <div className="map-placeholder">
                <i className="fas fa-map-marked-alt"></i>
                <h5>Samastipur, Bihar</h5>
                <p>Ward No. 6 (New Nagar Panchayat Ward No-16), Singhia, Near Jyoti Gyan Niketan Public School</p>
                <a 
                  href="https://maps.google.com/?q=Samastipur,Bihar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary-custom"
                >
                  <i className="fas fa-external-link-alt me-2"></i>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 