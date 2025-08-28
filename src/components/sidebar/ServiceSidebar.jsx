import React from 'react';
import Link from 'next/link';

const ServiceSidebar = ({ currentService }) => {
  const paralegalServices = [
    { title: 'Speeding Tickets', href: '/speeding-tickets', category: 'traffic' },
    { title: 'Cell Phone Tickets', href: '/cell-phone-tickets', category: 'traffic' },
    { title: 'Seat Belt Tickets', href: '/seat-belt-tickets', category: 'traffic' },
    { title: 'Red Light Tickets', href: '/red-light-tickets', category: 'traffic' },
    { title: 'Stunt Driving', href: '/stunt-driving', category: 'traffic' },
    { title: 'License Suspension', href: '/license-suspension', category: 'traffic' },
    { title: 'Demerit Points', href: '/demerit-points', category: 'traffic' },
    { title: 'Small Claims Court', href: '/small-claims-court', category: 'civil' },
    { title: 'Notarization', href: '/notarization', category: 'civil' }
  ];

  const legalServices = [
    { title: 'Immigration Appeals', href: '/immigration-appeals', category: 'immigration' },
    { title: 'Refugee Appeals', href: '/refugee-appeals', category: 'immigration' },
    { title: 'Immigration Applications', href: '/immigration-applications', category: 'immigration' },
    { title: 'Family Law', href: '/family-law', category: 'family' }
  ];

  // Get related services based on current service category
  const getRelatedServices = () => {
    const allServices = [...paralegalServices, ...legalServices];
    const currentServiceObj = allServices.find(service => service.href === currentService);
    
    if (!currentServiceObj) return [];
    
    return allServices
      .filter(service => 
        service.category === currentServiceObj.category && 
        service.href !== currentService
      )
      .slice(0, 4); // Limit to 4 related services
  };

  const relatedServices = getRelatedServices();

  return (
    <div className="service-sidebar">
      {relatedServices.length > 0 && (
        <div className="sidebar-widget enhanced-widget">
          <div className="widget-header">
            <div className="widget-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <h4 className="widget-title">Related Services</h4>
          </div>
          <div className="enhanced-service-list">
            {relatedServices.map((service, index) => (
              <div key={index} className="service-card">
                <Link href={service.href}>
                  <a className="service-link">
                    <div className="service-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="service-title">{service.title}</span>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="sidebar-widget enhanced-widget">
        <div className="widget-header">
          <div className="widget-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h4 className="widget-title">Paralegal Services</h4>
        </div>
        <div className="enhanced-service-list">
          {paralegalServices.map((service, index) => (
            <div key={index} className={`service-card ${currentService === service.href ? 'active' : ''}`}>
              <Link href={service.href}>
                <a className="service-link">
                  <div className="service-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="service-title">{service.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-widget enhanced-widget">
        <div className="widget-header">
          <div className="widget-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor"/>
              <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h4 className="widget-title">Legal Services</h4>
        </div>
        <div className="enhanced-service-list">
          {legalServices.map((service, index) => (
            <div key={index} className={`service-card ${currentService === service.href ? 'active' : ''}`}>
              <Link href={service.href}>
                <a className="service-link">
                  <div className="service-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="service-title">{service.title}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-widget contact-widget">
        <div className="contact-card">
          <div className="contact-header">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
              </svg>
            </div>
            <h4 className="widget-title">Need Legal Help?</h4>
          </div>
          
          <div className="contact-content">
            <p className="contact-description">Get professional legal assistance for your case.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Call Now</span>
                  <a href="tel:+16474902529" className="contact-value">(647) 490-2529</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:rathod@hplaw.org" className="contact-value">rathod@hplaw.org</a>
                </div>
              </div>
            </div>
            
            <div className="contact-actions">
              <Link href="/contact">
                <a className="eg-btn btn--primary btn--md contact-btn">
                  <span>Free Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;