import React from 'react';
import logo from './loading.svg';

export default function Loading() {
  return (
    <img src={logo} className="loading" alt="Loading" />
  );
}