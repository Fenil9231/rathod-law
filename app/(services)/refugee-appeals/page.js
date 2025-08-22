export default function RefugeeAppeals() {
    return (
        <div className="service-details-area pt-120 pb-120" style={{backgroundColor: '#f8f9fa'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <div className="service-details-content" style={{backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '30px'}}>
                            <div className="service-details-content__img">
                                <img src="/assets/img/service/service-details-2.jpg" alt="Refugee Appeals" />
                            </div>
                            <div className="service-details-content__text">
                                <h2 style={{color: '#1a365d', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', borderBottom: '3px solid #d4af37', paddingBottom: '15px'}}>Refugee Appeals - How Does a Refugee Claim Work in Canada?</h2>
                                <p>
                                    The process for claiming refugee status in Canada involves several steps. Here's an overview of how it typically works:
                                </p>
                                
                                <h3 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: '600', marginTop: '30px', marginBottom: '15px', borderLeft: '4px solid #d4af37', paddingLeft: '15px'}}>1. Arrival in Canada</h3>
                                <p>
                                    To make a refugee claim, you generally need to be physically present in Canada. If you're arriving at a port of entry (like an airport) or already inside the country, you can start the process there.
                                </p>
                                
                                <h3 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: '600', marginTop: '30px', marginBottom: '15px', borderLeft: '4px solid #d4af37', paddingLeft: '15px'}}>2. Making the Claim</h3>
                                <div className="service-details-content__subsection">
                                    <h4 style={{color: '#1a365d', fontSize: '1.3rem', fontWeight: '600', marginTop: '20px', marginBottom: '10px'}}>At a Port of Entry:</h4>
                                    <p>If you're arriving from abroad, you can make your claim at a Canadian border crossing, airport, or seaport. You'll need to provide information about why you fear returning to your home country.</p>
                                    
                                    <h4 style={{color: '#1a365d', fontSize: '1.3rem', fontWeight: '600', marginTop: '20px', marginBottom: '10px'}}>Inside Canada:</h4>
                                    <p>If you're already in Canada, you can make your claim at a local Immigration, Refugees and Citizenship Canada (IRCC) office or at the Refugee Protection Division (RPD) office.</p>
                                </div>
                                
                                <h3 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: '600', marginTop: '30px', marginBottom: '15px', borderLeft: '4px solid #d4af37', paddingLeft: '15px'}}>3. Initial Screening</h3>
                                <div className="service-details-content__subsection">
                                    <h4 style={{color: '#1a365d', fontSize: '1.3rem', fontWeight: '600', marginTop: '20px', marginBottom: '10px'}}>Eligibility Assessment:</h4>
                                    <p>An immigration officer will assess whether you meet the criteria to make a refugee claim. This includes checking if you have a valid reason to fear persecution or if your claim is eligible under Canadian law.</p>
                                    
                                    <h4 style={{color: '#1a365d', fontSize: '1.3rem', fontWeight: '600', marginTop: '20px', marginBottom: '10px'}}>Documentation:</h4>
                                    <p>You'll need to provide identification and details about your claim, including a detailed account of why you fear persecution or risk in your home country.</p>
                                </div>
                                
                                <h3 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: '600', marginTop: '30px', marginBottom: '15px', borderLeft: '4px solid #d4af37', paddingLeft: '15px'}}>4. Refugee Hearing</h3>
                                <ul className="service-details-content__list" style={{backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef', marginBottom: '20px'}}>
                                    <li style={{color: '#1a365d', marginBottom: '12px', paddingLeft: '10px', borderLeft: '3px solid #d4af37'}}><strong style={{color: '#1a365d'}}>Scheduling:</strong> If your claim is accepted for consideration, you'll be scheduled for a hearing before the Refugee Protection Division of the Immigration and Refugee Board of Canada (IRB).</li>
                                    <li style={{color: '#1a365d', marginBottom: '12px', paddingLeft: '10px', borderLeft: '3px solid #d4af37'}}><strong style={{color: '#1a365d'}}>Preparing:</strong> You should prepare evidence and any documents that support your claim. It's highly recommended to seek legal advice or representation from a lawyer or a legal aid service.</li>
                                    <li style={{color: '#1a365d', marginBottom: '0', paddingLeft: '10px', borderLeft: '3px solid #d4af37'}}><strong style={{color: '#1a365d'}}>Hearing:</strong> At the hearing, you'll present your case and explain why you fear returning to your home country. The IRB member will ask questions and review your evidence.</li>
                                </ul>
                                
                                <h3 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: '600', marginTop: '30px', marginBottom: '15px', borderLeft: '4px solid #d4af37', paddingLeft: '15px'}}>5. Decision</h3>
                                <div className="service-details-content__subsection">
                                    <h4 style={{color: '#1a365d', fontSize: '1.3rem', fontWeight: '600', marginTop: '20px', marginBottom: '10px'}}>Positive Decision:</h4>
                                    <p>If the IRB grants you refugee status, you'll receive a positive decision, which means you are recognized as a refugee and can stay in Canada. You may then apply for permanent residence.</p>
                                    
                                    <h4 style={{color: '#1a365d', fontSize: '1.3rem', fontWeight: '600', marginTop: '20px', marginBottom: '10px'}}>Negative Decision:</h4>
                                    <p>If your claim is denied, you may have options to appeal the decision or seek judicial review. If all appeals fail, you could be asked to leave Canada.</p>
                                </div>
                                
                                <h3 style={{color: '#1a365d', fontSize: '1.8rem', fontWeight: '600', marginTop: '30px', marginBottom: '15px', borderLeft: '4px solid #d4af37', paddingLeft: '15px'}}>6. Post-Decision</h3>
                                <ul className="service-details-content__list" style={{backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px solid #e9ecef', marginBottom: '20px'}}>
                                    <li style={{color: '#1a365d', marginBottom: '12px', paddingLeft: '10px', borderLeft: '3px solid #d4af37'}}><strong style={{color: '#1a365d'}}>Permanent Residence:</strong> If granted refugee status, you can apply for permanent residency, which can eventually lead to citizenship.</li>
                                    <li style={{color: '#1a365d', marginBottom: '0', paddingLeft: '10px', borderLeft: '3px solid #d4af37'}}><strong style={{color: '#1a365d'}}>Rights and Responsibilities:</strong> As a recognized refugee, you have certain rights (such as access to healthcare and work) and responsibilities (such as abiding by Canadian laws).</li>
                                </ul>
                                
                                <div className="service-details-content__contact" style={{backgroundColor: '#1a365d', color: 'white', padding: '30px', borderRadius: '10px', marginTop: '40px'}}>
                                    <h3 style={{color: '#d4af37', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px'}}>Expert Legal Guidance</h3>
                                    <p style={{color: 'white', marginBottom: '20px'}}>The process can be complex, so it's important to seek legal advice to navigate it effectively. There are also community organizations that can provide support and guidance throughout the process.</p>
                                    <div className="service-details-content__contact-info" style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.3)'}}>
                                        <p style={{color: 'white', marginBottom: '10px'}}><strong style={{color: '#d4af37'}}>Brampton Office:</strong> <a href="tel:6476549454" style={{color: 'white', textDecoration: 'none'}}>(647) 654-9454</a></p>
                                        <p style={{color: 'white', marginBottom: '10px'}}><strong style={{color: '#d4af37'}}>Scarborough Office:</strong> <a href="tel:4378809656" style={{color: 'white', textDecoration: 'none'}}>(437) 880-9656</a></p>
                                        <p style={{color: 'white', marginBottom: '10px'}}><strong style={{color: '#d4af37'}}>Email:</strong> <a href="mailto:rathod@hplaw.org" style={{color: 'white', textDecoration: 'none'}}>rathod@hplaw.org</a></p>
                                        <p style={{color: 'white', margin: '0'}}><strong style={{color: '#d4af37'}}>Hours:</strong> 9am to 5pm Toronto Time, Monday to Friday only</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4">
                        <div className="service-details-sidebar">
                            <div className="service-details-sidebar__single" style={{backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '30px'}}>
                                <h3 style={{color: '#1a365d', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #d4af37', paddingBottom: '10px'}}>Our Services</h3>
                                <ul className="service-details-sidebar__list" style={{listStyle: 'none', padding: '0'}}>
                                    <li style={{marginBottom: '10px'}}><a href="/immigration-appeals" style={{color: '#1a365d', textDecoration: 'none', padding: '10px 15px', display: 'block', borderLeft: '3px solid transparent', backgroundColor: 'transparent', borderRadius: '5px', transition: 'all 0.3s ease'}}>Immigration Appeals</a></li>
                                    <li style={{marginBottom: '10px'}}><a href="/refugee-appeals" style={{color: '#1a365d', textDecoration: 'none', padding: '10px 15px', display: 'block', borderLeft: '3px solid #d4af37', backgroundColor: '#f8f9fa', borderRadius: '5px', transition: 'all 0.3s ease'}}>Refugee Appeals</a></li>
                                    <li style={{marginBottom: '10px'}}><a href="/immigration-applications" style={{color: '#1a365d', textDecoration: 'none', padding: '10px 15px', display: 'block', borderLeft: '3px solid transparent', backgroundColor: 'transparent', borderRadius: '5px', transition: 'all 0.3s ease'}}>Immigration Applications</a></li>
                                    <li style={{marginBottom: '10px'}}><a href="/family-law-services" style={{color: '#1a365d', textDecoration: 'none', padding: '10px 15px', display: 'block', borderLeft: '3px solid transparent', backgroundColor: 'transparent', borderRadius: '5px', transition: 'all 0.3s ease'}}>Family Law Services</a></li>
                                    <li style={{marginBottom: '10px'}}><a href="/notarization" style={{color: '#1a365d', textDecoration: 'none', padding: '10px 15px', display: 'block', borderLeft: '3px solid transparent', backgroundColor: 'transparent', borderRadius: '5px', transition: 'all 0.3s ease'}}>Notarization</a></li>
                                </ul>
                            </div>
                            
                            <div className="service-details-sidebar__single" style={{backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '30px', overflow: 'hidden'}}>
                                <div style={{background: 'linear-gradient(135deg, #1a3693 0%, #1a365d 100%)', padding: '30px', margin: '-30px -30px 20px -30px', position: 'relative'}}>
                                    <div style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)'}}></div>
                                    <div style={{position: 'relative', zIndex: '2'}}>
                                        <h3 style={{color: '#d4af37', marginBottom: '15px', fontSize: '1.5rem', fontWeight: 'bold'}}>Contact Information</h3>
                                    </div>
                                </div>
                                <div className="service-details-sidebar__contact" style={{backgroundColor: 'rgba(26, 54, 93, 0.05)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)'}}>
                                    <p style={{color: '#1a365d', marginBottom: '15px', lineHeight: '1.6'}}><strong style={{color: '#d4af37'}}>Brampton Office:</strong><br />
                                    106-2250 Bovaird Drive East<br />
                                    Brampton, Ontario L6R 0W3<br />
                                    Phone: <a href="tel:6476549454" style={{color: '#1a365d', textDecoration: 'none'}}>(647) 654-9454</a></p>
                                    <p style={{color: '#1a365d', marginBottom: '15px', lineHeight: '1.6'}}><strong style={{color: '#d4af37'}}>Scarborough Office:</strong><br />
                                    122-1200 Markham Road<br />
                                    Scarborough, ON M1H 3C3<br />
                                    Phone: <a href="tel:4378809656" style={{color: '#1a365d', textDecoration: 'none'}}>(437) 880-9656</a></p>
                                    <p style={{color: '#1a365d', margin: '0', lineHeight: '1.6'}}><strong style={{color: '#d4af37'}}>Email:</strong> <a href="mailto:rathod@hplaw.org" style={{color: '#1a365d', textDecoration: 'none'}}>rathod@hplaw.org</a><br />
                                    <strong style={{color: '#d4af37'}}>Hours:</strong> 9am to 5pm Toronto Time, Monday to Friday only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}