import React from 'react';
import logo from '../icons/loading.svg';

export default function Loading() {
  return (
    <div className="loading-box">
      <img src={logo} className="loading" alt="Loading" />
    </div>
  );
}