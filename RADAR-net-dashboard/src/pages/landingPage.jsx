import React from "react";

/* Icons */
const MapIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/>
    <line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);

const PathIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l0 10l10 5l10-5l0-10z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" fill="currentColor" r="3"/>
  </svg>
);

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-yellow-400/30">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 border-b border-yellow-400/10 bg-slate-950/90 backdrop-blur-md px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          
          <span className="text-xl font-black tracking-tight text-white uppercase italic">
            RADAR.Net
          </span>
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={() => window.location.href = "/login"}
          className="px-8 py-2.5 rounded-full border-2 border-yellow-400 bg-yellow-400/10 text-white font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Login
        </button>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-yellow-400/40 bg-yellow-400/10 text-yellow-400 text-xs font-black mb-8 tracking-widest">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            ACTIVE FLOOD RESPONSE MODE
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            WHEN ROADS <br />
            <span className="text-yellow-400 uppercase">DISAPPEAR,</span><br />
            WE REVEAL THE SAFE ONES.
          </h1>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-14 leading-relaxed">
            RADAR-net uses satellite radar imagery and AI flood detection to identify
            <strong className="text-yellow-400"> non-submerged, structurally safe evacuation routes </strong>
            in real time — helping responders act faster when seconds matter.
          </p>

          {/* CREATIVE GET STARTED BUTTON */}
          <div className="flex justify-center">
            <button
              onClick={() => window.location.href = "http://localhost:5173/dashboard"}
              className="relative px-16 py-6 rounded-full font-black text-lg uppercase tracking-widest text-white bg-yellow-400 overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-[0_0_60px_rgba(250,204,21,0.9)] shadow-2xl ring-4 ring-yellow-400/20 hover:ring-yellow-400/40"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>

              {/* Animated Shine Effect */}
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shine"></span>
            </button>
          </div>
        </div>
      </section>

      {/* STRONG STATEMENT SECTION */}
      <section className="py-24 text-center border-t border-yellow-400/10">
        <h2 className="text-4xl md:text-6xl font-black text-yellow-400 uppercase tracking-tight">
          Built for the First Action.
        </h2>
        <p className="text-slate-500 mt-6 max-w-2xl mx-auto">
          Because delayed evacuation routes cost lives.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-yellow-400/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="text-center group">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-400/20 group-hover:border-yellow-400 transition-all">
              <MapIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Flood Zone Intelligence</h3>
            <p className="text-slate-400 text-sm">
              SAR imagery identifies submerged terrain even in low visibility.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-400/20 group-hover:border-yellow-400 transition-all">
              <PathIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Adaptive Escape Routing</h3>
            <p className="text-slate-400 text-sm">
              AI recalculates safe routes dynamically to avoid hazards.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-400/20 group-hover:border-yellow-400 transition-all">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20"/>
                <path d="m5 15 7 7 7-7"/>
                <path d="m19 9-7-7-7 7"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Low-Bandwidth Mode</h3>
            <p className="text-slate-400 text-sm">
              Critical route data delivered even on unstable networks.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-yellow-400/10 bg-slate-950">
        <p className="text-slate-600 text-[10px] tracking-[0.5em] uppercase">
          Emergency Response Technology v2.1.0
        </p>
      </footer>

      {/* Animation CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shine {
            0% { left: -100%; }
            100% { left: 200%; }
          }
          .animate-shine {
            animation: shine 1.2s ease forwards;
          }
        `
      }} />

    </div>
  );
}
