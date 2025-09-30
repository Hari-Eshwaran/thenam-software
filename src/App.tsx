import React from 'react';
import { Phone, Mail, Leaf, Users, Briefcase } from 'lucide-react';

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
              <div className="w-20 h-20 bg-gradient-to-br from-rich-brown to-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-rich-brown mb-2">Harishwaran</h4>
              <p className="text-warm-orange font-medium">Chief Executive Officer</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-warm-orange to-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
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
          <p className="text-white/70">© 2025 Thenam Software Solutions. Building the future of technology.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
