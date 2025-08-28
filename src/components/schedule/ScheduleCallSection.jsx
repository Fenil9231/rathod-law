import React, { useState } from 'react';
import Link from 'next/link';
import Modal from '../common/Modal';

function ScheduleCallSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
    smsConsent: false,
    marketingConsent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'schedule'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          title: 'Consultation Scheduled!',
          message: 'Thank you! Your consultation request has been submitted successfully. We will contact you shortly to confirm your appointment.'
        });
        setShowModal(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          message: '',
          smsConsent: false,
          marketingConsent: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          title: 'Submission Failed',
          message: result.message || 'There was an error submitting your request. Please try again.'
        });
        setShowModal(true);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        title: 'Submission Failed',
        message: 'There was an error submitting your request. Please try again.'
      });
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="schedule-call-section pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title1 text-center">
                <h2>Schedule a Consultation</h2>
                <p>Book a free consultation with Kapil P. Rathod to discuss your immigration or family law needs. We're here to help you navigate your legal challenges.</p>
              </div>
            </div>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-lg-8">
              <div className="schedule-form-wrapper">
                <form onSubmit={handleSubmit} className="schedule-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="service">Service Type *</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="form-control"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="immigration">Immigration Law</option>
                          <option value="family">Family Law</option>
                          <option value="notary">Notary Services</option>
                          <option value="judicial-review">Judicial Reviews</option>
                          <option value="refugee-appeals">Refugee Appeals</option>
                          <option value="other">Other Legal Services</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="date">Preferred Date *</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="form-control"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="time">Preferred Time *</label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="form-control"
                          required
                        >
                          <option value="">Select a time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="message">Brief Description of Your Case</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control"
                          rows="4"
                          placeholder="Please provide a brief description of your legal matter..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="consent-checkboxes" style={{marginBottom: '20px'}}>
                        <div className="form-check mb-3">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="scheduleSmsConsent"
                            name="smsConsent"
                            checked={formData.smsConsent}
                            onChange={handleChange}
                            required
                          />
                          <label className="form-check-label" htmlFor="scheduleSmsConsent" style={{fontSize: '14px', lineHeight: '1.5'}}>
                            I Consent to Receive SMS Notifications & Alerts from Rathod Law Firm. Message frequency varies. Message & data rates may apply. Text HELP for assistance. You can reply STOP to unsubscribe at any time.
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="scheduleMarketingConsent"
                            name="marketingConsent"
                            checked={formData.marketingConsent}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="scheduleMarketingConsent" style={{fontSize: '14px', lineHeight: '1.5'}}>
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
                    <div className="col-12 text-center">
                      <button 
                        type="submit" 
                        className="primary-btn1"
                        disabled={isSubmitting}
                        style={{opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'}}
                      >
                        {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="consultation-info">
                <h4>Free Consultation</h4>
                <p>We offer a free initial consultation to discuss your case and provide you with an understanding of your legal options.</p>
                
                <div className="info-item">
                  <h5>Office Hours</h5>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br />
                     Saturday: By Appointment<br />
                     Sunday: Closed</p>
                </div>
                
                <div className="info-item">
                  <h5>Contact Information</h5>
                  <p>Phone: <a href="tel:+1-604-593-6777">+1 (604) 593-6777</a><br />
                     Email: <a href="mailto:rathod@hplaw.org">rathod@hplaw.org</a></p>
                </div>
                
                <div className="info-item">
                  <h5>Location</h5>
                  <p>Surrey, British Columbia<br />Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <Modal
            type={submitStatus.type}
            title={submitStatus.title}
            message={submitStatus.message}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  );
}

export default ScheduleCallSection;