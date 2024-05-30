import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BubbleMessage from '../function_pages/bubble_message';
import Screen from '../screen';
import { ControlType } from '../nudges';
import ProviderChoice from './provider_choice';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import CloudServerImage from '../../assets/cloud-storage.png';
import ProviderA from '../../assets/cloud_A.png';
import ProviderB from '../../assets/cloud_B.png';
import ProviderC from '../../assets/cloud_C.png';


const data = [
  { provider: 'Provider A', downloads: 120, isPopular: false },
  { provider: 'Provider B', downloads: 240, isPopular: true },
  { provider: 'Provider C', downloads: 180, isPopular: false },
];

const CloudProvider = ({ nudgeType, onNext }) => {
  const maxValue = Math.max(...data.map(o => o.downloads));
  const [selected, setSelected] = useState('');
  const [availableHeight, setAvailableHeight] = useState(0);
  const titleRef = useRef(null);
  const choicesRef = useRef(null);
  const containerRef = useRef(null);
  // inform user to select a provider
  const [showMessage, setShowMessage] = useState(false);

  const handleNext = () => {
    if (selected === '') {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1000);
    } else {
      onNext();
    }
  };

  useEffect(() => {
    if (containerRef.current && titleRef.current && choicesRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const titleHeight = titleRef.current.clientHeight;
      const choicesHeight = choicesRef.current.clientHeight;
      setAvailableHeight(containerHeight - titleHeight - choicesHeight - 120); // 30px assumed for margin/padding
    }
  }, []);

  let ctrl = ControlType({typeNumber: nudgeType});
  var isVisibleNudge = ctrl === 'visible-nudge' || ctrl === 'understandable-nudge';
  var isUnderstandableNudge = ctrl === 'understandable-nudge';

  // Icon made by Freepik from www.flaticon.com
  // <a href="https://www.flaticon.com/free-icons/cloud" title="cloud icons">Cloud icons created by iconixar - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/security" title="security icons">Security icons created by Dewi Sari - Flaticon</a>
  // <a href="https://www.flaticon.com/free-icons/cloudy" title="cloudy icons">Cloudy icons created by heisenberg_jr - Flaticon</a>
  const choices = [
    { name: 'Provider A', icon: <img src={ProviderA} draggable="false" className="h-10 w-10" /> },
    { name: 'Provider B', icon: <img src={ProviderB} draggable="false" className="h-10 w-10" /> },
    { name: 'Provider C', icon: <img src={ProviderC} draggable="false" className="h-10 w-10" /> },
  ];

  const handleSelection = (providerName) => {
    setSelected(providerName);
    localStorage.setItem('vars_Cloud_Provider', providerName);
  };

return (
  <Screen>
    <div className=" h-full w-11/12 flex flex-col justify-between" ref={containerRef}>
      <div ref={titleRef} className="flex flex-col items-center pt-3">
        <h1 className="w-64 text-xl font-bold text-gray-700">Cloud Services</h1>
        <span className="w-4/5">
          {ctrl === 'no-nudge' 
          ? 'Please select your preferred cloud service' 
          : 'Downloads this month'}
        </span>
      </div>

      {ctrl === 'no-nudge' 
      ? 
        <div className="flex flex-col items-center">
          <img src={CloudServerImage} draggable="false" className="w-auto h-52 scale-75" />
          {/* free license img src https://storyset.com/illustration/cloud-hosting/rafiki */}
        </div>
      :
        <div className="flex-grow w-full h-52 -translate-y-2">
          <div className="flex justify-between items-end px-4 h-full mt-4 border-b-2 ml-2 mr-2 border-gray-200">
            {data.map((item) => (
              <div key={item.provider} className="flex flex-col items-center w-1/4">
                <div
                  className={`w-full ${item.isPopular ? 'bg-blue-300' : 'bg-blue-200'} transition-all duration-300 shadow-md`}
                  style={{ height: `${(item.downloads / maxValue) * availableHeight}px` }}
                  title={`${item.downloads} downloads`}>
                  {isVisibleNudge && item.isPopular && (
                    <div className="w-18 text-xs px-2 py-1 -mt-6 bg-orange-500 text-white rounded shadow-sm">
                      Most Popular{isUnderstandableNudge ? "*":""}
                    </div>
                  )}
                </div>
                <span className="text-sm mt-2"></span>
              </div>
            ))}
          </div>
        </div>
      }


      <div ref={choicesRef} className="flex justify-between items-center mt-4 pl-5 pr-5">
        {choices.map((choice) => (
          <ProviderChoice
            key={choice.name}
            name={choice.name}
            icon={choice.icon}
            groupName={"choice-group" + ctrl}
            onChange={() => handleSelection(choice.name)}
            checked={selected === choice.name}
          />
        ))}
      </div>

      <div className={`text-xs -translate-y-1 text-gray-700 isUnderstandableNudge ${isUnderstandableNudge ? ``: `invisible`}`}>
        * enhanced option, as it also provides the most secure storage of your data
      </div>
      <div className="">
        <button className="w-16 -translate-y-0.5"
            onClick={handleNext}>
            <div className="flex justify-center w-full">
                <p className="text-xs text-gray-600">Next</p>
            </div>
            <BubbleMessage
                show={showMessage}
                message="Please select cloud provider before proceeding."
            />
        </button>
      </div>

    </div>
  </Screen>
);
};

export default CloudProvider;
