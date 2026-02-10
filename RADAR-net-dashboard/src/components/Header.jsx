import React from 'react';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-gray-200 bg-white shrink-0 z-20 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
          <div className="size-2 rounded-full bg-emerald-500 pulse-dot"></div>
          <span className="text-xs font-mono font-medium text-emerald-600 tracking-wide uppercase">System Health: Inference Ready</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
