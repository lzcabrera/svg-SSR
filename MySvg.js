import React from 'react';

const MySvg = () => (
  <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="MyGradient">
        <stop offset="5%"  stopColor="green"/>
        <stop offset="95%" stopColor="gold"/>
      </linearGradient>
    </defs>
    <rect fill="url(#MyGradient)" x="10" y="10" width="100" height="100"/>
  </svg>
);

export default MySvg;
