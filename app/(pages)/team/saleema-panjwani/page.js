import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
  title: "Saleema Panjwani - Licensed Paralegal & Notary Public | Rathod Law Firm",
  description: "Meet Saleema Panjwani, Licensed Paralegal and Notary Public at Rathod Law Firm. Expert in traffic tickets, small claims, and landlord-tenant disputes with LL.B and LL.M qualifications.",
  keywords: "saleema panjwani paralegal, licensed paralegal ontario, notary public, traffic tickets, small claims court, landlord tenant disputes",
  openGraph: {
    title: "Saleema Panjwani - Licensed Paralegal & Notary Public | Rathod Law Firm",
    description: "Meet Saleema Panjwani, Licensed Paralegal and Notary Public at Rathod Law Firm. Expert in traffic tickets, small claims, and landlord-tenant disputes with LL.B and LL.M qualifications.",
    type: "profile",
    url: "https://rathodlaw.com/team/saleema-panjwani"
  }
};

export default function SaleemaPanjwani() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Saleema Panjwani">
                <div>
                    <section className="team-details" style={{ paddingTop: '120px', paddingBottom: '90px' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="team-details__left">
                                        <div className="team-details__img" style={{ marginBottom: '40px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                                            <img src="/assets/images/team/team-1-2.jpg" alt="Saleema Panjwani" style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                        <div className="team-details__content">
                                            <div style={{ marginBottom: '40px', textAlign: 'center', padding: '30px', background: 'linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)', borderRadius: '15px', color: 'white' }}>
                                                <h3 className="team-details__title" style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '10px', color: 'white' }}>Saleema Panjwani</h3>
                                                <p className="team-details__sub-title" style={{ fontSize: '1.3rem', color: '#d4af37', fontWeight: '600', marginBottom: '15px' }}>Licensed Paralegal & Notary Public</p>
                                                <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>
                                                    <span style={{ background: 'rgba(212,175,55,0.2)', padding: '8px 16px', borderRadius: '20px', marginRight: '10px' }}>License #P19780</span>
                                                    <span style={{ background: 'rgba(212,175,55,0.2)', padding: '8px 16px', borderRadius: '20px' }}>Notary Public</span>
                                                </div>
                                            </div>
                                            
                                            <div className="team-details__text" style={{ marginBottom: '40px' }}>
                                                <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', marginBottom: '30px', borderLeft: '5px solid #d4af37' }}>
                                                    <h4 style={{ color: '#1a365d', marginBottom: '20px', fontSize: '1.4rem', fontWeight: '600' }}>
                                                        <i className="fas fa-user-tie" style={{ color: '#d4af37', marginRight: '10px' }}></i>
                                                        Professional Background
                                                    </h4>
                                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                                        Saleema Panjwani is a Licensed Paralegal and a Notary Public. She joined the team in September 2023. She has done her LL.B from University of London and LL.M from Northwestern University Pritzker School of Law. She exemplifies professionalism and carries her passion for law and client relationships throughout her work.
                                                    </p>
                                                    
                                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                                                        Always available to assist you, she has proven excellence and diligence in each matter she takes on. Her key responsibilities at Rathod Law Firm is to handle Traffic Ticket Cases, Small Claims Cases as well as Landlord-Tenant Disputes.
                                                    </p>
                                                    
                                                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '0' }}>
                                                        She represents clients at the Landlord and Tenant Board, Small Claims Court as well as Ontario Court of Justice for Traffic Offences. She also assists Mr. Rathod in legal research as well as preparation of Federal Court Files.
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="team-details__experience" style={{ marginBottom: '40px' }}>
                                                <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', border: '1px solid #e9ecef' }}>
                                                    <h4 style={{ color: '#1a365d', marginBottom: '25px', fontSize: '1.5rem', fontWeight: '600', borderBottom: '2px solid #d4af37', paddingBottom: '10px' }}>
                                                        <i className="fas fa-graduation-cap" style={{ color: '#d4af37', marginRight: '10px' }}></i>
                                                        Education & Qualifications
                                                    </h4>
                                                    <ul className="team-details__list" style={{ listStyle: 'none', padding: '0' }}>
                                                        <li style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', fontSize: '1.1rem', color: '#555' }}>
                                                            <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '12px' }}></i>
                                                            LL.B from University of London
                                                        </li>
                                                        <li style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', fontSize: '1.1rem', color: '#555' }}>
                                                            <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '12px' }}></i>
                                                            LL.M from Northwestern University Pritzker School of Law
                                                        </li>
                                                        <li style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', fontSize: '1.1rem', color: '#555' }}>
                                                            <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '12px' }}></i>
                                                            Licensed Paralegal (License Number: P19780)
                                                        </li>
                                                        <li style={{ padding: '12px 0', fontSize: '1.1rem', color: '#555' }}>
                                                            <i className="fas fa-check-circle" style={{ color: '#d4af37', marginRight: '12px' }}></i>
                                                            Notary Public
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="team-details__practice-areas" style={{ marginBottom: '40px' }}>
                                                <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', border: '1px solid #e9ecef' }}>
                                                    <h4 style={{ color: '#1a365d', marginBottom: '25px', fontSize: '1.5rem', fontWeight: '600', borderBottom: '2px solid #d4af37', paddingBottom: '10px' }}>
                                                        <i className="fas fa-briefcase" style={{ color: '#d4af37', marginRight: '10px' }}></i>
                                                        Practice Areas
                                                    </h4>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '15px', border: '1px solid #e9ecef' }}>
                                                                <i className="fas fa-car" style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '10px' }}></i>
                                                                <h6 style={{ color: '#1a365d', fontWeight: '600', marginBottom: '5px' }}>Traffic Ticket Cases</h6>
                                                                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>Expert defense for traffic violations</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '15px', border: '1px solid #e9ecef' }}>
                                                                <i className="fas fa-gavel" style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '10px' }}></i>
                                                                <h6 style={{ color: '#1a365d', fontWeight: '600', marginBottom: '5px' }}>Small Claims Cases</h6>
                                                                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>Civil disputes up to $35,000</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '15px', border: '1px solid #e9ecef' }}>
                                                                <i className="fas fa-home" style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '10px' }}></i>
                                                                <h6 style={{ color: '#1a365d', fontWeight: '600', marginBottom: '5px' }}>Landlord-Tenant Disputes</h6>
                                                                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>Residential tenancy matters</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', marginBottom: '15px', border: '1px solid #e9ecef' }}>
                                                                <i className="fas fa-search" style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '10px' }}></i>
                                                                <h6 style={{ color: '#1a365d', fontWeight: '600', marginBottom: '5px' }}>Legal Research</h6>
                                                                <p style={{ fontSize: '0.9rem', color: '#666', margin: '0' }}>Comprehensive case analysis</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="team-details__representation" style={{ marginBottom: '40px' }}>
                                                <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', border: '1px solid #e9ecef' }}>
                                                    <h4 style={{ color: '#1a365d', marginBottom: '25px', fontSize: '1.5rem', fontWeight: '600', borderBottom: '2px solid #d4af37', paddingBottom: '10px' }}>
                                                        <i className="fas fa-courthouse" style={{ color: '#d4af37', marginRight: '10px' }}></i>
                                                        Court Representation
                                                    </h4>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div style={{ textAlign: 'center', padding: '25px 15px', background: '#f8f9fa', borderRadius: '10px', marginBottom: '20px', border: '1px solid #e9ecef' }}>
                                                                <i className="fas fa-balance-scale" style={{ color: '#d4af37', fontSize: '2rem', marginBottom: '15px' }}></i>
                                                                <h6 style={{ color: '#1a365d', fontWeight: '600', fontSize: '1rem' }}>Landlord and Tenant Board</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div style={{ textAlign: 'center', padding: '25px 15px', background: '#f8f9fa', borderRadius: '10px', marginBottom: '20px', border: '1px solid #e9ecef' }}>
                                                                <i className="fas fa-university" style={{ color: '#d4af37', fontSize: '2rem', marginBottom: '15px' }}></i>
                                                                <h6 style={{ color: '#1a365d', fontWeight: '600', fontSize: '1rem' }}>Small Claims Court</h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div style={{ textAlign: 'center', padding: '25px 15px', background: '#f8f9fa', borderRadius: '10px', marginBottom: '20px', border: '1px solid #e9ecef' }}>
                                                                <i className="fas fa-car" style={{ color: '#d4af37', fontSize: '2rem', marginBottom: '15px' }}></i>
                                                                <h6 style={{ color: '#1a365d', fontWeight: '600', fontSize: '1rem' }}>Ontario Court of Justice</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="team-details__verification" style={{ marginBottom: '40px' }}>
                                                <div style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', padding: '30px', borderRadius: '15px', border: '2px solid #d4af37', textAlign: 'center' }}>
                                                    <h4 style={{ color: '#1a365d', marginBottom: '20px', fontSize: '1.5rem', fontWeight: '600' }}>
                                                        <i className="fas fa-certificate" style={{ color: '#d4af37', marginRight: '10px' }}></i>
                                                        License Verification
                                                    </h4>
                                                    <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '20px' }}>Verify the Status of Ms. Saleema Panjwani with the Law Society of Ontario.</p>
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
                                            
                                            <div className="team-details__contact" style={{ marginBottom: '40px' }}>
                                                <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', border: '1px solid #e9ecef' }}>
                                                    <h4 style={{ color: '#1a365d', marginBottom: '25px', fontSize: '1.5rem', fontWeight: '600', borderBottom: '2px solid #d4af37', paddingBottom: '10px' }}>
                                                        <i className="fas fa-phone" style={{ color: '#d4af37', marginRight: '10px' }}></i>
                                                        Contact Information
                                                    </h4>
                                                    <div className="team-details__contact-info">
                                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
                                                            <i className="fas fa-envelope" style={{ color: '#d4af37', fontSize: '1.2rem', marginRight: '15px', width: '20px' }}></i>
                                                            <div>
                                                                <strong style={{ color: '#1a365d' }}>Email:</strong>
                                                                <a href="mailto:saleema@hplaw.org" style={{ color: '#d4af37', textDecoration: 'none', marginLeft: '10px', fontWeight: '600' }}>saleema@hplaw.org</a>
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
                                                                Please contact the Office to get in touch with Ms. Panjwani.
                                                            </p>
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
                                                <li style={{ marginBottom: '12px' }}><Link href="/team/saleema-panjwani" style={{ color: '#1e3a8a', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', borderRadius: '8px', transition: 'all 0.3s ease', backgroundColor: 'rgba(212, 175, 55, 0.2)', fontWeight: '600' }}>Saleema Panjwani <span className="icon-right-arrow" style={{ color: '#d4af37' }}></span></Link></li>
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
                    </section>
                </div>
            </Layout>
        </>
    )
}