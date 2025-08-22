"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT US">
                <div>
                    {/* Start Contact Page */}
                    <section className="contact-page" style={{backgroundColor: '#f8f9fa', padding: '80px 0'}}>
                        <div className="contact-page__top">
                            <div className="container">
                                <div className="sec-title text-center" style={{marginBottom: '60px'}}>
                                    <div className="sub-title center">
                                        <div className="icon">
                                            <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                                        </div>
                                        <div className="text">
                                            <p>support information</p>
                                        </div>
                                    </div>
                                    <h2 className="" style={{color: '#1a365d', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', borderBottom: '3px solid #d4af37', paddingBottom: '15px', display: 'inline-block'}}>Contact Information</h2>
                                </div>

                                <div className="row">
                                    {/* Start Contact Page Top Single */}
                                    <div className="col-xl-4">
                                        <div className="contact-page__top-single" style={{backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', marginBottom: '30px', border: '1px solid #e0e0e0'}}>
                                        <div className="contact-page__top-single-inner">
                                            <div className="icon-box" style={{marginBottom: '20px'}}>
                                                <span className="icon-icon-46" style={{color: '#d4af37', fontSize: '2rem'}}></span>
                                            </div>

                                            <div className="content-box">
                                                <div className="title-box">
                                                    <div className="line"></div>
                                                    <div className="text">
                                                        <p style={{color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>location</p>
                                                    </div>
                                                </div>
                                                <h2 style={{color: '#1a365d', fontSize: '18px', lineHeight: '1.6', marginBottom: '15px'}}>
                                                    <strong style={{color: '#d4af37'}}>Brampton Office:</strong><br />
                                                    106-2250 Bovaird Drive East<br />
                                                    Brampton, Ontario L6R 0W3
                                                </h2>
                                                <h2 style={{color: '#1a365d', fontSize: '18px', lineHeight: '1.6', marginTop: '15px'}}>
                                                    <strong style={{color: '#d4af37'}}>Scarborough Office:</strong><br />
                                                    122-1200 Markham Road<br />
                                                    Scarborough, ON M1H 3C3
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* End Contact Page Top Single */}

                                    {/* Start Contact Page Top Single */}
                                    <div className="col-xl-4">
                                        <div className="contact-page__top-single" style={{backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', marginBottom: '30px', border: '1px solid #e0e0e0'}}>
                                            <div className="contact-page__top-single-inner">
                                                <div className="icon-box style2" style={{marginBottom: '20px'}}>
                                                    <span className="icon-icon-47" style={{color: '#d4af37', fontSize: '2rem'}}></span>
                                                </div>

                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="line"></div>
                                                        <div className="text">
                                                            <p style={{color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>eMail us</p>
                                                        </div>
                                                    </div>
                                                    <h2 style={{color: '#1a365d', fontSize: '18px', lineHeight: '1.6', marginBottom: '15px'}}>
                                                        <a href="mailto:rathod@hplaw.org" style={{color: '#d4af37', textDecoration: 'none', fontWeight: 'bold'}}>rathod@hplaw.org</a>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Contact Page Top Single */}

                                    {/* Start Contact Page Top Single */}
                                    <div className="col-xl-4">
                                        <div className="contact-page__top-single" style={{backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', marginBottom: '30px', border: '1px solid #e0e0e0'}}>
                                            <div className="contact-page__top-single-inner">
                                                <div className="icon-box" style={{marginBottom: '20px'}}>
                                                    <span className="icon-icon-48" style={{color: '#d4af37', fontSize: '2rem'}}></span>
                                                </div>

                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="line"></div>
                                                        <div className="text">
                                                            <p style={{color: '#666', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Phone no</p>
                                                        </div>
                                                    </div>
                                                    <h2 style={{color: '#1a365d', fontSize: '18px', lineHeight: '1.6', marginBottom: '15px'}}>
                                                        <strong style={{color: '#d4af37'}}>Brampton:</strong> <a href="tel:6476549454" style={{color: '#d4af37', textDecoration: 'none', fontWeight: 'bold'}}>(647) 654-9454</a>
                                                    </h2>
                                                    <h2 style={{color: '#1a365d', fontSize: '18px', lineHeight: '1.6', marginTop: '10px'}}>
                                                        <strong style={{color: '#d4af37'}}>Scarborough:</strong> <a href="tel:4378809656" style={{color: '#d4af37', textDecoration: 'none', fontWeight: 'bold'}}>(437) 880-9656</a>
                                                    </h2>
                                                    <p style={{color: '#666', fontSize: '14px', marginTop: '15px'}}><small>Hours: 9am to 5pm Toronto Time, Monday to Friday only</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Contact Page Top Single */}
                                </div>
                            </div>
                        </div>

                        <div className="contact-page__bottom" style={{backgroundColor: '#fff', padding: '60px 0', marginTop: '40px'}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="contact-page__form" style={{backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', border: '1px solid #e0e0e0'}}>
                                            <div className="sec-title" style={{marginBottom: '40px', textAlign: 'center'}}>
                                                <div className="sub-title">
                                                    <div className="icon">
                                                        <img src="/assets/img/icon/sec-title-img1.png" alt="Icon" />
                                                    </div>
                                                    <div className="text">
                                                        <p>get in touch</p>
                                                    </div>
                                                </div>
                                                <h2 className="" style={{color: '#1a365d', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', borderBottom: '3px solid #d4af37', paddingBottom: '15px', display: 'inline-block'}}>Send Us Free Message</h2>
                                            </div>

                                            <form id="contact-form" action="#" method="POST">
                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <input type="text" placeholder="NAME*" name="name" style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', width: '100%', marginBottom: '15px', transition: 'border-color 0.3s'}} onFocus={(e) => e.target.style.borderColor = '#d4af37'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
                                                            <div className="icon-box">
                                                                <span className="icon-icon-17"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <input type="text" placeholder="PHONE*" name="number" style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', width: '100%', marginBottom: '15px', transition: 'border-color 0.3s'}} onFocus={(e) => e.target.style.borderColor = '#d4af37'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
                                                            <div className="icon-box">
                                                                <span className="icon-icon-37"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <input type="email" placeholder="EMAIL*" name="email" style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', width: '100%', marginBottom: '15px', transition: 'border-color 0.3s'}} onFocus={(e) => e.target.style.borderColor = '#d4af37'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
                                                            <div className="icon-box">
                                                                <span className="icon-icon-18"></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <input type="text" placeholder="company*" name="company" style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', width: '100%', marginBottom: '15px', transition: 'border-color 0.3s'}} onFocus={(e) => e.target.style.borderColor = '#d4af37'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'} />
                                                            <div className="icon-box">
                                                                <span className="icon-icon-23"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                        <div className="contact-page__input-box">
                                                            <textarea name="message" placeholder="Please describe your legal matter or question..." style={{border: '2px solid #e0e0e0', borderRadius: '5px', padding: '12px', fontSize: '16px', width: '100%', minHeight: '120px', resize: 'vertical', transition: 'border-color 0.3s'}} onFocus={(e) => e.target.style.borderColor = '#d4af37'} onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}></textarea>
                                                            <div className="icon-box">
                                                                <span className="icon-icon-19"></span>
                                                            </div>
                                                        </div>
                                                        <div className="contact-page__checkbox-group" style={{marginBottom: '20px'}}>
                                                            <div className="checkbox-item" style={{marginBottom: '15px'}}>
                                                                <input type="checkbox" id="sms-consent" name="sms_consent" required />
                                                                <label htmlFor="sms-consent" style={{marginLeft: '8px', fontSize: '14px', lineHeight: '1.4'}}>
                                                                    I Consent to Receive SMS Notifications & Alerts from Rathod Law Firm. Message frequency varies. Message & data rates may apply. Text HELP for assistance. You can reply STOP to unsubscribe at any time.
                                                                </label>
                                                            </div>
                                                            <div className="checkbox-item" style={{marginBottom: '15px'}}>
                                                                <input type="checkbox" id="marketing-consent" name="marketing_consent" />
                                                                <label htmlFor="marketing-consent" style={{marginLeft: '8px', fontSize: '14px', lineHeight: '1.4'}}>
                                                                    I consent to receive occasional marketing communications from Rathod Law Firm.
                                                                </label>
                                                            </div>
                                                            <div className="policy-links" style={{fontSize: '12px', color: '#666', marginTop: '10px'}}>
                                                                By submitting this form, you agree to our{' '}
                                                                <a href="/privacy-policy" style={{color: '#d4af37', textDecoration: 'underline'}}>Privacy Policy</a>
                                                                {' '}and{' '}
                                                                <a href="/terms-and-conditions" style={{color: '#d4af37', textDecoration: 'underline'}}>Terms and Conditions</a>.
                                                            </div>
                                                        </div>
                                                        <div className="contact-page__btn">
                                                            <button type="submit" className="thm-btn contact-one__btn" data-loading-text="Please wait..." style={{backgroundColor: '#d4af37', border: 'none', color: '#fff', padding: '15px 30px', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.3s'}} onMouseOver={(e) => e.target.style.backgroundColor = '#b8941f'} onMouseOut={(e) => e.target.style.backgroundColor = '#d4af37'}>
                                                                Send Message
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
                                            <p className="ajax-response mb-0 error"></p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-4">
                                         <div className="contact-page__sidebar">
                                             <div className="service-details-sidebar" style={{backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', marginBottom: '30px', border: '1px solid #e0e0e0'}}>
                                                 <div className="service-details-sidebar__title" style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '25px', borderBottom: '2px solid #d4af37', paddingBottom: '10px'}}>Our Services</div>
                                                 <ul className="service-details-sidebar__list" style={{listStyle: 'none', padding: '0', margin: '0'}}>
                                                     <li style={{marginBottom: '12px', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px'}}>
                                                         <Link href="/immigration-appeals" style={{color: '#666', textDecoration: 'none', fontSize: '16px', display: 'block', padding: '8px 0', transition: 'color 0.3s'}} onMouseOver={(e) => e.target.style.color = '#d4af37'} onMouseOut={(e) => e.target.style.color = '#666'}>Immigration Appeals</Link>
                                                     </li>
                                                     <li style={{marginBottom: '12px', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px'}}>
                                                         <Link href="/refugee-appeals" style={{color: '#666', textDecoration: 'none', fontSize: '16px', display: 'block', padding: '8px 0', transition: 'color 0.3s'}} onMouseOver={(e) => e.target.style.color = '#d4af37'} onMouseOut={(e) => e.target.style.color = '#666'}>Refugee Appeals</Link>
                                                     </li>
                                                     <li style={{marginBottom: '12px', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px'}}>
                                                         <Link href="/immigration-applications" style={{color: '#666', textDecoration: 'none', fontSize: '16px', display: 'block', padding: '8px 0', transition: 'color 0.3s'}} onMouseOver={(e) => e.target.style.color = '#d4af37'} onMouseOut={(e) => e.target.style.color = '#666'}>Immigration Applications</Link>
                                                     </li>
                                                     <li style={{marginBottom: '12px', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px'}}>
                                                         <Link href="/family-law-services" style={{color: '#666', textDecoration: 'none', fontSize: '16px', display: 'block', padding: '8px 0', transition: 'color 0.3s'}} onMouseOver={(e) => e.target.style.color = '#d4af37'} onMouseOut={(e) => e.target.style.color = '#666'}>Family Law Services</Link>
                                                     </li>
                                                     <li style={{marginBottom: '12px', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px'}}>
                                                         <Link href="/notary-services" style={{color: '#666', textDecoration: 'none', fontSize: '16px', display: 'block', padding: '8px 0', transition: 'color 0.3s'}} onMouseOver={(e) => e.target.style.color = '#d4af37'} onMouseOut={(e) => e.target.style.color = '#666'}>Notary Services</Link>
                                                     </li>
                                                     <li style={{marginBottom: '12px', borderBottom: '1px solid #f0f0f0', paddingBottom: '12px'}}>
                                                         <Link href="/paralegal-services" style={{color: '#666', textDecoration: 'none', fontSize: '16px', display: 'block', padding: '8px 0', transition: 'color 0.3s'}} onMouseOver={(e) => e.target.style.color = '#d4af37'} onMouseOut={(e) => e.target.style.color = '#666'}>Paralegal Services</Link>
                                                     </li>
                                                 </ul>
                                             </div>
                                             
                                             <div className="contact-info-sidebar" style={{background: 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)', padding: '30px', borderRadius: '10px', color: '#fff'}}>
                                                 <h3 style={{color: '#d4af37', fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '20px'}}>Contact Information</h3>
                                                 <div style={{marginBottom: '20px'}}>
                                                     <h4 style={{color: '#d4af37', fontSize: '1.1rem', marginBottom: '10px'}}>Brampton Office</h4>
                                                     <p style={{margin: '5px 0', fontSize: '14px', lineHeight: '1.5'}}>Unit 7A, 250 Rutherford Rd S<br />Brampton, ON L6W 3J7</p>
                                                     <p style={{margin: '5px 0'}}><a href="tel:6476549454" style={{color: '#d4af37', textDecoration: 'none'}}>(647) 654-9454</a></p>
                                                 </div>
                                                 <div style={{marginBottom: '20px'}}>
                                                     <h4 style={{color: '#d4af37', fontSize: '1.1rem', marginBottom: '10px'}}>Scarborough Office</h4>
                                                     <p style={{margin: '5px 0', fontSize: '14px', lineHeight: '1.5'}}>4168 Finch Ave E, Unit 315<br />Scarborough, ON M1S 5H6</p>
                                                     <p style={{margin: '5px 0'}}><a href="tel:4378809656" style={{color: '#d4af37', textDecoration: 'none'}}>(437) 880-9656</a></p>
                                                 </div>
                                                 <div>
                                                     <h4 style={{color: '#d4af37', fontSize: '1.1rem', marginBottom: '10px'}}>Email</h4>
                                                     <p style={{margin: '5px 0'}}><a href="mailto:info@rathodlaw.com" style={{color: '#d4af37', textDecoration: 'none'}}>info@rathodlaw.com</a></p>
                                                     <p style={{fontSize: '12px', marginTop: '15px', opacity: '0.9'}}>Hours: 9am to 5pm Toronto Time<br />Monday to Friday only</p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* End Contact Page */}

                    {/* Start Google Map One */}
                    <section className="google-map-one" style={{padding: '0', margin: '40px 0 0 0'}}>
                        <div style={{border: '5px solid #d4af37', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                className="google-map-one__map"
                                style={{width: '100%', height: '400px', border: 'none'}}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>
                    {/* End Google Map One */}
                </div>
            </Layout>
        </>
    );
}
