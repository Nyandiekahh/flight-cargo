// src/components/common/Card.jsx
import React from 'react';
import '../../assets/styles/components.css';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  );
};

export default Card;