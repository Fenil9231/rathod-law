"use client"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Head from "next/head"

export default function ParalegalServices() {

    const services = [
        {
            icon: "fas fa-car",
            title: "Traffic Tickets",
            description: "Expert defense for speeding tickets, red light violations, distracted driving, and other traffic offenses.",
            features: ["Speeding Tickets", "Red Light Violations", "Distracted Driving", "Careless Driving"],
            link: "/paralegal-services/speeding-tickets"
        },
        {
            icon: "fas fa-ban",
            title: "Stunt Driving & Suspended License",
            description: "Specialized representation for serious driving offenses and license suspension cases.",
            features: ["Stunt Driving Defense", "License Reinstatement", "Demerit Point Reduction", "Court Representation"],
            link: "/paralegal-services/stunt-driving"
        },
        {
            icon: "fas fa-gavel",
            title: "Small Claims Court",
            description: "Complete representation for disputes up to $35,000 in Ontario Small Claims Court.",
            features: ["Debt Collection", "Contract Disputes", "Property Damage", "Consumer Protection"],
            link: "/small-claims"
        },
        {
            icon: "fas fa-home",
            title: "Landlord-Tenant Disputes",
            description: "Professional representation at the Landlord and Tenant Board for all rental disputes.",
            features: ["Eviction Proceedings", "Rent Disputes", "Property Damage Claims", "Tenant Rights"],
            link: "/paralegal-services/landlord-tenant"
        },
        {
            icon: "fas fa-search",
            title: "Legal Research",
            description: "Comprehensive legal research and federal court file preparation services.",
            features: ["Case Law Research", "Document Preparation", "Federal Court Files", "Legal Analysis"],
            link: "/paralegal-services/legal-research"
        },
        {
            icon: "fas fa-balance-scale",
            title: "Tribunal Representation",
            description: "Expert representation at various Ontario tribunals and administrative bodies.",
            features: ["Human Rights Tribunal", "Workplace Safety", "Professional Licensing", "Administrative Appeals"],
            link: "/paralegal-services/tribunal-representation"
        }
    ];

    return (
        <>
            <Head>
                <title>Paralegal Services Ontario - Traffic Tickets, Small Claims & More | Rathod Law</title>
                <meta name="description" content="Expert paralegal services in Ontario including traffic ticket defense, small claims court representation, landlord tenant disputes, and provincial offenses. Affordable legal help." />
                <meta name="keywords" content="paralegal services ontario, traffic tickets, small claims court, landlord tenant disputes, provincial offenses, paralegal representation, affordable legal services" />
                <meta property="og:title" content="Paralegal Services Ontario - Traffic Tickets, Small Claims & More | Rathod Law" />
                <meta property="og:description" content="Expert paralegal services in Ontario including traffic ticket defense, small claims court representation, landlord tenant disputes, and provincial offenses. Affordable legal help." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://rathodlaw.com/paralegal-services" />
                <style jsx>{`
                    .service-card {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .service-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
                    }
                `}</style>
            </Head>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Paralegal Services">
                <div>
                    
                    {/* Services Cards Section */}
                    <section id="services" className="py-5">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-lg-8 mx-auto text-center">
                                    <h2 className="display-5 fw-bold mb-3" style={{color: '#1a365d'}}>Our Paralegal Services</h2>
                                    <p className="lead" style={{color: '#1a365d', opacity: '0.8'}}>Comprehensive legal support across multiple practice areas with experienced, licensed paralegals.</p>
                                </div>
                            </div>
                            
                            <div className="row g-4">
                                {services.map((service, index) => (
                                    <div key={index} className="col-lg-4 col-md-6">
                                        <div className="card h-100 shadow-sm border-0 service-card">
                                            <div className="card-body p-4">
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="rounded-circle d-flex align-items-center justify-content-center me-3" 
                                                         style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'}}>
                                                        <i className={service.icon + " fa-lg"}></i>
                                                    </div>
                                                    <h4 className="card-title mb-0 fw-bold" style={{color: '#1a365d'}}>{service.title}</h4>
                                                </div>
                                                
                                                <p className="card-text mb-3" style={{color: '#1a365d', opacity: '0.8'}}>{service.description}</p>
                                                
                                                <ul className="list-unstyled mb-4">
                                                    {service.features.map((feature, idx) => (
                                                        <li key={idx} className="d-flex align-items-center mb-2">
                                                            <i className="fas fa-check-circle me-2" style={{color: '#d4af37'}}></i>
                                                            <span style={{color: '#1a365d', opacity: '0.8'}}>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                <Link href={service.link} className="btn w-100" style={{background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '600', transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                                                    Learn More <i className="fas fa-arrow-right ms-2"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="py-5" style={{backgroundColor: '#f8f9fa'}}>
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-lg-8 mx-auto text-center">
                                    <h2 className="display-5 fw-bold mb-3" style={{color: '#1a365d'}}>Our Process</h2>
                                    <p className="lead" style={{color: '#1a365d', opacity: '0.8'}}>Simple, transparent steps to get the legal help you need.</p>
                                </div>
                            </div>
                            
                            <div className="row g-4">
                                <div className="col-lg-3 col-md-6 text-center">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-body">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                                 style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'}}>
                                <span className="fw-bold fs-3">1</span>
                            </div>
                            <h5 className="fw-bold mb-2" style={{color: '#1a365d'}}>Free Consultation</h5>
                            <p style={{color: '#1a365d', opacity: '0.8'}}>Discuss your case with our experienced paralegals at no cost.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 text-center">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-body">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                                 style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'}}>
                                <span className="fw-bold fs-3">2</span>
                            </div>
                            <h5 className="fw-bold mb-2" style={{color: '#1a365d'}}>Case Assessment</h5>
                            <p style={{color: '#1a365d', opacity: '0.8'}}>We analyze your case and develop the best strategy for success.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 text-center">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-body">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                                 style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'}}>
                                <span className="fw-bold fs-3">3</span>
                            </div>
                            <h5 className="fw-bold mb-2" style={{color: '#1a365d'}}>Representation</h5>
                            <p style={{color: '#1a365d', opacity: '0.8'}}>Professional representation in court or at tribunals.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 text-center">
                                    <div className="card border-0 bg-transparent">
                                        <div className="card-body">
                                            <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" 
                                 style={{width: '80px', height: '80px', background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'}}>
                                <span className="fw-bold fs-3">4</span>
                            </div>
                            <h5 className="fw-bold mb-2" style={{color: '#1a365d'}}>Resolution</h5>
                            <p style={{color: '#1a365d', opacity: '0.8'}}>Achieve the best possible outcome for your legal matter.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className="py-5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h2 className="display-5 fw-bold mb-4" style={{color: '#1a365d'}}>Why Choose Rathod Law?</h2>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-start">
                                                <i className="fas fa-certificate fa-2x me-3" style={{color: '#d4af37'}}></i>
                                                <div>
                                                    <h5 className="fw-bold mb-2" style={{color: '#1a365d'}}>Licensed Professionals</h5>
                                                    <p style={{color: '#1a365d', opacity: '0.8'}}>All our paralegals are licensed by the Law Society of Ontario.</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-start">
                                                <i className="fas fa-dollar-sign fa-2x me-3" style={{color: '#d4af37'}}></i>
                                                <div>
                                                    <h5 className="fw-bold mb-2" style={{color: '#1a365d'}}>Affordable Rates</h5>
                                                    <p style={{color: '#1a365d', opacity: '0.8'}}>Cost-effective legal solutions without compromising quality.</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-start">
                                                <i className="fas fa-clock fa-2x me-3" style={{color: '#d4af37'}}></i>
                                                <div>
                                                    <h5 className="fw-bold mb-2" style={{color: '#1a365d'}}>Quick Response</h5>
                                                    <p style={{color: '#1a365d', opacity: '0.8'}}>Fast turnaround times and prompt communication.</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-start">
                                                <i className="fas fa-trophy fa-2x me-3" style={{color: '#d4af37'}}></i>
                                                <div>
                                                    <h5 className="fw-bold mb-2" style={{color: '#1a365d'}}>Proven Results</h5>
                                                    <p style={{color: '#1a365d', opacity: '0.8'}}>Track record of successful outcomes for our clients.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="card border-0 shadow-lg" style={{background: 'linear-gradient(135deg, #1a365d, #0f1f3a)'}}>
                                        <div className="card-body p-5 text-center text-white">
                                            <h3 className="fw-bold mb-4" style={{color: '#d4af37'}}>Ready to Get Started?</h3>
                                            <p className="mb-4" style={{color: '#d4af37', opacity: '0.9'}}>Contact us today for a free consultation and let us help you resolve your legal matter efficiently and effectively.</p>
                                            
                                            <div className="row g-3 mb-4">
                                                <div className="col-md-6">
                                                    <div className="p-3 rounded" style={{backgroundColor: 'rgba(255,255,255,0.1)'}}>
                                                        <h6 className="fw-bold text-white">Brampton Office</h6>
                                                        <p className="mb-1 text-white">(905) 793-7900</p>
                                                        <small className="text-white">Mon-Fri: 9:00 AM - 6:00 PM</small>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="p-3 rounded" style={{backgroundColor: 'rgba(255,255,255,0.1)'}}>
                                                        <h6 className="fw-bold text-white">Scarborough Office</h6>
                                                        <p className="mb-1 text-white">(416) 298-3055</p>
                                                        <small className="text-white">Mon-Fri: 9:00 AM - 6:00 PM</small>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <Link href="/contact" className="btn btn-lg px-4 py-2" style={{background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: 'white', border: 'none', fontWeight: '600', borderRadius: '8px', transition: 'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                                                Schedule Free Consultation
                                            </Link>
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