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
              <div className="w-12 h-12 bg-gradient-to-br from-rich-brown to-warm-orange rounded-lg flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
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
                <Mail className="w-4 h-4 text-warm-orange" />
                <span className="text-sm text-rich-brown">admin@thenamnaturals.com</span>
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
            <h2 className="text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rich-brown to-warm-orange mb-2">
              Coming Sooner
            </h2>
            <p className="text-xl text-rich-brown/70 mb-8">Revolutionary Solutions Ahead</p>
          </div>
          <div className="mb-4">
            <h3 className="text-4xl lg:text-5xl font-bold text-rich-brown">
              We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-orange to-golden-yellow">HIRING</span>
            </h3>
          </div>
          <p className="text-xl text-rich-brown/80 mb-2">Internship Opportunities for Students</p>
          <p className="text-lg text-rich-brown/60">Are You Ready To Join Our Team</p>
        </div>

        {/* Job Positions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 border border-warm-orange/20 hover:border-warm-orange/40">
            <div className="w-16 h-16 bg-gradient-to-br from-rich-brown to-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-rich-brown mb-2">Digital Marketing</h3>
            <p className="text-rich-brown/70">Join our marketing team and help grow our digital presence</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 border border-warm-orange/20 hover:border-warm-orange/40">
            <div className="w-16 h-16 bg-gradient-to-br from-warm-orange to-golden-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-rich-brown mb-2">UI&UX Designer</h3>
            <p className="text-rich-brown/70">Create beautiful and intuitive user experiences</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-all duration-300 border border-warm-orange/20 hover:border-warm-orange/40">
            <div className="w-16 h-16 bg-gradient-to-br from-golden-yellow to-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-rich-brown mb-2">Database Manager</h3>
            <p className="text-rich-brown/70">Manage and optimize our database systems</p>
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

        {/* Contact and Apply Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-8 border border-warm-orange/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-rich-brown mb-6">Contact:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-warm-orange" />
                  <span className="text-lg text-rich-brown">6380456410</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-warm-orange" />
                  <span className="text-lg text-rich-brown">admin@thenamnaturals.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-rich-brown mb-6">Submit your CV & Portfolio:</h3>
              <p className="text-rich-brown/70 mb-6">Send your application to our email address and we'll get back to you soon.</p>
              <a 
                href="mailto:admin@thenamnaturals.com?subject=Internship Application - Thenam Software Solutions&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for an internship position at Thenam Software Solutions.%0D%0A%0D%0APlease find my CV and portfolio attached.%0D%0A%0D%0ABest regards"
                className="inline-block bg-gradient-to-r from-warm-orange to-golden-yellow text-white px-8 py-3 rounded-lg font-semibold hover:from-warm-orange/90 hover:to-golden-yellow/90 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-rich-brown text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-warm-orange to-golden-yellow rounded-lg flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold">Thenam Software Solutions</span>
          </div>
          <p className="text-white/70">© 2025 Thenam Software Solutions. Building the future of technology.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;