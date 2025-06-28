import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Building Construction', href: '#services' },
        { name: 'Renovation', href: '#services' },
        { name: 'Site Supervision', href: '#services' },
        { name: 'Civil Engineering', href: '#services' },
        { name: 'Residential Projects', href: '#services' }
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { name: '+91 9934884283', href: 'tel:+919934884283' },
        { name: 'shivam.chhotu.builder@gmail.com', href: 'mailto:shivam.chhotu.builder@gmail.com' },
        { name: 'Samastipur, Bihar', href: null },
        { name: 'Mon-Sat: 8AM-6PM', href: null }
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <div className="footer-company-info">
                <div className="footer-logo mb-3">
                  <i className="fas fa-hammer text-primary-custom me-2"></i>
                  <span className="brand-text">Shivam Chhotu Builders</span>
                </div>
                <p className="company-description">
                  Your trusted construction partner in Samastipur, Bihar. 
                  We specialize in quality building construction, renovation, 
                  and civil engineering services with years of experience.
                </p>
                
                {/* Social Media */}
                <div className="footer-social">
                  <h6 className="mb-3">Follow Us</h6>
                  <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/919934884283" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="col-lg-8">
              <div className="row">
                {footerLinks.map((section, index) => (
                  <div key={index} className="col-md-4 mb-4 mb-md-0">
                    <div className="footer-links">
                      <h6 className="footer-title mb-3">{section.title}</h6>
                      <ul className="footer-link-list">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            {link.href ? (
                              <a 
                                href={link.href}
                                onClick={link.href.startsWith('#') ? (e) => {
                                  e.preventDefault();
                                  scrollToSection(link.href.substring(1));
                                } : undefined}
                                className="footer-link"
                              >
                                {link.name}
                              </a>
                            ) : (
                              <span className="footer-text">{link.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright">
                © {currentYear} Shivam Chhotu Builders and Contractors. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="footer-bottom-links">
                <a href="/privacy-policy" className="footer-bottom-link">Privacy Policy</a>
                <a href="/terms-of-service" className="footer-bottom-link">Terms of Service</a>
                <a href="/sitemap" className="footer-bottom-link">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 