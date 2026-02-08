import React from 'react';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-8 border-b border-navy-border bg-navy-deep shrink-0 z-20">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <div className="size-2 rounded-full bg-primary pulse-dot"></div>
          <span className="text-xs font-mono font-medium text-primary tracking-wide uppercase">System Health: Inference Ready</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-navy-surface transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-navy-deep"></span>
        </button>
        <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-navy-surface transition-colors">
          <span className="material-symbols-outlined">help</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
