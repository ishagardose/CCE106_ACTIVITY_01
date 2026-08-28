import React from 'react';

export function Badge({ label, variant = 'blue' }) {
  return (
    <span className={`badge badge-${variant}`}>
      {label}
    </span>
  );
}
