import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      category: 'residential',
      location: 'Samastipur, Bihar',
      description: 'A beautiful 3-bedroom residential complex with modern amenities and contemporary design.',
      image: 'residential-1',
      features: ['3 Bedrooms', 'Modern Kitchen', 'Garden Area', 'Parking Space']
    },
    {
      id: 2,
      title: 'Commercial Office Building',
      category: 'commercial',
      location: 'Samastipur, Bihar',
      description: 'Multi-story commercial building with office spaces and retail areas.',
      image: 'commercial-1',
      features: ['Office Spaces', 'Retail Areas', 'Parking', 'Security System']
    },
    {
      id: 3,
      title: 'Villa Renovation',
      category: 'renovation',
      location: 'Samastipur, Bihar',
      description: 'Complete renovation of a traditional villa with modern interior design.',
      image: 'renovation-1',
      features: ['Interior Design', 'Structural Changes', 'Modern Fixtures', 'Landscaping']
    },
    {
      id: 4,
      title: 'Apartment Complex',
      category: 'residential',
      location: 'Samastipur, Bihar',
      description: 'Multi-unit apartment complex with shared amenities and community spaces.',
      image: 'residential-2',
      features: ['Multiple Units', 'Shared Amenities', 'Community Hall', 'Children Park']
    },
    {
      id: 5,
      title: 'Shopping Center',
      category: 'commercial',
      location: 'Samastipur, Bihar',
      description: 'Modern shopping center with multiple retail outlets and food court.',
      image: 'commercial-2',
      features: ['Retail Outlets', 'Food Court', 'Parking', 'Security']
    },
    {
      id: 6,
      title: 'House Extension',
      category: 'renovation',
      location: 'Samastipur, Bihar',
      description: 'Extension of existing house with additional rooms and modern facilities.',
      image: 'renovation-2',
      features: ['Additional Rooms', 'Modern Bathrooms', 'Kitchen Extension', 'Garden']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Renovation' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <div className="row">
          {/* Section Header */}
          <div className="col-12 text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Our <span className="text-primary-custom">Projects</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Showcasing Our Quality Work and Successful Projects
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="project-filters" data-aos="fade-up" data-aos-delay="300">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-4">
              <div 
                className="project-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Project Image */}
                <div className="project-image">
                  <div className="image-placeholder">
                    <i className="fas fa-building"></i>
                    <p>{project.title}</p>
                  </div>
                  
                  {/* Project Overlay */}
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <h5>{project.title}</h5>
                      <p>{project.location}</p>
                      <button className="btn btn-light btn-sm">
                        <i className="fas fa-eye me-2"></i>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-location">
                    <i className="fas fa-map-marker-alt text-primary-custom me-2"></i>
                    {project.location}
                  </p>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Project Features */}
                  <div className="project-features">
                    <div className="row">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="col-6 mb-2">
                          <div className="feature-tag">
                            <i className="fas fa-check text-primary-custom me-1"></i>
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects CTA */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="projects-cta" data-aos="fade-up">
              <h4 className="mb-3">Ready to Start Your Project?</h4>
              <p className="mb-4">
                Let us help you bring your construction dreams to life. 
                Contact us for a free consultation and quote.
              </p>
              <button 
                className="btn btn-primary-custom btn-lg"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="fas fa-phone me-2"></i>
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 