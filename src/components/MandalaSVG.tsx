import React from 'react';

interface MandalaSVGProps {
  className?: string;
  size?: number;
  strokeOpacity?: number;
  rotation?: number;
}

const MandalaSVG: React.FC<MandalaSVGProps> = ({
  className = '',
  size = 600,
  strokeOpacity = 0.22,
  rotation = 0,
}) => {
  return (
    <svg
      className={`${className}`}
      width={size}
      height={size}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Outer circle */}
      <circle
        cx="300"
        cy="300"
        r="280"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity}
        strokeWidth="1"
        fill="none"
      />
      
      {/* Second circle */}
      <circle
        cx="300"
        cy="300"
        r="240"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity * 0.8}
        strokeWidth="1"
        fill="none"
      />
      
      {/* Third circle */}
      <circle
        cx="300"
        cy="300"
        r="200"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity * 0.6}
        strokeWidth="1"
        fill="none"
      />
      
      {/* Inner circle */}
      <circle
        cx="300"
        cy="300"
        r="160"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity * 0.5}
        strokeWidth="1"
        fill="none"
      />
      
      {/* Center circle */}
      <circle
        cx="300"
        cy="300"
        r="80"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity * 0.4}
        strokeWidth="1"
        fill="none"
      />
      
      {/* Decorative petals - outer ring */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 300 + 200 * Math.cos(angle);
        const y1 = 300 + 200 * Math.sin(angle);
        const x2 = 300 + 280 * Math.cos(angle);
        const y2 = 300 + 280 * Math.sin(angle);
        return (
          <line
            key={`outer-petal-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#C9A86A"
            strokeOpacity={strokeOpacity * 0.7}
            strokeWidth="1"
          />
        );
      })}
      
      {/* Decorative petals - inner ring */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 300 + 120 * Math.cos(angle);
        const y1 = 300 + 120 * Math.sin(angle);
        const x2 = 300 + 160 * Math.cos(angle);
        const y2 = 300 + 160 * Math.sin(angle);
        return (
          <line
            key={`inner-petal-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#C9A86A"
            strokeOpacity={strokeOpacity * 0.5}
            strokeWidth="1"
          />
        );
      })}
      
      {/* Diamond shapes */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i * 90 * Math.PI) / 180;
        const cx = 300 + 100 * Math.cos(angle);
        const cy = 300 + 100 * Math.sin(angle);
        return (
          <circle
            key={`diamond-${i}`}
            cx={cx}
            cy={cy}
            r="4"
            stroke="#C9A86A"
            strokeOpacity={strokeOpacity * 0.6}
            strokeWidth="1"
            fill="none"
          />
        );
      })}
      
      {/* Cross lines */}
      <line
        x1="300"
        y1="20"
        x2="300"
        y2="580"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity * 0.3}
        strokeWidth="1"
      />
      <line
        x1="20"
        y1="300"
        x2="580"
        y2="300"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity * 0.3}
        strokeWidth="1"
      />
      
      {/* Diagonal lines */}
      <line
        x1="88"
        y1="88"
        x2="512"
        y2="512"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity * 0.25}
        strokeWidth="1"
      />
      <line
        x1="512"
        y1="88"
        x2="88"
        y2="512"
        stroke="#C9A86A"
        strokeOpacity={strokeOpacity * 0.25}
        strokeWidth="1"
      />
      
      {/* Ornamental arcs */}
      {Array.from({ length: 16 }).map((_, i) => {
        const startAngle = (i * 22.5 * Math.PI) / 180;
        const endAngle = ((i + 1) * 22.5 * Math.PI) / 180;
        const r = 220;
        const x1 = 300 + r * Math.cos(startAngle);
        const y1 = 300 + r * Math.sin(startAngle);
        const x2 = 300 + r * Math.cos(endAngle);
        const y2 = 300 + r * Math.sin(endAngle);
        return (
          <path
            key={`arc-${i}`}
            d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
            stroke="#C9A86A"
            strokeOpacity={strokeOpacity * 0.4}
            strokeWidth="1"
            fill="none"
          />
        );
      })}
      
      {/* Center dot */}
      <circle
        cx="300"
        cy="300"
        r="6"
        fill="#C9A86A"
        fillOpacity={strokeOpacity * 0.8}
      />
    </svg>
  );
};

export default MandalaSVG;
