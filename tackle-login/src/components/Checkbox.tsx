import React from 'react';
import './Checkbox.css';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

/**
 * Tackle Checkbox component.
 * Tokens: --color-brand-primary-500, --radius-sm, --font-size-sm
 */
const Checkbox: React.FC<CheckboxProps> = ({ label, id, className = '', ...rest }) => {
  const fieldId = id || `tk-checkbox-${Math.random().toString(36).slice(2)}`;

  return (
    <div className={`tk-checkbox ${className}`}>
      <input
        type="checkbox"
        id={fieldId}
        className="tk-checkbox__input"
        {...rest}
      />
      <label htmlFor={fieldId} className="tk-checkbox__label">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
