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
    </header>
  );
};

export default Header;
