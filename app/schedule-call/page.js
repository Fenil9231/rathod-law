'use client';
import { useState } from 'react';
import Link from 'next/link';
import Layout from "@/components/layout/Layout";

export default function ScheduleCall() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.preferredDate,
          time: formData.preferredTime,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
      } else {
        setSubmitError(result.message || 'Failed to submit consultation request. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Schedule a Call">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="schedule-call-content">
              <div className="sec-title text-center mb-5">
                <div className="sub-title">
                  <div className="icon">
                    <img src="/assets/img/icon/sec-title-img1.png" alt="Section Title Icon" />
                  </div>
                  <div className="text">
                    <p style={{color: '#d4af37', fontWeight: 'bold'}}>Get In Touch</p>
                  </div>
                </div>
                <h2 style={{color: '#1a365d', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px'}}>Schedule a Consultation Call</h2>
                <p className="mt-3" style={{color: '#666', fontSize: '18px', lineHeight: '1.6'}}>Book a free 15-minute consultation with our experienced legal team to discuss your case and explore your options.</p>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="schedule-info">
                    <h3 className="mb-4" style={{color: '#1a365d', fontSize: '24px', fontWeight: 'bold'}}>Why Schedule a Call?</h3>
                    <p>
                      A consultation call allows us to understand your legal needs and determine how we can best assist you. During this call, you can:
                    </p>
                    <ul className="list-unstyled ps-0 mt-4">
                      <li className="d-flex mb-3">
                        <span className="icon-icon-16 me-3 mt-1"></span>
                        <div>Discuss your legal situation with a qualified professional</div>
                      </li>
                      <li className="d-flex mb-3">
                        <span className="icon-icon-16 me-3 mt-1"></span>
                        <div>Get preliminary advice on potential legal options</div>
                      </li>
                      <li className="d-flex mb-3">
                        <span className="icon-icon-16 me-3 mt-1"></span>
                        <div>Learn about our services and how we can help</div>
                      </li>
                      <li className="d-flex mb-3">
                        <span className="icon-icon-16 me-3 mt-1"></span>
                        <div>Understand the next steps in your legal journey</div>
                      </li>
                    </ul>

                    <h3 className="mt-5 mb-4" style={{color: '#1a365d', fontSize: '24px', fontWeight: 'bold'}}>What to Prepare</h3>
                    <p>
                      To make the most of your consultation, please be prepared to briefly explain:
                    </p>
                    <ul className="list-unstyled ps-0 mt-4">
                      <li className="d-flex mb-3">
                        <span className="icon-icon-16 me-3 mt-1"></span>
                        <div>The nature of your legal issue</div>
                      </li>
                      <li className="d-flex mb-3">
                        <span className="icon-icon-16 me-3 mt-1"></span>
                        <div>Any deadlines or time-sensitive matters</div>
                      </li>
                      <li className="d-flex mb-3">
                        <span className="icon-icon-16 me-3 mt-1"></span>
                        <div>Your goals and what you hope to achieve</div>
                      </li>
                    </ul>

                    <div className="contact-info mt-5">
                      <h3 className="mb-4" style={{color: '#1a365d', fontSize: '24px', fontWeight: 'bold'}}>Need Immediate Assistance?</h3>
                      <p>If your matter is urgent, please contact us directly:</p>
                      <ul className="list-unstyled ps-0 mt-4">
                        <li className="d-flex mb-3">
                          <span className="icon-icon-1 me-3 mt-1"></span>
                          <div>Brampton: (647) 654-9454</div>
                        </li>
                        <li className="d-flex mb-3">
                          <span className="icon-icon-1 me-3 mt-1"></span>
                          <div>Scarborough: (437) 880-9656</div>
                        </li>
                        <li className="d-flex mb-3">
                          <span className="icon-icon-2 me-3 mt-1"></span>
                          <div>Email: rathod@hplaw.org</div>
                        </li>
                        <li className="d-flex mb-3">
                          <span className="icon-icon-3 me-3 mt-1"></span>
                          <div>Hours: 9am to 5pm Toronto Time, Monday to Friday only</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="schedule-form-wrapper">
                    {formSubmitted ? (
                      <div className="success-message text-center p-5">
                        <div className="icon mb-4">
                          <span className="icon-icon-16 fs-1 text-success"></span>
                        </div>
                        <h3>Thank You!</h3>
                        <p className="mb-4">Your consultation request has been submitted successfully. One of our team members will contact you shortly to confirm your appointment.</p>
                        <button 
                          className="thm-btn" 
                          onClick={() => setFormSubmitted(false)}
                        >
                          Schedule Another Call
                          <span className="thm-btn__icon">
                            <i className="icon-icon-8"></i>
                          </span>
                          <span className="thm-btn__hover-group">
                            <span className="thm-btn__hover thm-btn__hover--1"></span>
                            <span className="thm-btn__hover thm-btn__hover--2"></span>
                            <span className="thm-btn__hover thm-btn__hover--3"></span>
                            <span className="thm-btn__hover thm-btn__hover--4"></span>
                          </span>
                        </button>
                      </div>
                    ) : (
                      <>
                        {submitError && (
                          <div className="alert alert-danger" style={{
                            padding: '15px',
                            marginBottom: '20px',
                            borderRadius: '5px',
                            backgroundColor: '#f8d7da',
                            color: '#721c24',
                            border: '1px solid #f5c6cb'
                          }}>
                            {submitError}
                          </div>
                        )}
                        <form onSubmit={handleSubmit} className="schedule-form" style={{
                          '& .form-label': {
                            color: '#1a365d',
                            fontWeight: '600',
                            marginBottom: '8px'
                          },
                          '& .form-control, & .form-select': {
                            border: '2px solid #e0e0e0',
                            borderRadius: '5px',
                            padding: '12px',
                            fontSize: '16px',
                            transition: 'border-color 0.3s'
                          },
                          '& .form-control:focus, & .form-select:focus': {
                            borderColor: '#d4af37',
                            boxShadow: '0 0 0 0.2rem rgba(212, 175, 55, 0.25)'
                          }
                        }}>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-group">
                              <label htmlFor="name" className="form-label" style={{color: '#1a365d', fontWeight: '600', marginBottom: '8px'}}>Full Name *</label>
                              <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                                style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', transition: 'border-color 0.3s'}}
                                onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group">
                              <label htmlFor="email" className="form-label" style={{color: '#1a365d', fontWeight: '600', marginBottom: '8px'}}>Email Address *</label>
                              <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', transition: 'border-color 0.3s'}}
                                onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-group">
                              <label htmlFor="phone" className="form-label" style={{color: '#1a365d', fontWeight: '600', marginBottom: '8px'}}>Phone Number *</label>
                              <input 
                                type="tel" 
                                className="form-control" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                required 
                                style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', transition: 'border-color 0.3s'}}
                                onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group">
                              <label htmlFor="service" className="form-label" style={{color: '#1a365d', fontWeight: '600', marginBottom: '8px'}}>Service Needed *</label>
                              <select 
                                className="form-select" 
                                id="service" 
                                name="service" 
                                value={formData.service} 
                                onChange={handleChange} 
                                required
                                style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', transition: 'border-color 0.3s'}}
                                onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                              >
                                <option value="" disabled>Select a service</option>
                                <option value="Immigration Appeals">Immigration Appeals</option>
                                <option value="Refugee Appeals">Refugee Appeals</option>
                                <option value="Immigration Applications">Immigration Applications</option>
                                <option value="Family Law Services">Family Law Services</option>
                                <option value="Notarization">Notarization</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-group">
                              <label htmlFor="preferredDate" className="form-label" style={{color: '#1a365d', fontWeight: '600', marginBottom: '8px'}}>Preferred Date *</label>
                              <input 
                                type="date" 
                                className="form-control" 
                                id="preferredDate" 
                                name="preferredDate" 
                                value={formData.preferredDate} 
                                onChange={handleChange} 
                                required 
                                style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', transition: 'border-color 0.3s'}}
                                onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-group">
                              <label htmlFor="preferredTime" className="form-label" style={{color: '#1a365d', fontWeight: '600', marginBottom: '8px'}}>Preferred Time *</label>
                              <select 
                                className="form-select" 
                                id="preferredTime" 
                                name="preferredTime" 
                                value={formData.preferredTime} 
                                onChange={handleChange} 
                                required
                                style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', transition: 'border-color 0.3s'}}
                                onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                              >
                                <option value="" disabled>Select a time</option>
                                <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                                <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                                <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                                <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
                                <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
                                <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
                                <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        <div className="form-group mb-4">
                          <label htmlFor="message" className="form-label" style={{color: '#1a365d', fontWeight: '600', marginBottom: '8px'}}>Brief Description of Your Case</label>
                          <textarea 
                            className="form-control" 
                            id="message" 
                            name="message" 
                            rows="5" 
                            value={formData.message} 
                            onChange={handleChange} 
                            placeholder="Please provide a brief overview of your legal matter to help us prepare for the call."
                            style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', width: '100%', minHeight: '120px', resize: 'vertical', transition: 'border-color 0.3s'}}
                            onFocus={(e) => e.target.style.borderColor = '#d4af37'}
                            onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                          ></textarea>
                        </div>

                        <div className="contact-form__checkbox-group" style={{marginBottom: '25px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
                          <h4 style={{marginBottom: '15px', color: '#333', fontSize: '16px', fontWeight: '600'}}>Consent & Communication Preferences</h4>
                          
                          <div className="checkbox-item" style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start'}}>
                            <input type="checkbox" id="sms-consent" name="sms_consent" required style={{marginTop: '3px', marginRight: '10px'}} />
                            <label htmlFor="sms-consent" style={{fontSize: '14px', lineHeight: '1.5', color: '#555'}}>
                              <strong>SMS Notifications (Required):</strong> I consent to receive SMS notifications & alerts from Rathod Law Firm regarding my appointment and case updates. Message frequency varies. Message & data rates may apply. Text HELP for assistance. You can reply STOP to unsubscribe at any time.
                            </label>
                          </div>
                          
                          <div className="checkbox-item" style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start'}}>
                            <input type="checkbox" id="email-consent" name="email_consent" required style={{marginTop: '3px', marginRight: '10px'}} />
                            <label htmlFor="email-consent" style={{fontSize: '14px', lineHeight: '1.5', color: '#555'}}>
                              <strong>Email Communications (Required):</strong> I consent to receive email communications from Rathod Law Firm regarding my appointment, case updates, and important legal notices.
                            </label>
                          </div>
                          
                          <div className="checkbox-item" style={{marginBottom: '15px', display: 'flex', alignItems: 'flex-start'}}>
                            <input type="checkbox" id="marketing-consent" name="marketing_consent" style={{marginTop: '3px', marginRight: '10px'}} />
                            <label htmlFor="marketing-consent" style={{fontSize: '14px', lineHeight: '1.5', color: '#555'}}>
                              <strong>Marketing Communications (Optional):</strong> I consent to receive occasional marketing communications, newsletters, and legal updates from Rathod Law Firm.
                            </label>
                          </div>
                          
                          <div className="checkbox-item" style={{marginBottom: '20px', display: 'flex', alignItems: 'flex-start'}}>
                            <input type="checkbox" id="data-processing" name="data_processing" required style={{marginTop: '3px', marginRight: '10px'}} />
                            <label htmlFor="data-processing" style={{fontSize: '14px', lineHeight: '1.5', color: '#555'}}>
                              <strong>Data Processing (Required):</strong> I understand and consent to the collection, use, and processing of my personal information as outlined in the Privacy Policy for the purpose of providing legal services.
                            </label>
                          </div>
                          
                          <div className="policy-links" style={{fontSize: '13px', color: '#666', padding: '15px', backgroundColor: '#fff', borderRadius: '5px', border: '1px solid #ddd'}}>
                            <p style={{margin: '0 0 10px 0', fontWeight: '600'}}>Important Legal Information:</p>
                            <p style={{margin: '0 0 10px 0'}}>By submitting this form, you acknowledge that you have read and agree to our:</p>
                            <ul style={{margin: '0', paddingLeft: '20px'}}>
                              <li><Link href="/privacy-policy" style={{color: '#d4af37', textDecoration: 'underline', fontWeight: '500'}}>Privacy Policy</Link> - How we collect, use, and protect your information</li>
                              <li><Link href="/terms-and-conditions" style={{color: '#d4af37', textDecoration: 'underline', fontWeight: '500'}}>Terms and Conditions</Link> - Our service terms and legal disclaimers</li>
                              <li><Link href="/cookie-policy" style={{color: '#d4af37', textDecoration: 'underline', fontWeight: '500'}}>Cookie Policy</Link> - How we use cookies on our website</li>
                            </ul>
                            <p style={{margin: '10px 0 0 0', fontSize: '12px', fontStyle: 'italic'}}>Note: This consultation does not create an attorney-client relationship. Confidential information should not be shared until a formal agreement is established.</p>
                          </div>
                        </div>

                        <div className="text-center">
                          <button 
                            type="submit" 
                            className="thm-btn" 
                            disabled={isSubmitting}
                            style={{
                              backgroundColor: '#d4af37',
                              border: 'none',
                              padding: '15px 30px',
                              fontSize: '16px',
                              fontWeight: '600',
                              borderRadius: '5px',
                              cursor: isSubmitting ? 'not-allowed' : 'pointer',
                              transition: 'all 0.3s ease',
                              opacity: isSubmitting ? 0.7 : 1
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubmitting) {
                                e.target.style.backgroundColor = '#b8941f';
                                e.target.style.transform = 'translateY(-2px)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubmitting) {
                                e.target.style.backgroundColor = '#d4af37';
                                e.target.style.transform = 'translateY(0)';
                              }
                            }}
                          >
                            {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                            <span className="thm-btn__icon">
                              <i className="icon-icon-8"></i>
                            </span>
                            <span className="thm-btn__hover-group">
                              <span className="thm-btn__hover thm-btn__hover--1"></span>
                              <span className="thm-btn__hover thm-btn__hover--2"></span>
                              <span className="thm-btn__hover thm-btn__hover--3"></span>
                              <span className="thm-btn__hover thm-btn__hover--4"></span>
                            </span>
                          </button>
                        </div>
                      </form>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}