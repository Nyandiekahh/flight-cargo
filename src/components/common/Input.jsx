// src/components/common/Input.jsx
import React from 'react';
import '../../assets/styles/components.css';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  error,
  placeholder,
  required = false,
  className = ''
}) => {
  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-field"
        required={required}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;