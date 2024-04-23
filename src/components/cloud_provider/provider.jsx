import React, { useState, useEffect, useRef } from 'react';
import Screen from '../screen';
import { ControlType } from '../nudges';
import ProviderChoice from './provider_choice';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import CloudServerImage from '../../assets/Cloud_hosting-rafiki.png';

const data = [
  { provider: 'Provider A', downloads: 120, isPopular: false },
  { provider: 'Provider B', downloads: 240, isPopular: true },
  { provider: 'Provider C', downloads: 180, isPopular: false },
];

const CloudProvider = ({ nudgeType }) => {
  const maxValue = Math.max(...data.map(o => o.downloads));
  const [selected, setSelected] = useState('');
  const [availableHeight, setAvailableHeight] = useState(0);
  const titleRef = useRef(null);
  const choicesRef = useRef(null);
  const containerRef = useRef(null);


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

  const choices = [
    { name: 'Provider A', icon: <ShieldCheckIcon className="h-10 w-10 text-blue-500" /> },
    { name: 'Provider B', icon: <ShieldCheckIcon className="h-10 w-10 text-red-500" /> },
    { name: 'Provider C', icon: <ShieldCheckIcon className="h-10 w-10 text-green-500" /> },
  ];

  const handleSelection = (choice) => {
    setSelected(choice);
  };

return (
  <Screen>
    <div className="mb-4 max-h-full w-11/12 border-spacing-2 border-2 flex-col" ref={containerRef}>
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
      <div className="flex flex-col items-center pt-2">
        <img src={CloudServerImage} className="w-60 h-60" />
        {/* free license img src https://storyset.com/illustration/cloud-hosting/rafiki */}
      </div>
      :
        <div className="flex-grow w-full h-64 -translate-y-2">
          <div className="flex justify-between items-end px-4 h-full mt-4 border-b-2 ml-2 mr-2 border-gray-400">
            {data.map((item) => (
              <div key={item.provider} className="flex flex-col items-center w-1/4">
                <div
                  className={`w-full ${item.isPopular ? 'bg-blue-400' : 'bg-blue-300'} transition-all duration-300 shadow-md`}
                  style={{ height: `${(item.downloads / maxValue) * availableHeight}px` }}
                  title={`${item.downloads} downloads`}>
                  {isVisibleNudge && item.isPopular && (
                    <div className="absolute text-xs px-2 py-1 -mt-6 bg-red-500 text-white rounded shadow-sm">
                      Most Popular {isUnderstandableNudge ? "*":""}
                    </div>
                  )}
                </div>
                <span className="text-sm mt-2"></span>
              </div>
            ))}
          </div>
        </div>
      }


      <div ref={choicesRef} className="flex justify-between items-center pl-5 pr-5">
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

      <div className={`text-xs text-gray-500 isUnderstandableNudge ${isUnderstandableNudge ? ``: `invisible`}`}>
        * enhanced option, as it also provides the most secure storage of your data
      </div>
    </div>
  </Screen>
);
};

export default CloudProvider;
