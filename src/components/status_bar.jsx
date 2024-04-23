// src/components/status_bar.jsx
import React from 'react';
import { WifiIcon, Battery100Icon } from '@heroicons/react/24/solid';

const StatusBar = () => {
  const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

  return (
    <div className="w-full flex justify-between items-center px-3 py-1 text-xs text-gray-600">
      <WifiIcon className="h-5 w-5 text-black" />
      <div className='text-xs' > {currentTime} </div>
      <Battery100Icon className="h-5 w-5 text-black" />
    </div>
  );
}

export default StatusBar;
