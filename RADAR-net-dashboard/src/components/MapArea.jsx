import React from 'react';
import FloatingWidgets from './FloatingWidgets';

const MapArea = () => {
  return (
    <div className="flex-1 relative min-h-[500px] rounded-2xl overflow-hidden border border-navy-border shadow-2xl">
      {/* Map Background Image */}
      <div className="absolute inset-0 bg-navy-deep">
        <img
          className="w-full h-full object-cover map-bg"
          alt="Dark stylized satellite map"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpknys8eBcPRYNLUXv-kuspkbcPuZLF6meo9Z2qcSgaDulAn46Uprnm5cqs2ABjzV7ttkaObgPzP-eRM58R2VnK8SHFQD3rRvhnIg0_0ZvZfBq0cZvqctsHHbhSfJgOCtkP-A61bXOWSBzyTKxmK9m0tB8FNEsMktxfI0TiFOaUTzklLWZrr6zVSrpxPnaj1gD0e9kDctRAYzY-dz1Ez5JW5XVIA6Uh0eMDrEfa7rRhvZd09btzcy_rJFNtnIygp-XLGTGJ-rx1KL_"
        />
      </div>

      {/* Map Overlay: Grid Lines (CSS based) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      >
      </div>

      {/* Interactive Elements on Map */}
      {/* Unit Markers */}
      <div className="absolute top-[30%] left-[45%] flex items-center justify-center group cursor-pointer">
        <div className="size-3 rounded-full bg-primary pulse-dot"></div>
        <div className="absolute mt-8 opacity-0 group-hover:opacity-100 transition-opacity bg-navy-deep/90 text-xs px-2 py-1 rounded border border-primary/30 whitespace-nowrap z-50">
           Unit Alpha-1
        </div>
      </div>
      <div className="absolute top-[55%] left-[32%] flex items-center justify-center group cursor-pointer">
        <div className="size-3 rounded-full bg-primary pulse-dot" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute mt-8 opacity-0 group-hover:opacity-100 transition-opacity bg-navy-deep/90 text-xs px-2 py-1 rounded border border-primary/30 whitespace-nowrap z-50">
           Unit Bravo-2
        </div>
      </div>
      {/* <div className="absolute top-[60%] left-[65%] flex items-center justify-center group cursor-pointer">
        <div className="size-3 rounded-full bg-primary pulse-dot" style={{animationDelay: '1s'}}></div>
        <div className="absolute mt-8 opacity-0 group-hover:opacity-100 transition-opacity bg-navy-deep/90 text-xs px-2 py-1 rounded border border-primary/30 whitespace-nowrap z-50">
           Unit Charlie-3
        </div>
      </div> */}

      {/* Floating Widgets */}
      <FloatingWidgets />

      {/* Map Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <button className="size-10 bg-navy-surface border border-navy-border rounded-lg text-white hover:text-primary hover:border-primary/50 flex items-center justify-center shadow-lg transition-all">
          <span className="material-symbols-outlined">add</span>
        </button>
        <button className="size-10 bg-navy-surface border border-navy-border rounded-lg text-white hover:text-primary hover:border-primary/50 flex items-center justify-center shadow-lg transition-all">
          <span className="material-symbols-outlined">remove</span>
        </button>
        <button className="size-10 bg-navy-surface border border-navy-border rounded-lg text-white hover:text-primary hover:border-primary/50 flex items-center justify-center shadow-lg transition-all mt-2">
          <span className="material-symbols-outlined">my_location</span>
        </button>
        <button className="size-10 bg-navy-surface border border-navy-border rounded-lg text-white hover:text-primary hover:border-primary/50 flex items-center justify-center shadow-lg transition-all">
          <span className="material-symbols-outlined">layers</span>
        </button>
      </div>
    </div>
  );
};

export default MapArea;
