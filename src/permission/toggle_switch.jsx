// src/components/toggle_switch.jsx
import React, { useState } from 'react';
import { ShieldCheckIcon, EyeIcon } from '@heroicons/react/24/solid';

const ToggleSwitch = ({ id, name, defaultChecked, controlType }) => {
  // State to manage the checked status
  const [isChecked, setIsChecked] = useState(defaultChecked);

  // Handle change event for checkbox
  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const uniqueId = `toggle-switch-${id}`;

  const textVisible = controlType === 'visible-nudge' || controlType === 'understandable-nudge';

  return (
    <div className="flex flex-col ml-3 items-center">
      <div className="relative inline-block w-14 align-middle select-none transition duration-200 ease-in">

        {/* pointer even := none, so the click pass through it */}
      {/* <div className="absolute left-0 top-0 w-6 h-6 z-10 bg-blue-500 rounded-full pointer-events-none"></div> */}

      {isChecked ? (
          <EyeIcon className={`${ controlType === 'understandable-nudge' ? '': 'invisible'} absolute left-0 top-0 w-6 h-6 text-green-500 z-10 pointer-events-none`} />) 
          : (<ShieldCheckIcon className={`${ controlType === 'understandable-nudge' ? '': 'invisible'} absolute left-0 top-0 w-6 h-6 text-gray-300 z-10 pointer-events-none`} />)}


        <input
          type="checkbox"
          id={id}
          name={name}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          className="absolute opacity-0 w-full h-full"
        />
        <label
          htmlFor={id}
          className={`toggle-label block w-11 h-6 bg-gray-300 rounded-full cursor-pointer before:absolute before:left-0 before:w-6 before:h-6 before:bg-white before:rounded-full before:shadow before:transition-all before:duration-200 before:border-gray-300 ${isChecked ? 'before:translate-x-full bg-green-400' : ''}`}
        ></label>
      </div>
      <span className={`text-xs text-gray-500 text-opacity-60 mt-1 mr-2 ${ textVisible ? '': 'invisible'}`}>default</span>
    </div>
  );
};

export default ToggleSwitch;
