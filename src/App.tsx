import React from 'react';
import { Phone, Mail, Leaf } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-warm-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="THENAM Software Solutions Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-rich-brown">THENAM</h1>
                <p className="text-sm text-warm-orange">SOFTWARE SOLUTIONS</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-warm-orange" />
                <span className="text-sm text-rich-brown">6380456410</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-warm-orange" />
                <span className="text-sm text-rich-brown">9344786408</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-warm-orange" />
                <span className="text-sm text-rich-brown">admin@thenamsoftwaresolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://www.instagram.com/thenam_software_solutions?igsh=M2M2bXh4YXI0eG1i&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warm-orange hover:text-rich-brown transition-colors duration-300"
                  aria-label="Follow us on Instagram"
                  title="Follow us on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/thenam-software-solutions/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-warm-orange hover:text-rich-brown transition-colors duration-300"
                  aria-label="Connect with us on LinkedIn"
                  title="Connect with us on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="flex justify-end mb-4">
              <div className="text-2xl font-bold text-rich-brown tracking-wider">ZAYMAZONE</div>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rich-brown to-warm-orange mb-2">
              We're Hiring!
            </h2>
          </div>
          <div className="mb-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-rich-brown mb-4">
              Digital Marketing Internship
            </h3>
            <p className="text-xl text-rich-brown/80 mb-2">Kickstart your career in Digital Marketing with</p>
            <p className="text-xl text-rich-brown/80">hands-on experience at ZAYMAZONE.</p>
          </div>
        </div>

        {/* Digital Marketing Internship Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 border border-warm-orange/20 hover:border-warm-orange/40">
            <div className="w-16 h-16 bg-gradient-to-br from-rich-brown to-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-rich-brown mb-2">Learn Outreach</h3>
            <h4 className="text-xl font-semibold text-rich-brown">Strategies</h4>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 border border-warm-orange/20 hover:border-warm-orange/40">
            <div className="w-16 h-16 bg-gradient-to-br from-warm-orange to-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-rich-brown mb-2">Analyze Campaign</h3>
            <h4 className="text-xl font-semibold text-rich-brown">Performance</h4>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 border border-warm-orange/20 hover:border-warm-orange/40">
            <div className="w-16 h-16 bg-gradient-to-br from-golden-yellow to-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-rich-brown mb-2">Manage Social</h3>
            <h4 className="text-xl font-semibold text-rich-brown">Platforms</h4>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 mb-16 border border-warm-orange/20">
          <h3 className="text-2xl font-bold text-rich-brown mb-8 text-center">Our Leadership Team</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src="/harishwaran.jpg" 
                  alt="Harishwaran - Chief Executive Officer" 
                  className="w-full h-full object-cover rounded-full border-4 border-rich-brown shadow-lg"
                />
              </div>
              <h4 className="text-xl font-semibold text-rich-brown mb-2">Harishwaran</h4>
              <p className="text-warm-orange font-medium">Chief Executive Officer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src="/jayamurugan.jpg" 
                  alt="Jayamurugan - Founder" 
                  className="w-full h-full object-cover rounded-full border-4 border-warm-orange shadow-lg"
                />
              </div>
              <h4 className="text-xl font-semibold text-rich-brown mb-2">Jayamurugan</h4>
              <p className="text-warm-orange font-medium">Founder</p>
            </div>
          </div>
        </div>

        {/* Upcoming Project */}
        <div className="bg-gradient-to-r from-rich-brown to-warm-orange rounded-lg p-8 text-white mb-16 shadow-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Upcoming Project</h3>
            <h4 className="text-3xl font-bold mb-2">Thenam Naturals</h4>
            <p className="text-lg mb-4">Coming Soon</p>
            <a 
              href="https://thenamnaturals.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              thenamnaturals.com
            </a>
          </div>
        </div>

         <div className="bg-gradient-to-r from-rich-brown to-warm-orange rounded-lg p-8 text-white mb-16 shadow-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Startup</h3>
            <h4 className="text-3xl font-bold mb-2">Zayma Zone</h4>
            <p className="text-lg mb-4">Coming Soon</p>
            <a 
              href="https://zaymazone.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              zaymazone.com
            </a>
          </div>
        </div>

        {/* Apply Section */}
        <div className="bg-gradient-to-r from-rich-brown to-warm-orange rounded-lg p-8 text-white text-center mb-16 shadow-lg">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Mail className="w-8 h-8 text-white" />
            <div>
              <h3 className="text-2xl font-bold">Send your resume to</h3>
              <p className="text-xl font-semibold">admin@thenamsoftwaresolutions.com</p>
            </div>
          </div>
          <a 
            href="mailto:admin@thenamsoftwaresolutions.com?subject=Digital Marketing Internship Application - ZAYMAZONE&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the Digital Marketing Internship position at ZAYMAZONE.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ABest regards"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-md border border-white/30"
          >
            Send Resume Now
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-rich-brown text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/logo.png" 
              alt="THENAM Software Solutions Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-semibold">Thenam Software Solutions</span>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a 
              href="https://www.instagram.com/thenam_software_solutions?igsh=M2M2bXh4YXI0eG1i&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/thenam-software-solutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300"
              aria-label="Connect with us on LinkedIn"
              title="Connect with us on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          <p className="text-white/70">© 2025 Thenam Software Solutions. Building the future of technology.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
