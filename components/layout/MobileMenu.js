"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <nav className="menu-box">
          <div className="close-btn" onClick={handleMobileMenu}>
            <i className="fas fa-times"></i>
          </div>
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/img/resource/logo-3.png" alt="Logo" />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation">
              {/* The Team Menu */}
              <li className={isActive.key === 1 ? "active menu-item-has-children" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>The Team</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 1 ? "block" : "none" }}>
                  <li><Link href="/team/kapil-rathod" onClick={handleMobileMenu}>Kapil Rathod</Link></li>
                  <li><Link href="/team/saleema-panjwani" onClick={handleMobileMenu}>Saleema Panjwani</Link></li>
                  <li><Link href="/team/lincy-gomez" onClick={handleMobileMenu}>Lincy Gomez</Link></li>
                </ul>
                <div className={isActive.key === 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* Paralegal Services Menu */}
              <li className={isActive.key === 2 ? "menu-item-has-children active" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>Paralegal Services</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 2 ? "block" : "none" }}>
                  <li><Link href="/paralegal-services" onClick={handleMobileMenu}>All Paralegal Services</Link></li>
                  <li><Link href="/speeding-tickets" onClick={handleMobileMenu}>Speeding Tickets</Link></li>
                  <li><Link href="/cell-phone-tickets" onClick={handleMobileMenu}>Cell Phone Tickets</Link></li>
                  <li><Link href="/seat-belt-tickets" onClick={handleMobileMenu}>Seat Belt Tickets</Link></li>
                  <li><Link href="/red-light-tickets" onClick={handleMobileMenu}>Red Light Tickets</Link></li>
                  <li><Link href="/stunt-driving" onClick={handleMobileMenu}>Stunt Driving</Link></li>
                  <li><Link href="/suspended-license" onClick={handleMobileMenu}>Suspended License</Link></li>
                  <li><Link href="/demerit-points" onClick={handleMobileMenu}>Demerit Points</Link></li>
                  <li><Link href="/small-claims" onClick={handleMobileMenu}>Small Claims</Link></li>
                </ul>
                <div className={isActive.key === 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* Lawyer Services Menu */}
              <li className={isActive.key === 3 ? "menu-item-has-children active" : "menu-item-has-children"}>
                <Link href="/lawyer-services" onClick={handleMobileMenu}>Lawyer Services & Price List</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 3 ? "block" : "none" }}>
                  <li><Link href="/immigration-appeals" onClick={handleMobileMenu}>Immigration Appeals</Link></li>
                  <li><Link href="/refugee-appeals" onClick={handleMobileMenu}>Refugee Appeals</Link></li>
                  <li><Link href="/immigration-applications" onClick={handleMobileMenu}>Immigration Applications</Link></li>
                  <li><Link href="/family-law-services" onClick={handleMobileMenu}>Family Law Services</Link></li>
                  <li><Link href="/notarization" onClick={handleMobileMenu}>Notarization</Link></li>
                </ul>
                <div className={isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>

              {/* Notary Menu */}
              <li>
                <Link href="/notarization" onClick={handleMobileMenu}>Notary</Link>
              </li>

              {/* About Menu */}
              <li className={isActive.key === 4 ? "menu-item-has-children active" : "menu-item-has-children"}>
                <Link href="#" onClick={handleMobileMenu}>About</Link>
                <ul className="sub-menu" style={{ display: isActive.key === 4 ? "block" : "none" }}>
                  <li><Link href="/about-us" onClick={handleMobileMenu}>About Us</Link></li>
                  <li><Link href="/contact" onClick={handleMobileMenu}>Contact Us</Link></li>
                  <li><Link href="/privacy-policy" onClick={handleMobileMenu}>Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions" onClick={handleMobileMenu}>Terms & Conditions</Link></li>
                  <li><Link href="/cookie-policy" onClick={handleMobileMenu}>Cookie Policy</Link></li>
                  <li><Link href="/schedule-call" onClick={handleMobileMenu}>Schedule a Call</Link></li>
                </ul>
                <div className={isActive.key === 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}>
                  <span className="fa fa-angle-right"></span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="icon-box">
              <span className="icon-icon-48"></span>
            </div>
            <p><a href="tel:+16476549454">Brampton: (647) 654-9454</a></p>
            <p><a href="tel:+14378809656">Scarborough: (437) 880-9656</a></p>
            <p><a href="mailto:info@rathodlaw.ca">info@rathodlaw.ca</a></p>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix list-wrap">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Menu Backdrop */}
      <div className="menu-backdrop" onClick={handleMobileMenu}></div>
    </>
  );
};

export default MobileMenu;
