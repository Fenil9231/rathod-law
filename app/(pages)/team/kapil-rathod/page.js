import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Kapil Rathod - Principal Lawyer & Immigration Expert | Rathod Law Firm",
  description: "Meet Kapil Rathod, Principal Lawyer at Rathod Law Firm with 13+ years experience in Canadian Immigration Law. Expert in appeals, spousal sponsorship, and federal court cases.",
  keywords: "kapil rathod lawyer, immigration lawyer ontario, barrister solicitor, canadian immigration law, federal court appeals, spousal sponsorship",
  openGraph: {
    title: "Kapil Rathod - Principal Lawyer & Immigration Expert | Rathod Law Firm",
    description: "Meet Kapil Rathod, Principal Lawyer at Rathod Law Firm with 13+ years experience in Canadian Immigration Law. Expert in appeals, spousal sponsorship, and federal court cases.",
    type: "profile",
    url: "https://rathodlaw.com/team/kapil-rathod"
  }
};

export default function KapilRathod() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Kapil Rathod">
                <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
                    <section className="team-details" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                        <div className="container">
                            {/* Header Section */}
                            <div className="row mb-5">
                                <div className="col-12">
                                    <div style={{
                                        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        color: 'white',
                                        textAlign: 'center',
                                        marginBottom: '40px',
                                        boxShadow: '0 20px 40px rgba(30, 58, 138, 0.3)'
                                    }}>
                                        <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '10px' }}>Kapil Rathod</h1>
                                        <p style={{ fontSize: '1.3rem', marginBottom: '15px', opacity: '0.9' }}>Barrister & Solicitor, Principal Lawyer</p>
                                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                                            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '25px', fontSize: '0.9rem' }}>
                                                <i className="fas fa-gavel" style={{ marginRight: '8px' }}></i>
                                                13+ Years Experience
                                            </span>
                                            <span style={{ background: 'rgba(255,255,255,0.2)', padding: '8px 16px', borderRadius: '25px', fontSize: '0.9rem' }}>
                                                <i className="fas fa-certificate" style={{ marginRight: '8px' }}></i>
                                                Licensed Lawyer
                                            </span>
                                        </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="team-details__left">
                                        <div className="team-details__img" style={{ marginBottom: '40px' }}>
                                            <div style={{
                                                borderRadius: '20px',
                                                overflow: 'hidden',
                                                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                                transform: 'perspective(1000px) rotateY(-5deg)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <img 
                                                    src="/assets/images/team/team-1-1.jpg" 
                                                    alt="Kapil Rathod" 
                                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                                />
                                             </div>
                                         </div>
                                         <div className="team-details__content">
                                            
                                            {/* Professional Background */}
                            <div style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                marginBottom: '30px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                border: '1px solid #e9ecef'
                            }}>
                                <h3 style={{
                                    color: '#1a365d',
                                    fontSize: '1.8rem',
                                    fontWeight: '600',
                                    marginBottom: '25px',
                                    borderBottom: '2px solid #d4af37',
                                    paddingBottom: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <i className="fas fa-user-tie" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                    Professional Background
                                </h3>
                                                <div className="team-details__text" style={{ lineHeight: '1.8', color: '#4b5563' }}>
                                                    <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                                                        Mr. Kapil Rathod, Barrister & Solicitor and the Principal Lawyer at Rathod Law Firm brings a vast experience of more than 13 years in the field of Canadian Immigration Law. He started as a Regulated Canadian Immigration Consultant in 2011 and he became a Lawyer in Canada in 2019.
                                                    </p>
                                                    
                                                    <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                                                        As an Immigration Consultant, he processed several applications such as Study Permits, Work Permits, Spousal Work Permits, Spousal Sponsorships, Permanent Residence as well as Visitor Visas. After becoming a Lawyer in 2019, he started practicing appeals of refusal of these applications at the Federal Court of Canada.
                                                    </p>
                                                    
                                                    <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
                                                        Refusals of Visitor Visas, Work Permits, Spousal Work Permits, Permanent Residence Applications as well as failed Refugee Claims can be appealed to the Federal Court of Canada. From 2019, Mr. Rathod has done many Appeals and many Mandamus applications at the Federal Court of Canada. He has also represented clients before the Immigration and Refugee Board.
                                                    </p>
                                                    
                                                    <p style={{ marginBottom: '0', fontSize: '1.1rem' }}>
                                                        Apart from Immigration Law, Mr. Rathod also deals in Criminal Law and Family Law.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Experience & Expertise */}
                            <div style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                marginBottom: '30px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{
                                    color: '#1a365d',
                                    fontSize: '1.8rem',
                                    fontWeight: '600',
                                    marginBottom: '25px',
                                    borderBottom: '2px solid #d4af37',
                                    paddingBottom: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <i className="fas fa-star" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                    Experience & Expertise
                                </h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul style={{ listStyle: 'none', padding: '0' }}>
                                            <li style={{
                                                padding: '12px 0',
                                                borderBottom: '1px solid #f3f4f6',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '1.1rem',
                                                color: '#4b5563'
                                            }}>
                                                <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '12px' }}></i>
                                                13+ years in Canadian Immigration Law
                                            </li>
                                            <li style={{
                                                padding: '12px 0',
                                                borderBottom: '1px solid #f3f4f6',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '1.1rem',
                                                color: '#4b5563'
                                            }}>
                                                <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '12px' }}></i>
                                                Regulated Canadian Immigration Consultant (2011-2019)
                                            </li>
                                            <li style={{
                                                padding: '12px 0',
                                                borderBottom: '1px solid #f3f4f6',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '1.1rem',
                                                color: '#4b5563'
                                            }}>
                                                <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '12px' }}></i>
                                                Licensed Lawyer in Canada (2019-present)
                                            </li>
                                            <li style={{
                                                padding: '12px 0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '1.1rem',
                                                color: '#4b5563'
                                            }}>
                                                <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '12px' }}></i>
                                                Federal Court Appeals and Mandamus Applications
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul style={{ listStyle: 'none', padding: '0' }}>
                                            <li style={{
                                                padding: '12px 0',
                                                borderBottom: '1px solid #f3f4f6',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '1.1rem',
                                                color: '#4b5563'
                                            }}>
                                                <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '12px' }}></i>
                                                Immigration and Refugee Board Representation
                                            </li>
                                            <li style={{
                                                padding: '12px 0',
                                                borderBottom: '1px solid #f3f4f6',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '1.1rem',
                                                color: '#4b5563'
                                            }}>
                                                <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '12px' }}></i>
                                                Criminal Law Practice
                                            </li>
                                            <li style={{
                                                padding: '12px 0',
                                                display: 'flex',
                                                alignItems: 'center',
                                                fontSize: '1.1rem',
                                                color: '#4b5563'
                                            }}>
                                                <i className="fas fa-check-circle" style={{ color: '#10b981', marginRight: '12px' }}></i>
                                                Family Law Practice
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Court Experience */}
                            <div style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                marginBottom: '30px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{
                                    color: '#1a365d',
                                    fontSize: '1.8rem',
                                    fontWeight: '600',
                                    marginBottom: '25px',
                                    borderBottom: '2px solid #d4af37',
                                    paddingBottom: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <i className="fas fa-gavel" style={{ marginRight: '12px', color: '#d4af37' }}></i>
                                    Court Experience
                                </h4>
                                <p style={{
                                    marginBottom: '25px',
                                    fontSize: '1.1rem',
                                    color: '#4b5563',
                                    lineHeight: '1.7'
                                }}>
                                    In his legal career, Mr. Kapil Rathod has appeared in many court cases including Immigration and Refugee Board of Canada, Federal Court of Canada, Ontario Court of Justice and Superior Court of Justice. Here are some cases in which Mr. Kapil Rathod appeared as a Counsel:
                                </p>
                                        
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card border-light mb-3">
                                                    <div className="card-header bg-light">
                                                        <h5 className="mb-0">Federal Court of Canada</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="list-group list-group-flush">
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Jethi v. Canada (Citizenship and Immigration), 2024 FC 1503</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Trivedi v. Canada (Citizenship and Immigration), 2025 FC 617</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Raiyani v. Canada (Citizenship and Immigration), 2024 FC 2020</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Sharma v. Canada (Citizenship and Immigration), 2023 FC 1190</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Tandel v. Canada (Citizenship and Immigration), 2024 FC 1487</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Sharma v. Canada (Citizenship and Immigration), 2024 FC 1928</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Khan v. Canada (Citizenship and Immigration), 2025 FC 247</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Okornor v. Canada (Citizenship and Immigration), 2024 FC 1693</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Singh v. Canada (Citizenship and Immigration), 2024 FC 1026</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Singh v. Canada (Citizenship and Immigration), 2024 FC 900</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Sandhu v. Canada (Citizenship and Immigration), 2025 FC 857</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Firdous v. Canada (Citizenship and Immigration), 2024 FC 1512</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Samra v. Canada (Citizenship and Immigration), 2024 FC 1649</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Goel v. Canada (Citizenship and Immigration), 2025 FC 275</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Gill v. Canada (Citizenship and Immigration), 2024 FC 1453</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Seeto v. Canada (Citizenship and Immigration), 2025 FC 308</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Antala v. Canada (Citizenship and Immigration), 2025 FC 420</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6">
                                                <div className="card border-light mb-3">
                                                    <div className="card-header bg-light">
                                                        <h5 className="mb-0">Immigration & Refugee Board</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="list-group list-group-flush">
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Sandhu v Canada (Citizenship and Immigration), 2024 CanLII 40860</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Kaur v Canada (Citizenship and Immigration), 2024 CanLII 139919</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Patel v Canada (Citizenship and Immigration), 2019 CanLII 54632</small>
                                                            </div>
                                                            <div className="list-group-item border-0 px-0 py-1">
                                                                <small>Chaudhari v Canada (Citizenship and Immigration), 2024 CanLII 140331</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* License Verification */}
                            <div className="team-details__verification" style={{ marginBottom: '40px' }}>
                                <div style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', padding: '30px', borderRadius: '15px', border: '2px solid #d4af37', textAlign: 'center' }}>
                                    <h4 style={{ color: '#1a365d', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '600' }}>
                                        <i className="fas fa-certificate" style={{ color: '#d4af37', marginRight: '10px' }}></i>
                                        License Verification
                                    </h4>
                                    <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>Verify the Status of Mr. Kapil Rathod with the Law Society of Ontario.</p>
                                    <div style={{ background: 'white', padding: '20px', borderRadius: '10px', marginBottom: '25px', display: 'inline-block' }}>
                                        <p style={{ margin: '0', fontSize: '1.2rem', color: '#1a365d' }}><strong>License Number:</strong> <span style={{ color: '#d4af37', fontWeight: '700' }}>P19780</span></p>
                                    </div>
                                    <br />
                                    <Link href="https://lso.ca/public-resources/finding-a-lawyer-or-paralegal" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#d4af37', color: '#1a365d', padding: '15px 30px', borderRadius: '25px', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', border: '2px solid #d4af37', transition: 'all 0.3s ease' }}>
                                        <i className="fas fa-external-link-alt" style={{ marginRight: '8px' }}></i>
                                        Verify Status with LSO
                                    </Link>
                                </div>
                            </div>
                            
                            {/* Contact Information */}
                            <div style={{
                                background: 'white',
                                borderRadius: '15px',
                                padding: '30px',
                                marginBottom: '30px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{
                                    color: '#1a365d',
                                    marginBottom: '25px',
                                    fontSize: '1.5rem',
                                    fontWeight: '600',
                                    borderBottom: '2px solid #d4af37',
                                    paddingBottom: '10px'
                                }}>
                                    <i className="fas fa-phone" style={{ color: '#d4af37', marginRight: '10px' }}></i>
                                    Contact Information
                                </h4>
                                <div className="team-details__contact-info">
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
                                        <i className="fas fa-envelope" style={{ color: '#d4af37', fontSize: '1.2rem', marginRight: '15px', width: '20px' }}></i>
                                        <div>
                                            <strong style={{ color: '#1a365d' }}>Email:</strong>
                                            <a href="mailto:rathod@hplaw.org" style={{ color: '#d4af37', textDecoration: 'none', marginLeft: '10px', fontWeight: '600' }}>rathod@hplaw.org</a>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
                                        <i className="fas fa-phone" style={{ color: '#d4af37', fontSize: '1.2rem', marginRight: '15px', width: '20px' }}></i>
                                        <div>
                                            <strong style={{ color: '#1a365d' }}>Phone:</strong>
                                            <a href="tel:647-654-9454" style={{ color: '#d4af37', textDecoration: 'none', marginLeft: '10px', fontWeight: '600' }}>(647) 654-9454</a>
                                        </div>
                                    </div>
                                    <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #d4af37' }}>
                                        <p style={{ margin: '0', fontSize: '1rem', color: '#555', fontStyle: 'italic' }}>
                                            <i className="fas fa-info-circle" style={{ color: '#d4af37', marginRight: '8px' }}></i>
                                            Please contact the Office to get in touch with Mr. Rathod.
                                        </p>
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
                                                <li style={{ marginBottom: '12px' }}><Link href="/team/kapil-rathod" style={{ color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'rgba(212, 175, 55, 0.2)', fontWeight: '600' }}>Kapil Rathod <span className="icon-right-arrow" style={{ color: '#d4af37' }}></span></Link></li>
                                                <li style={{ marginBottom: '12px' }}><Link href="/team/saleema-panjwani" style={{ color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>Saleema Panjwani <span className="icon-right-arrow" style={{ color: '#d4af37' }}></span></Link></li>
                                                <li style={{ marginBottom: '12px' }}><Link href="/team/lincy-gomez" style={{ color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>Lincy Gomez <span className="icon-right-arrow" style={{ color: '#d4af37' }}></span></Link></li>
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
                    </div>
                </section>
                </div>
            </Layout>
        </>
    )
}