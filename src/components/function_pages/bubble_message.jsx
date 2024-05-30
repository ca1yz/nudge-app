// src/components/function_pages/bubble_message.jsx
import React from 'react';
import { Transition } from '@headlessui/react';

const BubbleMessage = ({ message, show }) => {
  return (
    <Transition
      show={show}
      enter="transition-opacity ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-in duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-300 text-black text-sm rounded-lg px-4 py-2 shadow-lg z-50"
    >
      <div className='w-48'>{message}</div>
      
    </Transition>
  );
};

export default BubbleMessage;
