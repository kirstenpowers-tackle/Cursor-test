import React, { useState } from 'react';
import './TextField.css';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
  errorText?: string;
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
  hideLabel?: boolean;
}

/**
 * Tackle TextField component.
 * Tokens: --input-height, --input-border-color, --input-border-radius,
 *         --input-bg, --input-focus-ring, --color-semantic-error-*
 */
const TextField: React.FC<TextFieldProps> = ({
  label,
  helperText,
  errorText,
  leftIcon,
  rightElement,
  hideLabel = false,
  id,
  className = '',
  ...rest
}) => {
  const fieldId = id || `tk-field-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const hasError = Boolean(errorText);

  return (
    <div className={`tk-field ${hasError ? 'tk-field--error' : ''} ${className}`}>
      <label
        htmlFor={fieldId}
        className={`tk-field__label ${hideLabel ? 'tk-field__label--sr-only' : ''}`}
      >
        {label}
      </label>

      <div className="tk-field__control">
        {leftIcon && (
          <span className="tk-field__icon tk-field__icon--left" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <input
          id={fieldId}
          className={`tk-field__input ${leftIcon ? 'tk-field__input--has-left-icon' : ''} ${rightElement ? 'tk-field__input--has-right-el' : ''}`}
          aria-describedby={helperText || errorText ? `${fieldId}-hint` : undefined}
          aria-invalid={hasError}
          {...rest}
        />
        {rightElement && (
          <span className="tk-field__icon tk-field__icon--right">{rightElement}</span>
        )}
      </div>

      {(errorText || helperText) && (
        <p
          id={`${fieldId}-hint`}
          className={`tk-field__hint ${hasError ? 'tk-field__hint--error' : ''}`}
        >
          {errorText || helperText}
        </p>
      )}
    </div>
  );
};

/** Password field with show/hide toggle — uses TextField internally */
export const PasswordField: React.FC<Omit<TextFieldProps, 'type' | 'rightElement'>> = (props) => {
  const [visible, setVisible] = useState(false);

  const toggle = (
    <button
      type="button"
      className="tk-field__pwd-toggle"
      aria-label={visible ? 'Hide password' : 'Show password'}
      onClick={() => setVisible((v) => !v)}
      tabIndex={-1}
    >
      {visible ? (
        /* Eye-off icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ) : (
        /* Eye icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );

  return <TextField {...props} type={visible ? 'text' : 'password'} rightElement={toggle} />;
};

export default TextField;
