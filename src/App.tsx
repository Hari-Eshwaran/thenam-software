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
            </div>
          </div>
        </div>
      </header>

      {/* Professional Homepage Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cream via-white to-warm-orange/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-bold text-rich-brown mb-6">
                  We Build Software That <span className="text-warm-orange">Drives Business Growth</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Professional web and mobile applications, cloud solutions, and modern UI/UX design. 
                  We partner with businesses to deliver reliable, scalable software solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <a href="https://forms.gle/H8561gDiGb1nSYsc8" target="_blank" rel="noopener noreferrer" 
                     className="inline-block bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors">
                    Get Started Today
                  </a>
                  <a href="#work" 
                     className="inline-block border-2 border-rich-brown text-rich-brown hover:bg-rich-brown hover:text-white px-8 py-3 rounded-lg font-semibold text-center transition-colors">
                    View Our Work
                  </a>
                </div>
              </div>
              
              {/* Hero Image/Illustration */}
              <div className="relative">
                <div className="bg-gradient-to-r from-rich-brown/10 to-warm-orange/10 rounded-2xl p-8">
                  <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-hidden">
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-4 text-gray-400">thenam-app.tsx</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-blue-400">import React from 'react';</div>
                      <div className="text-purple-400">import &#123; useState &#125; from 'react';</div>
                      <div className="text-gray-500">// Building amazing software</div>
                      <div className="text-yellow-400">function App() &#123;</div>
                      <div className="ml-4 text-green-400">const [success, setSuccess] =</div>
                      <div className="ml-8 text-green-400">useState(true);</div>
                      <div className="ml-4 text-cyan-400">return (</div>
                      <div className="ml-8 text-pink-400">&lt;div className="business-growth"&gt;</div>
                      <div className="ml-12 text-white">Your Vision, Our Code</div>
                      <div className="ml-8 text-pink-400">&lt;/div&gt;</div>
                      <div className="ml-4 text-cyan-400">);</div>
                      <div className="text-yellow-400">&#125;</div>
                    </div>
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <div className="absolute top-1/2 -left-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div className="absolute -bottom-4 right-1/4 w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">☁️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Banner */}
        <section className="py-12 bg-gradient-to-r from-rich-brown via-warm-orange to-rich-brown">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                🚀 Special Offers for Students & Professionals
              </h3>
              <p className="text-white/90 text-lg">Affordable solutions to showcase your talent</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Portfolio Banner */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Build Your Portfolio</h4>
                  <div className="text-3xl font-bold text-white mb-2">
                    Starting at <span className="text-yellow-300">₹149</span>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    Professional portfolio websites to showcase your skills and projects
                  </p>
                  <a href="https://forms.gle/H8561gDiGb1nSYsc8" target="_blank" rel="noopener noreferrer" 
                     className="inline-block bg-white text-rich-brown hover:bg-cream px-6 py-2 rounded-lg font-medium text-sm transition-colors">
                    Get Started
                  </a>
                </div>
              </div>

              {/* Student Projects Banner */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Student Projects</h4>
                  <div className="text-3xl font-bold text-white mb-2">
                    Starting at <span className="text-yellow-300">₹2,999</span>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    Complete web applications and projects for academic requirements
                  </p>
                  <a href="https://forms.gle/H8561gDiGb1nSYsc8" target="_blank" rel="noopener noreferrer" 
                     className="inline-block bg-white text-rich-brown hover:bg-cream px-6 py-2 rounded-lg font-medium text-sm transition-colors">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-8">
              <p className="text-white/90 text-sm mb-4">
                ✨ Limited time offers • Fast delivery • Professional quality guaranteed
              </p>
              <div className="flex justify-center items-center space-x-4 text-white/80 text-xs">
                <span>📞 6380456410</span>
                <span>•</span>
                <span>📧 admin@thenamsoftwaresolutions.com</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-rich-brown text-center mb-12">Our Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-cream/50 p-8 rounded-lg border border-warm-orange/20 hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-rich-brown mb-4 text-center">Web Development</h4>
                <p className="text-gray-700 text-center">Modern, responsive web applications using React, TypeScript, and cutting-edge technologies.</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Node.js</span>
                </div>
              </div>
              
              <div className="bg-cream/50 p-8 rounded-lg border border-warm-orange/20 hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-rich-brown mb-4 text-center">Mobile Development</h4>
                <p className="text-gray-700 text-center">Cross-platform mobile applications with native performance and exceptional user experience.</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">React Native</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Flutter</span>
                </div>
              </div>
              
              <div className="bg-cream/50 p-8 rounded-lg border border-warm-orange/20 hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 mx-auto group-hover:bg-purple-200 transition-colors">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-rich-brown mb-4 text-center">Cloud Solutions</h4>
                <p className="text-gray-700 text-center">Scalable cloud architecture, DevOps, and infrastructure for reliable, secure applications.</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">AWS</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Docker</span>
                </div>
              </div>
              
              <div className="bg-cream/50 p-8 rounded-lg border border-warm-orange/20 hover:shadow-lg transition-shadow group">
                <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6 mx-auto group-hover:bg-orange-200 transition-colors">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-rich-brown mb-4 text-center">Student Portfolio Development</h4>
                <p className="text-gray-700 text-center">Professional portfolio websites for students and fresh graduates to showcase their skills and projects.</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Portfolio</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">Resume</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-rich-brown mb-4">Technologies We Use</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">We leverage cutting-edge technologies to build robust, scalable solutions</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {/* Frontend Technologies */}
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">⚛️</span>
                </div>
                <span className="text-sm font-medium text-gray-700">React</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🟦</span>
                </div>
                <span className="text-sm font-medium text-gray-700">TypeScript</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <span className="text-sm font-medium text-gray-700">React Native</span>
              </div>
              
              {/* Backend Technologies */}
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🟢</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Node.js</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🔺</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Angular</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">💎</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Next.js</span>
              </div>
              
              {/* Cloud & Database */}
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">☁️</span>
                </div>
                <span className="text-sm font-medium text-gray-700">AWS</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🐳</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Docker</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🍃</span>
                </div>
                <span className="text-sm font-medium text-gray-700">MongoDB</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🐘</span>
                </div>
                <span className="text-sm font-medium text-gray-700">PostgreSQL</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Vite</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Tailwind CSS</span>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 text-sm">And many more technologies to fit your specific needs</p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="work" className="py-16 bg-gradient-to-r from-cream to-warm-orange/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-rich-brown text-center mb-12">Our Work</h3>
            
            {/* Startup Projects */}
            <div className="mb-16">
              <h4 className="text-2xl font-semibold text-rich-brown mb-8 text-center">Our Startup Projects</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-warm-orange to-amber-500 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-warm-orange font-bold text-sm">Z</span>
                    </div>
                    <h5 className="text-xl font-bold">Zayma Zone</h5>
                  </div>
                  <p className="mb-4 text-orange-100 text-sm">Comprehensive digital platform and business services</p>
                  <div className="text-xs text-orange-200 mb-4">Coming Soon</div>
                  <a href="https://zaymazone.com" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-orange-200 underline font-medium text-sm">
                    Visit zaymazone.com
                  </a>
                </div>
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-4">
                    <Leaf className="w-8 h-8 mr-3" />
                    <h5 className="text-xl font-bold">Thenam Naturals</h5>
                  </div>
                  <p className="mb-4 text-green-100 text-sm">Premium e-commerce platform for natural and organic products</p>
                  <div className="text-xs text-green-200 mb-4">Coming Soon</div>
                  <a href="https://thenamnaturals.com" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-green-200 underline font-medium text-sm">
                    Visit thenamnaturals.com
                  </a>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold text-sm">T</span>
                    </div>
                    <h5 className="text-xl font-bold">TastyLens</h5>
                  </div>
                  <p className="mb-4 text-purple-100 text-sm">AI-powered food recognition and nutrition analysis platform</p>
                  <div className="text-xs text-purple-200 mb-4">Live Project</div>
                  <a href="https://tastylensar.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-purple-200 underline font-medium text-sm">
                    Visit tastylensar.vercel.app
                  </a>
                </div>
                <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-600 font-bold text-sm">A</span>
                    </div>
                    <h5 className="text-xl font-bold">AgriSmart</h5>
                  </div>
                  <p className="mb-4 text-teal-100 text-sm">Smart agriculture solutions and farming management system</p>
                  <div className="text-xs text-teal-200 mb-4">Live Project</div>
                  <a href="https://agrismart7.netlify.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-teal-200 underline font-medium text-sm">
                    Visit agrismart7.netlify.app
                  </a>
                </div>
              </div>
            </div>

            {/* Student Portfolio Projects */}
            <div>
              <h4 className="text-2xl font-semibold text-rich-brown mb-8 text-center">Student Portfolio Projects</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">S</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold">Sivasubramanian M</h5>
                      <p className="text-blue-100 text-xs">Student Portfolio</p>
                    </div>
                  </div>
                  <p className="mb-3 text-blue-100 text-sm">Professional portfolio showcasing web development skills and projects</p>
                  <a href="https://sivasubramanian-portfolio-psi.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-blue-200 underline font-medium text-sm">
                    View Portfolio →
                  </a>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-600 font-bold">J</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold">Jayabalaji S</h5>
                      <p className="text-purple-100 text-xs">Student Portfolio</p>
                    </div>
                  </div>
                  <p className="mb-3 text-purple-100 text-sm">Creative portfolio highlighting technical expertise and innovative projects</p>
                  <a href="http://jayabalaji-s-portfolio.netlify.app" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-purple-200 underline font-medium text-sm">
                    View Portfolio →
                  </a>
                </div>
                <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-indigo-600 font-bold">D</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold">Dinesh S</h5>
                      <p className="text-indigo-100 text-xs">Student Portfolio</p>
                    </div>
                  </div>
                  <p className="mb-3 text-indigo-100 text-sm">Dynamic portfolio demonstrating modern web development capabilities</p>
                  <a href="https://itzdineshx.github.io/portfolio/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-indigo-200 underline font-medium text-sm">
                    View Portfolio →
                  </a>
                </div>
                <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-teal-600 font-bold">L</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold">Lokesh U</h5>
                      <p className="text-teal-100 text-xs">Student Portfolio</p>
                    </div>
                  </div>
                  <p className="mb-3 text-teal-100 text-sm">Innovative portfolio featuring interactive design and development work</p>
                  <a href="https://lokkesh-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-teal-200 underline font-medium text-sm">
                    View Portfolio →
                  </a>
                </div>
                <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-600 font-bold">J</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold">Jayamurugan V</h5>
                      <p className="text-emerald-100 text-xs">Student Portfolio</p>
                    </div>
                  </div>
                  <p className="mb-3 text-emerald-100 text-sm">Comprehensive portfolio showcasing full-stack development expertise</p>
                  <a href="https://my-portfolio-virid-sigma-79.vercel.app/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-emerald-200 underline font-medium text-sm">
                    View Portfolio →
                  </a>
                </div>
                <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-lg p-6 text-white shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-orange-600 font-bold">H</span>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold">Harishwaran P</h5>
                      <p className="text-orange-100 text-xs">Student Portfolio</p>
                    </div>
                  </div>
                  <p className="mb-3 text-orange-100 text-sm">Professional portfolio with advanced web technologies and clean design</p>
                  <a href="https://www.harishwaran.tech/" target="_blank" rel="noopener noreferrer" 
                     className="text-white hover:text-orange-200 underline font-medium text-sm">
                    View Portfolio →
                  </a>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-700 mb-4">Need a professional portfolio to showcase your skills?</p>
                <a href="https://forms.gle/7Agtc3Pr5YaKkm5d9" target="_blank" rel="noopener noreferrer" 
                   className="inline-block bg-rich-brown hover:bg-rich-brown/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Build Your Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-rich-brown text-center mb-4">Our Leadership Team</h3>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              Led by experienced professionals committed to delivering excellence in software development
            </p>
            
            <div className="bg-cream/30 rounded-xl p-8 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-warm-orange shadow-lg">
                    <img 
                      src="/harishwaran.jpg" 
                      alt="Harishwaran - Chief Executive Officer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-rich-brown mb-2">Harishwaran</h5>
                  <p className="text-warm-orange font-semibold mb-2">Chief Executive Officer</p>
                  <p className="text-sm text-gray-700">Strategic leadership and business development</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-rich-brown shadow-lg">
                    <img 
                      src="/jayamurugan.jpg" 
                      alt="Jayamurugan - Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-rich-brown mb-2">Jayamurugan</h5>
                  <p className="text-warm-orange font-semibold mb-2">Founder</p>
                  <p className="text-sm text-gray-700">Technical innovation and company vision</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
                    <img 
                      src="/dinesh.jpg" 
                      alt="Dinesh S - Chief Technology Officer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-rich-brown mb-2">Dinesh S</h5>
                  <p className="text-warm-orange font-semibold mb-2">Chief Technology Officer</p>
                  <p className="text-sm text-gray-700">Technology architecture and development excellence</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-green-500 shadow-lg">
                    <img 
                      src="/naveen.jpg" 
                      alt="Naveen K - Digital Marketing Head" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-rich-brown mb-2">Naveen K</h5>
                  <p className="text-warm-orange font-semibold mb-2">Digital Marketing Head</p>
                  <p className="text-sm text-gray-700">Brand strategy and digital growth initiatives</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-purple-500 shadow-lg">
                    <img 
                      src="/ranjan.jpg" 
                      alt="Ranjan R - Chief Market Analyst" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-rich-brown mb-2">Ranjan R</h5>
                  <p className="text-warm-orange font-semibold mb-2">Chief Market Analyst</p>
                  <p className="text-sm text-gray-700">Market research and business intelligence</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-indigo-500 shadow-lg">
                    <img 
                      src="/udhayakumar.jpg" 
                      alt="Udhayakumar S - Finance Management Head" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-rich-brown mb-2">Udhayakumar S</h5>
                  <p className="text-warm-orange font-semibold mb-2">Finance Management Head</p>
                  <p className="text-sm text-gray-700">Financial planning and business operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-rich-brown to-warm-orange">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project and build something amazing together
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-white/90">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <span className="text-lg">6380456410 / 9344786408</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6" />
                <span className="text-lg">admin@thenamsoftwaresolutions.com</span>
              </div>
            </div>
            <div className="mt-8">
              <a href="https://forms.gle/H8561gDiGb1nSYsc8" target="_blank" rel="noopener noreferrer" 
                 className="inline-block bg-white text-rich-brown hover:bg-cream px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors">
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </main>

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
