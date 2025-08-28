import Link from "next/link";
import React, { useState } from "react";
import Head from "next/head";
import Breadcrumb from "../common/Breadcrumb";
import BlogCategoryWidget from "../components/blog/BlogCategoryWidget";
import BlogCommentsSlider from "../components/blog/BlogCommentsSlider";
import BlogSearchWidget from "../components/blog/BlogSearchWidget";
import BlogTagWidget from "../components/blog/BlogTagWidget";
import RecentBlogPost from "../components/blog/RecentBlogPost";
import Layout from "../components/layout/Layout";
import Modal from "../components/common/Modal";

function BlogDetails() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    smsConsent: false,
    marketingConsent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
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
          formType: 'blog-comment'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          title: 'Comment Submitted!',
          message: 'Thank you! Your comment has been submitted successfully.'
        });
        setShowModal(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          smsConsent: false,
          marketingConsent: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          title: 'Submission Failed',
          message: result.message || 'There was an error submitting your comment. Please try again.'
        });
        setShowModal(true);
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        title: 'Submission Failed',
        message: 'There was an error submitting your comment. Please try again.'
      });
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Demo Blog Details - Not for Search Engines</title>
      </Head>
      <Layout>
        <Breadcrumb title="Blog Details" pageName="Blog Details" />
        <div className="blog-details-section pt-120 pb-120">
          <div className="container">
            <div className="row gy-5">
              <div className="col-lg-8">
                <div className="blog-details-single">
                  <div className="image">
                    <span className="blog-badge">Violence</span>
                    <Link href="/blog-details">
                      <a>
                        <img
                          src="assets/images/blog/blog-details1.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="text">
                    <h2>
                      <Link href="/blog-details">
                        <a>Nullam feugiat et quam in accumsan.</a>
                      </Link>
                    </h2>
                    <ul className="post-meta-list">
                      <li>
                        <img src="assets/images/icons/user.svg" alt="image" />
                        <span>By, Admin</span>
                      </li>
                      <li>
                        <img
                          src="assets/images/icons/calendr.svg"
                          alt="image"
                        />
                        <span>25 May, 2022</span>
                      </li>
                      <li>
                        <img src="assets/images/icons/bubble.svg" alt="image" />
                        <span>Comments (02)</span>
                      </li>
                    </ul>
                    <p className="para">
                      Integer quis libero semper, interdum odio non, consequat
                      sem. Quisque woner pretium, quamtenti utendi lacinianti
                      ultricies, est urna cursus purus, ut tristique purusenali
                      pretium, quam ut laciniaun est urna cursusvoli purus, ut
                      tristique purusenali mauris.....
                    </p>
                    <p className="para">
                      Vestibulum eget mauris dui. Proin luctus est lacus, eu
                      lobortis orci dignissim at. Ut nec vulputateri nisl.
                      Mauris vel dolor augue. Praesent sit amet eros dui. Sed
                      porta gravida mollis. In odio dolorcoul maximus a finibus
                      eget, euismod vitae tellus. Vivamus condimentum nulla
                      rhoncus ipsum jougara vehicula, quis bibendum massa
                      auctor. Suspendisse potenti. Nam vulputate diam tempus
                      orcilagri rhoncus tincidunt et nec dolor. Curabitur id
                      nunc hendrerit
                    </p>
                  </div>
                  <div className="blockquote-area">
                    <img
                      src="assets/images/icons/bquote1.svg"
                      className="bquote1"
                      alt="image"
                    />
                    <img
                      src="assets/images/icons/bquote2.svg"
                      className="bquote2"
                      alt="image"
                    />
                    <blockquote>
                      {" "}
                      Integer quis libero semper, interdum odio non, consequat
                      sem. Qui woner pretium, tristique purusenali pretium, quam
                      ut laciniaun est urna.quamtenti utendi lacinianti
                      ultricies, est urna cursus purus, ut tristique purusenali
                      pretium
                    </blockquote>
                  </div>
                  <div className="image">
                    <Link href="/blog-details">
                      <a>
                        <img
                          src="assets/images/blog/blog-details2.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="text">
                    <p className="para">
                      Vestibulum eget mauris dui. Proin luctus est lacus, eu
                      lobortis orci dignissim at. Ut nec vulputateri nisl.
                      Mauris vel dolor augue. Praesent sit amet eros dui. Sed
                      porta gravida mollis. In odio dolorcoul maximus a finibus
                      eget, euismod vitae tellus. Vivamus condimentum nulla
                      rhoncus ipsum jougara vehicula, quis bibendum massa
                      auctor. Suspendisse potenti. Nam vulputate diam tempus
                      orcilagri rhoncus tincidunt et nec dolor. Curabitur id
                      nunc hendrerit
                    </p>
                  </div>
                </div>
                <div className="blog-sharea-area">
                  <div className="row align-items-center g-4">
                    <div className="col-lg-9 col-md-8">
                      <ul className="tag-list d-flex justify-content-md-start justify-content-center flex-wrap gap-3 p-0">
                        <li>
                          <Link href="#">Law Firm</Link>
                        </li>
                        <li>
                          <Link href="#">Juvenile</Link>
                        </li>
                        <li>
                          <Link href="#">Lawyers</Link>
                        </li>
                        <li>
                          <Link href="#">Family</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 d-flex justify-content-md-end justify-content-center">
                      <div className="blog-share">
                        <div className="front">
                          <span>Share Now</span>
                        </div>
                        <div className="back">
                          <ul className="share-list d-flex flex-row justify-content-end align-items-end gap-3">
                            <li>
                              <a href="https://www.facebook.com/">
                                <i className="bx bxl-facebook" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.twitter.com/">
                                <i className="bx bxl-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/">
                                <i className="bx bxl-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="https://www.pinterest.com/">
                                <i className="bx bxl-pinterest" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="another-post-area">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center">
                      <div className="prev-post text-md-start text-center">
                        <span>
                          <svg
                            width={15}
                            height={6}
                            viewBox="0 0 15 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 3L5 5.88675V0.113249L0 3ZM4.5 3.5H15V2.5H4.5V3.5Z" />
                          </svg>
                          PREV
                        </span>
                        <h5>Nullam feugiat et quam in accumsan.</h5>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex justify-content-md-end justify-content-center">
                      <div className="next-post text-md-end text-center">
                        <span>
                          NEXT
                          <svg
                            width={15}
                            height={6}
                            viewBox="0 0 15 6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M15 3L10 0.113249V5.88675L15 3ZM0 3.5H10.5V2.5H0V3.5Z" />
                          </svg>
                        </span>
                        <h5>Nullam feugiat et quam in accumsan.</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-area pt-120">
                  <h3 className="comment-title">Comment</h3>
                  <ul className="comment-list">
                    <li className="single-comment">
                      <div className="image">
                        <img
                          src="assets/images/blog/comment-author.png"
                          alt="image"
                        />
                      </div>
                      <div className="content">
                        <div className="comment-author">
                          <div className="designation">
                            <h5>Polard Girdet</h5>
                            <span>11 January, 2022 At 01.56 pm</span>
                          </div>
                          <button className="reply-btn">
                            <i className="bi bi-reply" />
                            Reply
                          </button>
                        </div>
                        <p className="para mb-0">
                          Vestibulum eget mauris dui. Proin luctus est lacus, eu
                          lobortis orci dignissim atei. Ut nec vulputateri nisl.
                          Mauris vel dolor augue. Praesent sit amet eros dui.
                          Sedant porta gravida mollis. In odio dolorcoul maximus
                          a finibus eget.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="comment-form pt-120">
                  <h3 className="comment-title">Leave A Comment</h3>

                  <form className="comment-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-inner">
                          <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name" 
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
                            placeholder="Enter Your Email" 
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-inner mb-0">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            placeholder="Type your Message"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="consent-checkboxes" style={{marginBottom: '20px'}}>
                          <div className="form-check mb-3">
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              id="blogSmsConsent" 
                              name="smsConsent"
                              checked={formData.smsConsent}
                              onChange={handleInputChange}
                              required
                            />
                            <label className="form-check-label" htmlFor="blogSmsConsent" style={{fontSize: '14px', lineHeight: '1.5'}}>
                              I Consent to Receive SMS Notifications & Alerts from Rathod Law Firm. Message frequency varies. Message & data rates may apply. Text HELP for assistance. You can reply STOP to unsubscribe at any time.
                            </label>
                          </div>
                          <div className="form-check mb-3">
                            <input 
                              className="form-check-input" 
                              type="checkbox" 
                              id="blogMarketingConsent"
                              name="marketingConsent"
                              checked={formData.marketingConsent}
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor="blogMarketingConsent" style={{fontSize: '14px', lineHeight: '1.5'}}>
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
                      <div className="col-12">
                        <button
                          type="submit"
                          className="eg-btn btn--dark btn--lg rounded-2 cmment-submit-btn"
                          disabled={isSubmitting}
                          style={{
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                          }}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <BlogSearchWidget />
                  <BlogCategoryWidget />
                  <RecentBlogPost />
                  <BlogTagWidget />
                  <BlogCommentsSlider />
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
      </Layout>
    </>
  );
}

export default BlogDetails;
