import React from 'react';

interface TackleLogoProps {
  /**
   * 'light' = white wordmark for dark backgrounds (white_tackle_logo.svg from tackle.io CDN)
   * 'dark'  = dark wordmark for light backgrounds (logo-black.png.webp from tackle.io CDN)
   */
  variant?: 'light' | 'dark';
  height?: number;
  className?: string;
}

/**
 * Tackle.io logo using the real brand assets directly from the tackle.io CDN.
 * White variant: https://tackle.io/wp-content/uploads/2024/01/white_tackle_logo.svg
 * Dark variant:  https://tackle.io/wp-content/uploads/2024/01/logo-black.png.webp
 *
 * The real logo icon mark is #FFB600 (amber), not teal.
 */
const TackleLogo: React.FC<TackleLogoProps> = ({
  variant = 'dark',
  height = 36,
  className = '',
}) => {
  // Aspect ratio from the SVG viewBox: 183 × 56 ≈ 3.27 : 1
  const ASPECT_RATIO = 183 / 56;
  const width = Math.round(height * ASPECT_RATIO);

  if (variant === 'light') {
    return (
      <img
        src="https://tackle.io/wp-content/uploads/2024/01/white_tackle_logo.svg"
        alt="Tackle"
        width={width}
        height={height}
        className={className}
        style={{ display: 'block' }}
      />
    );
  }

  return (
    <img
      src="https://tackle.io/wp-content/uploads/2024/01/logo-black.png.webp"
      alt="Tackle"
      width={width}
      height={height}
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default TackleLogo;
