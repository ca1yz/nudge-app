import React, { useState, useEffect } from "react";
import Screen from "../screen";
import { ControlType } from "../nudges";
import map_img from "../../assets/1d77d8ec-bc4b-468c-9e24-1b840cccacef.jpg";
import * as SolarIconSet from "solar-icon-set";
import BubbleMessage from "../function_pages/bubble_message";

const shuffleArray = (array) => {
  let newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const AllowLocation = ({ nudgeType, onNext }) => {
  const initialButtons = [
    { id: 'btn-while-using', text: 'While using' },
    { id: 'btn-never', text: 'Never' },
    { id: 'btn-always', text: 'Always' }
  ];

  // Shuffle the buttons before the component mounts
  const ctrl = ControlType({ typeNumber: nudgeType });
  let shuffledButtons = ctrl === 'no-nudge' ? shuffleArray(initialButtons) : initialButtons;
  if (ctrl === 'visible-nudge' || ctrl === 'understandable-nudge') {
    [shuffledButtons[0], shuffledButtons[1]] = [shuffledButtons[1], shuffledButtons[0]];
  }

  const [selected, setSelected] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [buttons, setButtons] = useState(shuffledButtons);

  const handleButtonClick = (buttonName) => {
    setSelected(buttonName);
    localStorage.setItem('vars_Allow_Location', buttonName);
  };

  const handleNext = () => {
    if (selected === '') {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1000);
    } else {
      onNext();
    }
  };

  const getButtonClassNames = (buttonText) => (
    `w-36 h-9 rounded text-gray-700 hover:bg-gray-300 ${
      selected === buttonText ? 'bg-gray-300' : 'bg-gray-200'
    }`
  );

  const isUnderstandableNudge = ctrl === 'understandable-nudge';
  const SafeIcon = () => <SolarIconSet.ShieldCheck color="#1c59c9" size={16} iconStyle="BoldDuotone" />;

  return (
    <Screen>
      <div className="flex flex-col justify-between h-full text-center">
        <div className="flex flex-col items-center translate-y-0">
          <h1 className="w-64 text-xl h-16 translate-y-3 font-bold text-gray-700">Allow location tracking by this app?</h1>
          <img src={map_img} alt="map" className="w-40 h-40 mt-2" />
        </div>

        <div className="flex flex-col items-center text-sm gap-1 mb-6">
          <button
            id={buttons[0]?.id}
            onClick={() => handleButtonClick(buttons[0]?.text)}
            className={getButtonClassNames(buttons[0]?.text)}
          >
            {isUnderstandableNudge ? <SafeIcon /> : ''} {buttons[0]?.text}
          </button>
          {isUnderstandableNudge &&
            <div className="h-16 text-xs text-gray-500 text-opacity-100">
              Not letting applications track your location helps preserve your digital privacy.
            </div>
          }
          <button
            id={buttons[1]?.id}
            onClick={() => handleButtonClick(buttons[1]?.text)}
            className={getButtonClassNames(buttons[1]?.text)}
          >
            {buttons[1]?.text}
          </button>
          <button
            id={buttons[2]?.id}
            onClick={() => handleButtonClick(buttons[2]?.text)}
            className={getButtonClassNames(buttons[2]?.text)}
          >
            {buttons[2]?.text}
          </button>
        </div>

        <div className="">
        <button className="w-16 -translate-y-0.5"
            onClick={handleNext}>
            <div className="flex justify-center w-full">
                <p className="text-xs text-gray-600">Next</p>
            </div>
            <BubbleMessage
                show={showMessage}
                message="Please select your option before proceeding."
            />
        </button>
      </div>
      </div>
    </Screen>
  );
};

export default AllowLocation;
