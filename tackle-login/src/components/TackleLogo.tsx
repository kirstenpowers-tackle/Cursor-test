import React from 'react';

interface TackleLogoProps {
  variant?: 'full' | 'icon';
  /** 'light' = white wordmark for dark backgrounds; 'dark' = navy wordmark */
  color?: 'light' | 'dark';
  height?: number;
}

/**
 * Tackle.io brand logomark assembled from SVG primitives.
 * Uses only Tackle brand colors mapped to design-token values.
 */
const TackleLogo: React.FC<TackleLogoProps> = ({
  variant = 'full',
  color = 'dark',
  height = 36,
}) => {
  const wordmarkColor = color === 'light' ? '#ffffff' : '#1e3a8a'; /* --color-brand-primary-700 */
  const accentTeal    = '#14b8a6'; /* --color-brand-teal-500 */
  const accentBlue    = '#2563eb'; /* --color-brand-primary-500 */

  const iconWidth  = height;
  const iconHeight = height;

  const icon = (
    <svg
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Abstract "T" / target mark representing Tackle */}
      <rect x="0" y="0" width="40" height="40" rx="8" fill={accentBlue} />
      {/* Horizontal beam */}
      <rect x="6" y="10" width="28" height="6" rx="2" fill="#ffffff" />
      {/* Vertical stem */}
      <rect x="17" y="16" width="6" height="18" rx="2" fill={accentTeal} />
      {/* Top accent dot */}
      <circle cx="20" cy="7" r="2.5" fill={accentTeal} />
    </svg>
  );

  if (variant === 'icon') return icon;

  const textY = height * 0.72;
  const fontSize   = height * 0.52;

  return (
    <svg
      width={iconWidth + height * 2.8}
      height={height}
      viewBox={`0 0 ${40 + height * 2.8} 40`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Tackle logo"
    >
      {/* Icon mark */}
      <rect x="0" y="0" width="40" height="40" rx="8" fill={accentBlue} />
      <rect x="6" y="10" width="28" height="6" rx="2" fill="#ffffff" />
      <rect x="17" y="16" width="6" height="18" rx="2" fill={accentTeal} />
      <circle cx="20" cy="7" r="2.5" fill={accentTeal} />

      {/* Wordmark — "tackle" in Open Sans Bold */}
      <text
        x="48"
        y={textY}
        fontFamily="'Open Sans', sans-serif"
        fontWeight="700"
        fontSize={fontSize}
        fill={wordmarkColor}
        letterSpacing="-0.5"
      >
        tackle
      </text>

      {/* ".io" in teal */}
      <text
        x={48 + fontSize * 3.62}
        y={textY}
        fontFamily="'Open Sans', sans-serif"
        fontWeight="700"
        fontSize={fontSize}
        fill={accentTeal}
        letterSpacing="-0.5"
      >
        .io
      </text>
    </svg>
  );
};

export default TackleLogo;
