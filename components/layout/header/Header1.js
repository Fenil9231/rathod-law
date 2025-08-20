import Link from "next/link";
import Menu from "../Menu"; // Assuming you have a separate Menu component for the navigation
import MobileMenu from "../MobileMenu"; // Assuming you have a MobileMenu component

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
  return (
    <header className={`main-header main-header-one ${scroll ? "fixed-header" : ""}`}>
     
      <div className={`sticky-header menu-area ${scroll ? "sticky-menu" : ""}`}>
        <div className="auto-container">
          <div className="menu-area__inner">
            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
              <i className="fas fa-bars" />
            </div>
            <div className="menu-wrap">
              <nav className="menu-nav">
                <div className="main-header-one__inner">
                  <div className="main-header-one__left">
                    <div className="logo-box-one">
                      <Link href="/">
                        <img src="/assets/img/logo/Rathod-logo-white.png" alt="Rathod Law Firm" />
                      </Link>
                    </div>

                    <div className="navbar-wrap main-menu">
                      <Menu />
                    </div>
                  </div>

                  <div className="main-header-one__right">
                    <div className="header-contact-box">
                      <p>
                        <span className="icon-icon-6"></span>
                        <a href="tel:6476549454">+1 (647) 654-9454</a>
                      </p>
                    </div>

                  </div>
                </div>
              </nav>
            </div>
          </div>

          <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />
        </div>
      </div>
    </header>
  );
}
