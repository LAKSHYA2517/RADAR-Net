import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setVisibleFloatingWidget }) => {
  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-gray-200 bg-white z-20 shadow-sm">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6 gap-3 border-b border-gray-200">
        <div className="relative flex items-center justify-center size-10 text-emerald-600">
          {/* Hexagon shape using SVG */}
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l0 10l10 5l10-5l0-10z" fill="none" stroke="currentColor" strokeWidth="2"></path>
            <circle cx="12" cy="12" fill="currentColor" r="3"></circle>
          </svg>
          <div className="absolute inset-0 bg-emerald-100 blur-md rounded-full"></div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-lg tracking-wide text-gray-800">RADAR-Net</h1>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Cyber-Navy Cmd</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
        <button to="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-emerald-50 text-emerald-700 border-l-2 border-emerald-500 transition-all group hover:bg-emerald-100" onClick={() => setVisibleFloatingWidget(s => !s)}>
          <span className="material-symbols-outlined text-[20px]">dashboard</span>
          <span className="text-sm font-medium">Route Planner</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
