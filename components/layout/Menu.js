import Link from "next/link";

export default function Menu() {
    return (
        <ul className="main-menu__list">
            <li className="dropdown menu-item-has-children">
                <Link href="#">The Team</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/team/kapil-rathod">Kapil Rathod</Link>
                    </li>
                    <li>
                        <Link href="/team/saleema-panjwani">Saleema Panjwani</Link>
                    </li>
                    <li>
                        <Link href="/team/lincy-gomez">Lincy Gomez</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown menu-item-has-children">
                <Link href="#">Paralegal Services</Link>
                <ul className="sub-menu">
                    {/* <li>
                        <Link href="/paralegal-services">All Paralegal Services</Link>
                    </li> */}
                    <li>
                        <Link href="/speeding-tickets">Speeding Tickets</Link>
                    </li>
                    <li>
                        <Link href="/cell-phone-tickets">Cell Phone Tickets</Link>
                    </li>
                    <li>
                        <Link href="/seat-belt-tickets">Seat Belt Tickets</Link>
                    </li>
                    <li>
                        <Link href="/red-light-tickets">Red Light Tickets</Link>
                    </li>
                    <li>
                        <Link href="/stunt-driving">Stunt Driving</Link>
                    </li>
                    <li>
                        <Link href="/suspended-license">Suspended License</Link>
                    </li>
                    <li>
                        <Link href="/demerit-points">Demerit Points</Link>
                    </li>
                    <li>
                        <Link href="/small-claims">Small Claims</Link>
                    </li>
                </ul>
            </li>
            <li className="dropdown menu-item-has-children">
                <Link href="/lawyer-services">Lawyer Services & Price List</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/immigration-appeals">Immigration Appeals</Link>
                    </li>
                    <li>
                        <Link href="/refugee-appeals">Refugee Appeals</Link>
                    </li>
                    <li>
                        <Link href="/immigration-applications">Immigration Applications</Link>
                    </li>
                    <li>
                        <Link href="/family-law-services">Family Law Services</Link>
                    </li>
                    <li>
                        <Link href="/notarization">Notarization</Link>
                    </li>
                </ul>
            </li>
            
    
            <li>
                <Link href="/notarization">Notary</Link>
            </li>
            <li className="dropdown menu-item-has-children">
                <Link href="#">About</Link>
                <ul className="sub-menu">
                    <li>
                        <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                    {/* <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </li> */}
                    {/* <li>
                        <Link href="/terms-conditions">Terms & Conditions</Link>
                    </li> */}
                    {/* <li>
                        <Link href="/cookie-policy">Cookie Policy</Link>
                    </li> */}
                    <li>
                        <Link href="/schedule-call">Schedule a Call</Link>
                    </li>
                </ul>
            </li>
           
        </ul>
    );
}
