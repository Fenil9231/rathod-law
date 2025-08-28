import Link from "next/link";
import React, { useState } from "react";
import Modal from '../common/Modal';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
    smsConsent: false,
    marketingConsent: false,
    formType: 'contact'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.smsConsent) {
      alert('Please consent to receive SMS notifications to proceed.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          title: 'Message Sent Successfully!',
          message: 'Thank you for contacting us! We have received your message and will get back to you within 24 hours.' 
        });
        setShowModal(true);
        setFormData({
          name: '',
          subject: '',
          email: '',
          phone: '',
          message: '',
          smsConsent: false,
          marketingConsent: false,
          formType: 'contact'
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          title: 'Message Failed to Send',
          message: result.message || 'We encountered an issue sending your message. Please try again or contact us directly.' 
        });
        setShowModal(true);
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        title: 'Connection Error',
        message: 'Unable to connect to our servers. Please check your internet connection and try again.' 
      });
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmitStatus(null);
  };

  return (
    <>
      <Modal
        isOpen={showModal}
        onClose={closeModal}
        type={submitStatus?.type}
        title={submitStatus?.title}
        message={submitStatus?.message}
      />
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-inner">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name" 
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-inner">
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject" 
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-inner">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email" 
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-inner">
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your Phone" 
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-inner">
              <textarea 
                rows={5} 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message" 
                required
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="consent-checkboxes" style={{marginBottom: '20px'}}>
              <div className="form-check mb-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="smsConsent"
                  name="smsConsent"
                  checked={formData.smsConsent}
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="smsConsent" style={{fontSize: '14px', lineHeight: '1.5'}}>
                  I Consent to Receive SMS Notifications & Alerts from Rathod Law Firm. Message frequency varies. Message & data rates may apply. Text HELP for assistance. You can reply STOP to unsubscribe at any time.
                </label>
              </div>
              <div className="form-check mb-3">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="marketingConsent"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="marketingConsent" style={{fontSize: '14px', lineHeight: '1.5'}}>
                  I Consent to Receive Occasional Marketing Communication from Rathod Law Firm.
                </label>
              </div>
              <p style={{fontSize: '12px', color: '#666', marginBottom: '0'}}>
                By submitting this form, you agree to our{' '}
                <Link href="/privacy-policy">
                  <a style={{color: 'var(--primary-color1)', textDecoration: 'underline'}}>Privacy Policy</a>
                </Link>
                {' '}and{' '}
                <Link href="/terms-conditions">
                  <a style={{color: 'var(--primary-color1)', textDecoration: 'underline'}}>Terms & Conditions</a>
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="col-lg-12 text-lg-start text-center">
            <button 
              className="eg-btn btn--dark btn--lg" 
              type="submit"
              disabled={isSubmitting}
              style={{opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'}}
            >
              <i className="bi bi-dash-lg" />
              {isSubmitting ? 'Sending...' : 'Contact Now'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
