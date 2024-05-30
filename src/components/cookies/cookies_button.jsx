
// to do: use headless UI transition for the button
// make the clock real time

import React, { Fragment, useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

const CookiesButton = ( {id, frontText, backText, safe=false, flipped=false, explain=true} ) => {
    const [isFlipped, setIsFlipped] = useState((flipped || safe) && explain);
    const [isSelected, setIsSelected] = useState((flipped || safe));
    
    useEffect(() => {
      localStorage.setItem('vars_Cookies_' + frontText, isSelected);
    }, [isSelected]);

    const handleClick = () => {
        setIsSelected(!isSelected);
        if (explain) {
            setIsFlipped(!isFlipped);
        }
      };

    // Apply Tailwind classes dynamically based on the flipped state
    const containerClasses = `focus:outline-none transition-all duration-700 ease-in-out ${
      isFlipped ? 'w-64 h-20' : 'w-40 h-9'
    } max-h-auto text-xs text-gray-700 bg-gray-300 rounded shadow-sm overflow-hidden mx-auto flex justify-center items-center ${
        isSelected ? 'border-0 opacity-100' : 'border-0 opacity-50'
      }`;
  
    return (
        <>
          <button id={id} className={containerClasses} onClick={() => handleClick()}>
            <Transition
              show={isFlipped}
              enter="transform transition duration-[400ms] ease-out"
              enterFrom="opacity-0 rotate-[-20deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100"
              leaveTo="opacity-0 scale-95"
            >
                { isFlipped && <div className='w-64 max-h-16'>
                    <>
                        <h2 className='text-base'> {safe && <ShieldCheckIcon className="h-5 w-5 inline text-blue-500" />} {frontText} </h2>
                        <p> {backText} </p>
                    </>
                </div>}
            </Transition>
    
            <Transition
              show={!isFlipped}
              enter="transform transition duration-[400ms] ease-out"
              enterFrom="opacity-0 rotate-[-80deg] scale-50"
              enterTo="opacity-100 rotate-0 scale-100 "
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="opacity-100 rotate-0 scale-100"
              leaveTo="opacity-0 scale-95"
            >
            
                {!isFlipped && <div className='w-full h-full'>
                     <h2 className='text-sm'> {safe && <ShieldCheckIcon className="h-4 w-4 inline text-blue-500" />} {frontText} </h2>
                </div>}
              
              
            </Transition>

            {/* { isSelected && <CheckCircleIcon className="h-5 w-5 inline opacity-50 text-green-500" />} */}
            {/* Checkmark Icon when isSelected is true using Heroicons */}
            {/* {isSelected && (
            <CheckCircleIcon className="absolute bottom-1 right-1 h-6 w-6 text-green-500" />
            )} */}

          </button>
        </>
        );
  }
  
  export default CookiesButton;
  