import React from 'react';

const MetricCard = ({
  title,
  value,
  icon,
  trend,
  trendValue,
  trendDirection = 'up', // 'up' or 'down'
  actionLabel,
  actionIcon,
  color = 'primary', // 'primary', 'red'
  trendColor // optional override for trend text color
}) => {
  // Mapping for dynamic classes
  const colorMap = {
    primary: {
      icon: 'text-primary',
      value: 'text-white',
      trend: 'text-primary',
      button: 'text-primary',
      border: 'hover:border-primary/50'
    },
    red: {
      icon: 'text-red-500',
      value: 'text-red-400',
      trend: 'text-red-400',
      button: 'text-red-400',
      border: 'hover:border-red-500/50'
    }
  };

  const currentColors = colorMap[color] || colorMap.primary;

  // Determine trend text color
  let trendTextClass = 'text-gray-500';

  if (trendColor === 'primary') trendTextClass = 'text-primary';
  else if (trendColor === 'red') trendTextClass = 'text-red-400';
  else if (trendColor === 'white') trendTextClass = 'text-white';
  else if (trendValue) trendTextClass = currentColors.trend; // Default to theme color if it's a metric value

  return (
    <div className={`bg-navy-surface border border-navy-border rounded-xl p-5 relative overflow-hidden group ${currentColors.border} transition-all duration-300`}>
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className={`material-symbols-outlined text-6xl ${currentColors.icon}`}>{icon}</span>
      </div>
      <div className="flex flex-col h-full justify-between relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{title}</span>
        </div>
        <div className="flex items-end gap-2">
          <span className={`text-3xl font-bold ${currentColors.value} tracking-tight`}>{value}</span>
          {trendValue && (
            <span className={`text-xs ${trendTextClass} mb-1.5 font-medium flex items-center`}>
              {trendDirection === 'up' && <span className="material-symbols-outlined text-[14px]">trending_up</span>}
              {trendDirection === 'down' && <span className="material-symbols-outlined text-[14px]">trending_down</span>}
              {' '}{trendValue}
            </span>
          )}
          {!trendValue && trend && (
             <span className={`text-xs ${trendTextClass} mb-1.5 font-medium`}>{trend}</span>
          )}
        </div>
        <button className={`mt-4 text-[10px] uppercase font-bold ${currentColors.button} flex items-center gap-1 hover:text-white transition-colors`}>
          <span className="material-symbols-outlined text-[14px]">{actionIcon}</span> {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default MetricCard;
