import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Lincy Gomez - Immigration Specialist & Digital Marketing Expert | Rathod Law",
  description: "Meet Lincy Gomez, Immigration Specialist and Digital Marketing Expert at Rathod Law Firm with 4+ years in Canadian Immigration and 10+ years in educational counselling.",
  keywords: "lincy gomez immigration specialist, canadian immigration expert, digital marketing, educational counselling, immigration consultant",
  openGraph: {
    title: "Lincy Gomez - Immigration Specialist & Digital Marketing Expert | Rathod Law",
    description: "Meet Lincy Gomez, Immigration Specialist and Digital Marketing Expert at Rathod Law Firm with 4+ years in Canadian Immigration and 10+ years in educational counselling.",
    type: "profile",
    url: "https://rathodlaw.com/team/lincy-gomez"
  }
};

export default function LincyGomez() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Lincy Gomez">
                <div>
                    <section className="team-details" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="team-details__left">
                                        {/* Header Section */}
                                        <div style={{
                                            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                                            borderRadius: '20px',
                                            padding: '40px',
                                            marginBottom: '30px',
                                            color: 'white',
                                            boxShadow: '0 20px 40px rgba(30, 58, 138, 0.3)'
                                        }}>
                                            <div className="row align-items-center">
                                                <div className="col-md-4">
                                                    <div style={{
                                                        borderRadius: '20px',
                                                        overflow: 'hidden',
                                                        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                                                        border: '4px solid rgba(255,255,255,0.2)'
                                                    }}>
                                                        <img src="/assets/images/team/team-1-3.jpg" alt="Lincy Gomez" style={{
                                                            width: '100%',
                                                            height: 'auto',
                                                            display: 'block'
                                                        }} />
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <h1 style={{
                                                        fontSize: '2.5rem',
                                                        fontWeight: '700',
                                                        marginBottom: '15px',
                                                        color: 'white'
                                                    }}>Lincy Gomez</h1>
                                                    <p style={{
                                                        fontSize: '1.3rem',
                                                        marginBottom: '20px',
                                                        opacity: '0.9',
                                                        fontWeight: '500'
                                                    }}>Immigration Specialist & Digital Marketing Expert</p>
                                                    <div style={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        gap: '10px'
                                                    }}>
                                                        <span style={{
                                                            background: 'rgba(255,255,255,0.2)',
                                                            padding: '8px 16px',
                                                            borderRadius: '25px',
                                                            fontSize: '0.9rem',
                                                            fontWeight: '500'
                                                        }}>4+ Years Experience</span>
                                                        <span style={{
                                                            background: 'rgba(255,255,255,0.2)',
                                                            padding: '8px 16px',
                                                            borderRadius: '25px',
                                                            fontSize: '0.9rem',
                                                            fontWeight: '500'
                                                        }}>Immigration Expert</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="team-details__content">
                                            
                                            {/* Professional Background */}
                                            <div style={{
                                                background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                borderRadius: '15px',
                                                padding: '30px',
                                                marginBottom: '30px',
                                                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
                                                border: '2px solid #d4af37'
                                            }}>
                                                <h4 style={{
                                                    color: '#1e3a8a',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    marginBottom: '20px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <i className="fas fa-user-tie" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                                    Professional Background
                                                </h4>
                                                <p style={{
                                                    marginBottom: '20px',
                                                    fontSize: '1.1rem',
                                                    color: '#1e3a8a',
                                                    lineHeight: '1.7'
                                                }}>
                                                    Lincy Gomez holds a Master's Degree from Gujarat University in M.Sc I.T & C.A she has been with Rathod Law Firm for 4 years now. A result oriented professional having 4 years of experience in Canadian Immigration and over 10 years of experience in Educational Counselling, Digital Marketing and Alumni Relations.
                                                </p>
                                                
                                                <p style={{
                                                    marginBottom: '0',
                                                    fontSize: '1.1rem',
                                                    color: '#1e3a8a',
                                                    lineHeight: '1.7'
                                                }}>
                                                    Lincy has accomplished all duties with smart work and determination using strengths like communication, confidence and conviction that have been inculcated in her personality and work ethos.
                                                </p>
                                            </div>
                                            
                                            {/* Education & Qualifications */}
                                            <div style={{
                                                background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                borderRadius: '15px',
                                                padding: '30px',
                                                marginBottom: '30px',
                                                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
                                                border: '2px solid #d4af37'
                                            }}>
                                                <h4 style={{
                                                    color: '#1e3a8a',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    marginBottom: '20px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <i className="fas fa-graduation-cap" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                                    Education & Qualifications
                                                </h4>
                                                <ul style={{
                                                    listStyle: 'none',
                                                    padding: '0',
                                                    margin: '0'
                                                }}>
                                                    <li style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginBottom: '15px',
                                                        fontSize: '1.1rem',
                                                        color: '#1e3a8a'
                                                    }}>
                                                        <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '12px', fontSize: '1.2rem' }}></i>
                                                        Master's Degree (M.Sc I.T & C.A) from Gujarat University
                                                    </li>
                                                    <li style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginBottom: '15px',
                                                        fontSize: '1.1rem',
                                                        color: '#1e3a8a'
                                                    }}>
                                                        <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '12px', fontSize: '1.2rem' }}></i>
                                                        4 years with Rathod Law Firm
                                                    </li>
                                                    <li style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginBottom: '0',
                                                        fontSize: '1.1rem',
                                                        color: '#1e3a8a'
                                                    }}>
                                                        <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '12px', fontSize: '1.2rem' }}></i>
                                                        Specialized in Canadian Immigration processes
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                            {/* Professional Experience */}
                                            <div style={{
                                                background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                borderRadius: '15px',
                                                padding: '30px',
                                                marginBottom: '30px',
                                                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
                                                border: '2px solid #d4af37'
                                            }}>
                                                <h4 style={{
                                                    color: '#1e3a8a',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    marginBottom: '25px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <i className="fas fa-briefcase" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                                    Professional Experience
                                                </h4>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div style={{
                                                            background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                            borderRadius: '12px',
                                                            padding: '25px',
                                                            marginBottom: '20px',
                                                            border: '2px solid #d4af37'
                                                        }}>
                                                            <h5 style={{
                                                                color: '#1e3a8a',
                                                                fontSize: '1.3rem',
                                                                fontWeight: '600',
                                                                marginBottom: '15px'
                                                            }}>Canadian Immigration (4 years)</h5>
                                                            <ul style={{
                                                                listStyle: 'none',
                                                                padding: '0',
                                                                margin: '0'
                                                            }}>
                                                                <li style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '10px',
                                                                    fontSize: '1rem',
                                                                    color: '#1e3a8a'
                                                                }}>
                                                                    <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '10px', fontSize: '1rem' }}></i>
                                                                    Immigration application processing
                                                                </li>
                                                                <li style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '10px',
                                                                    fontSize: '1rem',
                                                                    color: '#1e3a8a'
                                                                }}>
                                                                    <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '10px', fontSize: '1rem' }}></i>
                                                                    Client consultation and guidance
                                                                </li>
                                                                <li style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '10px',
                                                                    fontSize: '1rem',
                                                                    color: '#1e3a8a'
                                                                }}>
                                                                    <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '10px', fontSize: '1rem' }}></i>
                                                                    Documentation preparation
                                                                </li>
                                                                <li style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '0',
                                                                    fontSize: '1rem',
                                                                    color: '#1e3a8a'
                                                                }}>
                                                                    <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '10px', fontSize: '1rem' }}></i>
                                                                    Case management
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div style={{
                                                            background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                            borderRadius: '12px',
                                                            padding: '25px',
                                                            marginBottom: '20px',
                                                            border: '2px solid #d4af37'
                                                        }}>
                                                            <h5 style={{
                                                                color: '#1e3a8a',
                                                                fontSize: '1.3rem',
                                                                fontWeight: '600',
                                                                marginBottom: '15px'
                                                            }}>Additional Expertise (10+ years)</h5>
                                                            <ul style={{
                                                                listStyle: 'none',
                                                                padding: '0',
                                                                margin: '0'
                                                            }}>
                                                                <li style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '10px',
                                                                    fontSize: '1rem',
                                                                    color: '#1e3a8a'
                                                                }}>
                                                                    <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '10px', fontSize: '1rem' }}></i>
                                                                    Educational Counselling
                                                                </li>
                                                                <li style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '10px',
                                                                    fontSize: '1rem',
                                                                    color: '#1e3a8a'
                                                                }}>
                                                                    <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '10px', fontSize: '1rem' }}></i>
                                                                    Digital Marketing
                                                                </li>
                                                                <li style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '10px',
                                                                    fontSize: '1rem',
                                                                    color: '#1e3a8a'
                                                                }}>
                                                                    <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '10px', fontSize: '1rem' }}></i>
                                                                    Alumni Relations
                                                                </li>
                                                                <li style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    marginBottom: '0',
                                                                    fontSize: '1rem',
                                                                    color: '#1e3a8a'
                                                                }}>
                                                                    <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '10px', fontSize: '1rem' }}></i>
                                                                    Client relationship management
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Core Strengths */}
                                            <div style={{
                                                background: 'white',
                                                borderRadius: '15px',
                                                padding: '30px',
                                                marginBottom: '30px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                                border: '1px solid #e5e7eb'
                                            }}>
                                                <h4 style={{
                                                    color: '#1e3a8a',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    marginBottom: '25px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <i className="fas fa-star" style={{ marginRight: '12px', color: '#fbbf24' }}></i>
                                                    Core Strengths
                                                </h4>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div style={{
                                                            background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                            borderRadius: '12px',
                                                            padding: '25px',
                                                            marginBottom: '20px',
                                                            border: '2px solid #d4af37',
                                                            textAlign: 'center',
                                                            height: '100%'
                                                        }}>
                                                            <div style={{
                                                                background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                                                                borderRadius: '50%',
                                                                width: '60px',
                                                                height: '60px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                margin: '0 auto 15px',
                                                                boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)'
                                                            }}>
                                                                <i className="fas fa-comments" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                                            </div>
                                                            <h5 style={{
                                                                color: '#1e3a8a',
                                                                fontSize: '1.3rem',
                                                                fontWeight: '600',
                                                                marginBottom: '10px'
                                                            }}>Communication</h5>
                                                            <p style={{
                                                                color: '#1e3a8a',
                                                                fontSize: '1rem',
                                                                margin: '0',
                                                                lineHeight: '1.5'
                                                            }}>Excellent verbal and written communication skills</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div style={{
                                                            background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                            borderRadius: '12px',
                                                            padding: '25px',
                                                            marginBottom: '20px',
                                                            border: '2px solid #d4af37',
                                                            textAlign: 'center',
                                                            height: '100%'
                                                        }}>
                                                            <div style={{
                                                                background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                                                                borderRadius: '50%',
                                                                width: '60px',
                                                                height: '60px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                margin: '0 auto 15px',
                                                                boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)'
                                                            }}>
                                                                <i className="fas fa-user-check" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                                            </div>
                                                            <h5 style={{
                                                                color: '#1e3a8a',
                                                                fontSize: '1.3rem',
                                                                fontWeight: '600',
                                                                marginBottom: '10px'
                                                            }}>Confidence</h5>
                                                            <p style={{
                                                                color: '#1e3a8a',
                                                                fontSize: '1rem',
                                                                margin: '0',
                                                                lineHeight: '1.5'
                                                            }}>Self-assured approach to complex cases</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div style={{
                                                            background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                            borderRadius: '12px',
                                                            padding: '25px',
                                                            marginBottom: '20px',
                                                            border: '2px solid #d4af37',
                                                            textAlign: 'center',
                                                            height: '100%'
                                                        }}>
                                                            <div style={{
                                                                background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                                                                borderRadius: '50%',
                                                                width: '60px',
                                                                height: '60px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                margin: '0 auto 15px',
                                                                boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)'
                                                            }}>
                                                                <i className="fas fa-heart" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                                                            </div>
                                                            <h5 style={{
                                                                color: '#1e3a8a',
                                                                fontSize: '1.3rem',
                                                                fontWeight: '600',
                                                                marginBottom: '10px'
                                                            }}>Conviction</h5>
                                                            <p style={{
                                                                color: '#1e3a8a',
                                                                fontSize: '1rem',
                                                                margin: '0',
                                                                lineHeight: '1.5'
                                                            }}>Strong belief in achieving client success</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Work Philosophy */}
                            <div style={{
                                background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                borderRadius: '15px',
                                padding: '30px',
                                marginBottom: '30px',
                                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
                                border: '2px solid #d4af37',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '20px',
                                                    left: '20px',
                                                    fontSize: '3rem',
                                                    color: '#d4af37',
                                                    opacity: '0.3'
                                                }}>
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <h4 style={{
                                                    color: '#1e3a8a',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    marginBottom: '25px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <i className="fas fa-lightbulb" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                                    Work Philosophy
                                                </h4>
                                                <p style={{
                                                    fontSize: '1.1rem',
                                                    lineHeight: '1.8',
                                                    color: '#1e3a8a',
                                                    fontStyle: 'italic',
                                                    margin: '0',
                                                    paddingLeft: '20px',
                                                    position: 'relative',
                                                    zIndex: '1'
                                                }}>
                                                    Lincy believes in smart work and determination. Her approach combines technical expertise with personalized client service, ensuring that each case receives the attention and dedication it deserves. Her diverse background in education, technology, and marketing brings a unique perspective to immigration matters.
                                                </p>
                                            </div>
                                            
                                            {/* License Verification */}
                                            <div style={{
                                                background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                                borderRadius: '15px',
                                                padding: '30px',
                                                marginBottom: '30px',
                                                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
                                                border: '2px solid #d4af37'
                                            }}>
                                                <h4 style={{
                                                    color: '#1e3a8a',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    marginBottom: '20px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <i className="fas fa-certificate" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                                    License Verification
                                                </h4>
                                                <p style={{
                                                    color: '#1e3a8a',
                                                    fontSize: '1rem',
                                                    lineHeight: '1.6',
                                                    marginBottom: '15px'
                                                }}>
                                                    Verify Lincy's professional status and credentials with the relevant regulatory bodies.
                                                </p>
                                                <a 
                                                    href="https://lso.ca/public-resources/finding-a-lawyer-or-paralegal" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        padding: '12px 20px',
                                                        background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                                                        color: 'white',
                                                        textDecoration: 'none',
                                                        borderRadius: '8px',
                                                        fontWeight: '500',
                                                        transition: 'all 0.3s ease',
                                                        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
                                                    }}
                                                >
                                                    <i className="fas fa-external-link-alt" style={{ marginRight: '8px' }}></i>
                                                    Verify with Law Society of Ontario
                                                </a>
                                            </div>
                                            
                                            {/* Contact Information */}
                                            <div style={{
                                                background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
                                                borderRadius: '15px',
                                                padding: '30px',
                                                marginBottom: '30px',
                                                boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)',
                                                color: 'white'
                                            }}>
                                                <h4 style={{
                                                    color: 'white',
                                                    fontSize: '1.8rem',
                                                    fontWeight: '600',
                                                    marginBottom: '25px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <i className="fas fa-address-card" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                                    Contact Information
                                                </h4>
                                                <div style={{
                                                    display: 'grid',
                                                    gap: '15px'
                                                }}>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '15px',
                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '10px',
                                                        backdropFilter: 'blur(10px)'
                                                    }}>
                                                        <i className="fas fa-envelope" style={{ color: '#d4af37', marginRight: '15px', fontSize: '1.2rem' }}></i>
                                                        <div>
                                                            <strong style={{ color: '#e5e7eb' }}>Email:</strong>
                                                            <a href="mailto:lincy@hplaw.org" style={{ marginLeft: '8px', color: 'white', textDecoration: 'none' }}>lincy@hplaw.org</a>
                                                        </div>
                                                    </div>
                                                    <div style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        padding: '15px',
                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '10px',
                                                        backdropFilter: 'blur(10px)'
                                                    }}>
                                                        <i className="fas fa-phone" style={{ color: '#d4af37', marginRight: '15px', fontSize: '1.2rem' }}></i>
                                                        <div>
                                                            <strong style={{ color: '#e5e7eb' }}>Phone:</strong>
                                                            <a href="tel:780-905-7124" style={{ marginLeft: '8px', color: 'white', textDecoration: 'none' }}>(780) 905-7124</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-5">
                                    <div className="team-details__sidebar">
                                        <div className="team-details__sidebar-team" style={{
                                            background: 'linear-gradient(135deg, #fefdf8 0%, #fffbeb 100%)',
                                            borderRadius: '15px',
                                            padding: '25px',
                                            marginBottom: '30px',
                                            boxShadow: '0 10px 30px rgba(212, 175, 55, 0.15)',
                                            border: '2px solid #d4af37'
                                        }}>
                                            <h4 className="team-details__sidebar-team-title" style={{
                                                color: '#1e3a8a',
                                                fontSize: '1.5rem',
                                                fontWeight: '600',
                                                marginBottom: '20px'
                                            }}>Our Team</h4>
                                            <ul className="team-details__sidebar-team-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                <li style={{ marginBottom: '12px' }}><Link href="/team/kapil-rathod" style={{ color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>Kapil Rathod <span className="icon-right-arrow" style={{ color: '#d4af37' }}></span></Link></li>
                                                <li style={{ marginBottom: '12px' }}><Link href="/team/saleema-panjwani" style={{ color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>Saleema Panjwani <span className="icon-right-arrow" style={{ color: '#d4af37' }}></span></Link></li>
                                                <li style={{ marginBottom: '12px' }}><Link href="/team/lincy-gomez" style={{ color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'rgba(212, 175, 55, 0.2)', fontWeight: '600' }}>Lincy Gomez <span className="icon-right-arrow" style={{ color: '#d4af37' }}></span></Link></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="team-details__sidebar-contact" style={{
                                            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                                            borderRadius: '15px',
                                            padding: '30px',
                                            textAlign: 'center',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            boxShadow: '0 10px 30px rgba(30, 58, 138, 0.3)',
                                            border: '2px solid #d4af37'
                                        }}>
                                            <div className="team-details__sidebar-contact-bg" style={{backgroundImage: 'url(/assets/images/backgrounds/team-contact-bg.jpg)', opacity: 0.1}}></div>
                                            <div className="team-details__sidebar-contact-icon" style={{
                                                background: 'linear-gradient(135deg, #d4af37 0%, #b8941f 100%)',
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 20px',
                                                boxShadow: '0 5px 15px rgba(212, 175, 55, 0.4)'
                                            }}>
                                                <span className="icon-telephone-call" style={{ color: 'white', fontSize: '1.5rem' }}></span>
                                            </div>
                                            <h4 className="team-details__sidebar-contact-title" style={{
                                                color: 'white',
                                                fontSize: '1.5rem',
                                                fontWeight: '600',
                                                marginBottom: '10px'
                                            }}>Need Legal Help?</h4>
                                            <p className="team-details__sidebar-contact-sub-title" style={{
                                                color: '#d4af37',
                                                fontSize: '1rem',
                                                marginBottom: '20px'
                                            }}>Call us today</p>
                                            <div className="team-details__sidebar-contact-number" style={{
                                                background: 'rgba(212, 175, 55, 0.2)',
                                                padding: '15px 20px',
                                                borderRadius: '10px',
                                                border: '1px solid #d4af37'
                                            }}>
                                                <Link href="tel:(416) 900-9009" style={{
                                                    color: '#d4af37',
                                                    fontSize: '1.3rem',
                                                    fontWeight: '700',
                                                    textDecoration: 'none'
                                                }}>(416) 900-9009</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}