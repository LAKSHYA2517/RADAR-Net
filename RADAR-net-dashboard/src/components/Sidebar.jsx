import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-navy-border bg-navy-deep z-20">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 gap-3 border-b border-navy-border">
        <div className="relative flex items-center justify-center size-10 text-primary">
          {/* Hexagon shape using SVG */}
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l0 10l10 5l10-5l0-10z" fill="none" stroke="currentColor" strokeWidth="2"></path>
            <circle cx="12" cy="12" fill="currentColor" r="3"></circle>
          </svg>
          <div className="absolute inset-0 bg-primary/20 blur-md rounded-full"></div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg tracking-wide text-white">RADAR-Net</h1>
          <span className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">Cyber-Navy Cmd</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
        <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border-l-2 border-primary transition-all group">
          <span className="material-symbols-outlined text-[20px]">dashboard</span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-navy-surface transition-all group border-l-2 border-transparent hover:border-gray-600">
          <span className="material-symbols-outlined text-[20px]">satellite_alt</span>
          <span className="text-sm font-medium">Satellite Analysis</span>
        </Link>
        <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-navy-surface transition-all group border-l-2 border-transparent hover:border-gray-600">
          <span className="material-symbols-outlined text-[20px]">alt_route</span>
          <span className="text-sm font-medium">Route Planner</span>
        </Link>
        <Link to="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-navy-surface transition-all group border-l-2 border-transparent hover:border-gray-600">
          <span className="material-symbols-outlined text-[20px]">settings</span>
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </nav>

      {/* User Profile (Bottom) */}
      <div className="p-4 border-t border-navy-border">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-navy-surface border border-navy-border">
          <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-blue-500 overflow-hidden">
            <img alt="Commander Avatar" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7TTHJn-aD9KGexpTniO4zMigRq3QfNt2TmalAYtaqFn0CCjS8-mTEmWKBUuNjipLFaRZo6e0lPOTotuQWcae9d-C2xNJjGpS3yMsAqAFPQoQr_s3e_SffZ52c4uLl2tJn9YNrGR3TxH1ioT_-Q9HP9EeW-qpgmFAtdtO2mxgCfTf7HU0nGE_IvaQz3nY5a4Xj2FgmvVZBVaffQn5V30aT3XkIP8DG7p93ICqq3781AkktEOn-3-3BTuSKdGgu9rK-NIt-jAAVzue7"/>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-xs font-semibold truncate text-white">Lakshya</span>
          </div>
          <button className="ml-auto text-gray-400 hover:text-white">
            <span className="material-symbols-outlined text-[18px]">logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
