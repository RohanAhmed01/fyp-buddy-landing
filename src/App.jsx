import React from 'react';
// Yeh line video ko import kar rahi hai
import demoVideo from './assets/test video 2.mp4'; 

export default function FYPBuddyLanding() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            &lt;/&gt; FYP Buddy <span className="text-green-500 text-sm align-top">ENTERPRISE</span>
          </span>
        </div>
        <div>
          <button className="hidden md:inline-block px-6 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 rounded-md font-bold text-sm transition-all shadow-[0_0_15px_rgba(34,197,94,0.4)]">
            Book a Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block border border-green-500/30 bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-xs font-semibold tracking-wide mb-6">
            🚀 B2B AUTONOMOUS QA ENGINEER
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            Cut Python Debugging Time <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              by 50% in Seconds.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Stop hunting down memory leaks and security flaws. FYP Buddy is an AI-powered secure sandbox that completely auto-heals your messy backend code and generates an Enterprise Audit Report instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Start 7-Day Free Pilot
            </button>
            <button className="border border-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors">
              Read the Docs
            </button>
          </div>
        </div>

        {/* Video Area - Yahan Video Tag Add Kiya Hai */}
        <div className="mt-20 max-w-5xl mx-auto bg-gray-900 rounded-xl border border-gray-800 shadow-2xl overflow-hidden aspect-video relative group">
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all z-10 cursor-pointer pointer-events-none">
            {/* Play Icon hidden by default if autoPlay is on, but kept for aesthetics */}
          </div>
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src={demoVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900 border-y border-gray-800 py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">A Complete QA Team, <br/>Built into One API.</h2>
            <p className="text-gray-400">Not just an LLM chat. A structured, autonomous engine.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="text-green-400 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Self-Healing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our agentic loop detects fatal errors like TypeErrors or broken logic, re-evaluates, and writes the fix entirely on its own without manual prompting.
              </p>
            </div>
            <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="text-green-400 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security Audit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Instantly flags hardcoded AWS keys, MD5 hashing risks, and un-sanitized inputs, replacing them with production-ready security standards.
              </p>
            </div>
            <div className="bg-gray-950 p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-colors">
              <div className="text-green-400 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">O(1) Performance Boost</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Detects nested loops, memory leaks, and inefficient Big-O operations, rewriting your code for maximum scalability under heavy load.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-24 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple Pricing for Tech Teams</h2>
        <p className="text-gray-400 mb-16">Start free, upgrade when your developers can't live without it.</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {/* Tier 1 */}
          <div className="bg-gray-900 p-10 rounded-2xl border border-gray-800 relative">
            <h3 className="text-2xl font-bold text-white mb-2">Team Pro</h3>
            <p className="text-gray-400 text-sm mb-6">Perfect for small agile teams (5-10 Devs).</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$99</span>
              <span className="text-gray-500"> / month</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-300 text-sm">
              <li className="flex items-center">✅ Unlimited Code Scans</li>
              <li className="flex items-center">✅ Llama 3 Engine Access</li>
              <li className="flex items-center">✅ Export PDF Audit Reports</li>
              <li className="flex items-center">✅ 7-Day Free Pilot Included</li>
            </ul>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-md font-bold transition-colors">
              Start Free Pilot
            </button>
          </div>

          {/* Tier 2 */}
          <div className="bg-gray-950 p-10 rounded-2xl border-2 border-green-500 relative shadow-[0_0_30px_rgba(34,197,94,0.15)]">
            <div className="absolute top-0 right-0 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
              RECOMMENDED
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Custom Deployment</h3>
            <p className="text-gray-400 text-sm mb-6">For privacy-focused companies & large agencies.</p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold text-white">$750</span>
              <span className="text-gray-500"> one-time</span>
            </div>
            <ul className="space-y-4 mb-8 text-gray-300 text-sm">
              <li className="flex items-center">✅ Everything in Team Pro</li>
              <li className="flex items-center">✅ Private Docker Server Setup</li>
              <li className="flex items-center">✅ 100% Data Privacy (No Cloud API)</li>
              <li className="flex items-center">✅ Custom Security Rules</li>
            </ul>
            <button className="w-full bg-green-500 hover:bg-green-600 text-black py-3 rounded-md font-bold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-600 text-sm">
        <p>© 2026 FYP Buddy. Built for Developers, by Developers.</p>
      </footer>

    </div>
  );
}
