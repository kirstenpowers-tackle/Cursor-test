import React from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
}

/**
 * Tackle Button component.
 * Tokens: --btn-height-md, --btn-padding-x, --btn-border-radius,
 *         --color-brand-primary-500/600, --color-neutral-*, --elevation-200
 */
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  leftIcon,
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const cls = [
    'tk-btn',
    `tk-btn--${variant}`,
    `tk-btn--${size}`,
    fullWidth ? 'tk-btn--full' : '',
    loading  ? 'tk-btn--loading' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {loading ? (
        <span className="tk-btn__spinner" aria-hidden="true" />
      ) : (
        leftIcon && <span className="tk-btn__icon">{leftIcon}</span>
      )}
      <span className="tk-btn__label">{children}</span>
    </button>
  );
};

export default Button;
