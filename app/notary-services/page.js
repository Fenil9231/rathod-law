import React from 'react';
import Link from 'next/link';

const NotaryServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Notary Services</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Notary Services</h2>
            <p className="text-gray-600 mb-4">
              At Rathod Law Firm, we provide comprehensive notary services to meet all your document authentication needs. 
              Our experienced notaries ensure that your important documents are properly notarized according to legal requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Notary Services Include:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Legal Documents</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Affidavits</li>
                  <li>• Statutory Declarations</li>
                  <li>• Powers of Attorney</li>
                  <li>• Wills and Estate Documents</li>
                  <li>• Real Estate Documents</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Documents</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Identity Verification</li>
                  <li>• Travel Documents</li>
                  <li>• Educational Certificates</li>
                  <li>• Employment Letters</li>
                  <li>• Immigration Documents</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Documents</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Corporate Resolutions</li>
                  <li>• Business Agreements</li>
                  <li>• Financial Documents</li>
                  <li>• Contracts and Agreements</li>
                  <li>• Commercial Transactions</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Certified True Copies</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Passport Copies</li>
                  <li>• Driver's License Copies</li>
                  <li>• Educational Transcripts</li>
                  <li>• Professional Certificates</li>
                  <li>• Government Documents</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Notary Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Experienced Professionals</h3>
                  <p className="text-gray-600 text-sm">Our notaries are experienced and knowledgeable in all aspects of document notarization.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Convenient Location</h3>
                  <p className="text-gray-600 text-sm">Easily accessible office location with flexible appointment scheduling.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Competitive Rates</h3>
                  <p className="text-gray-600 text-sm">Fair and transparent pricing for all notary services.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Quick Service</h3>
                  <p className="text-gray-600 text-sm">Efficient processing to meet your time-sensitive requirements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What to Bring for Notarization</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Required Items:</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Valid government-issued photo identification (driver's license, passport, etc.)</li>
                <li>• The original document(s) to be notarized (unsigned if requiring signature)</li>
                <li>• Any supporting documents or information related to the notarization</li>
                <li>• Payment for notary fees</li>
              </ul>
            </div>
            <p className="text-gray-600">
              <strong>Important:</strong> Do not sign the document before meeting with the notary. 
              The notary must witness your signature for the notarization to be valid.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Book Your Appointment</h2>
            <p className="text-gray-600 mb-4">
              Schedule your notary appointment today. We offer flexible scheduling to accommodate your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center">
                Contact Us
              </Link>
              <a href="tel:+14169007777" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-center">
                Call (416) 900-7777
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/immigration-appeals" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  Immigration Appeals
                </Link>
              </li>
              <li>
                <Link href="/refugee-appeals" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  Refugee Appeals
                </Link>
              </li>
              <li>
                <Link href="/immigration-applications" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  Immigration Applications
                </Link>
              </li>
              <li>
                <Link href="/family-law-services" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  Family Law Services
                </Link>
              </li>
              <li>
                <Link href="/paralegal-services" className="text-blue-600 hover:text-blue-800 transition duration-300">
                  Paralegal Services
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-700">Phone</h4>
                <p className="text-gray-600">(416) 900-7777</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Email</h4>
                <p className="text-gray-600">info@rathodlaw.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Address</h4>
                <p className="text-gray-600">
                  123 Main Street<br />
                  Toronto, ON M5V 3A8
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Office Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotaryServicesPage;

export const metadata = {
  title: 'Notary Services Ontario - Document Notarization & Authentication | Rathod Law',
  description: 'Professional notary services in Ontario including affidavits, statutory declarations, powers of attorney, certified true copies, and legal document authentication. Experienced notary public services.',
  keywords: 'notary services ontario, notary public, document notarization, affidavits, statutory declarations, powers of attorney, certified true copies, legal document authentication',
  openGraph: {
    title: 'Notary Services Ontario - Document Notarization & Authentication | Rathod Law',
    description: 'Professional notary services in Ontario including affidavits, statutory declarations, powers of attorney, certified true copies, and legal document authentication. Experienced notary public services.',
    type: 'website',
    url: 'https://rathodlaw.com/notary-services'
  }
};