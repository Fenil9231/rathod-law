'use client'
import Link from 'next/link';
import { useState } from 'react';

const ContactOne = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully. We will get back to you soon.' });
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-one contact-one--case">
      <div
        className="contact-one--case__bg"
        style={{ backgroundImage: 'url(/assets/img/resource/contact-one-case-bg.jpg)' }}
      ></div>
      <div className="container clearfix">
        <div className="contact-one__form">
          <div className="sec-title">
            <div className="sub-title">
              <div className="icon">
                <img src="/assets/img/icon/sec-title-img1.png" alt="" />
              </div>
              <div className="text">
                <p>get in touch</p>
              </div>
            </div>
            <h2 className="">send us free message</h2>
          </div>

          {submitStatus && (
            <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`} style={{
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '5px',
              backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
              color: submitStatus.type === 'success' ? '#155724' : '#721c24',
              border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
            }}>
              {submitStatus.message}
            </div>
          )}

          <form className="contact-page__form contact-form-validated" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="contact-page__input-box">
                  <input
                    type="text"
                    placeholder="NAME*"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <div className="icon-box">
                    <span className="icon-icon-17"></span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="contact-page__input-box">
                  <input
                    type="text"
                    placeholder="PHONE*"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  <div className="icon-box">
                    <span className="icon-icon-37"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="contact-page__input-box">
                  <input
                    type="email"
                    placeholder="EMAIL*"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="icon-box">
                    <span className="icon-icon-18"></span>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="contact-page__input-box">
                  <input
                    type="text"
                    placeholder="SUBJECT*"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                  <div className="icon-box">
                    <span className="icon-icon-23"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="contact-page__input-box">
                  <textarea
                    name="message"
                    placeholder="COMMENT*"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  <div className="icon-box">
                    <span className="icon-icon-19"></span>
                  </div>
                </div>
                <div className="contact-page__btn">
                  <button className="thm-btn" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'send message'}
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactOne;
