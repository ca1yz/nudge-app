import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'

import StarterPage from "./starter";
import AllowLocation from "../location/allow_location";
import CookiesPermission from "../cookies/cookies_permission";
import CloudProvider from "../cloud_provider/provider";
import Permissions from "../permission/permission_screen";
import Buffer from "./buffer";
import Feedback from "./feedback";
import IconOverlay from "./icon_overlay";
import PrintLocalStorage from "./print_variables";

// Ordered pages in the pipeline
const components = [
    Buffer,
    Permissions,
    Buffer,
    AllowLocation,
    Buffer,
    CloudProvider,
    Buffer,
    CookiesPermission,
    Feedback,
    Buffer,
    PrintLocalStorage
  ];


const getRandomNudgeType = () => Math.floor(Math.random() * 4) + 1;
const getRandomDelayTime = () => Math.floor(Math.random() * (500 - 200 + 1)) + 200;

const getAllLocalStorage = () => {
    let values = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      values[key] = localStorage.getItem(key);
    }
    return values;
  };

  
const PhoneNav = () => {
    // states for switching pages
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nudgeType, setNudgeType] = useState(getRandomNudgeType());
    const [isLoading, setIsLoading] = useState(false);

    const handleNext = () => {
        setIsLoading(true);
        const delay = getRandomDelayTime();
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
          setNudgeType(getRandomNudgeType());
          setIsLoading(false);
        }, delay); // 0.5 second delay
      };
        
    const CurrentComponent = components[currentIndex];
    

    // phone frame settings
    const scale = 0.9;
    const width = 320;
    const height = 500;
    const device = 'iPhone 8';
    const color = 'gold';

    const BuffersParams = {
        0: { title: 'Start', 
            text: 'Setup permissions...' },
        2: { title: 'BufferPage Title',
            text: 'Setup location...' },
        4: { title: 'BufferPage Title',
            text: 'Setup cloud provider...' },
        6: { title: 'BufferPage Title',
            text: 'Setup cookies...' },
        9: { title: 'Thank you!',
            text: 'You may close the page now. (there is another page for testing purpose.)' },
      };

    const renderCurrentComponent = () => {
        if (CurrentComponent === Buffer) {
          const params = BuffersParams[currentIndex] || {};
          return <Buffer nudgeType={nudgeType} onNext={handleNext} {...params} />;
        }
        return <CurrentComponent nudgeType={nudgeType} onNext={handleNext} />;
      };
    

    return (
        <div className="select-none flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
          <DeviceFrameset device={device} color={color} zoom={scale} width={width} height={height}>
            {isLoading && <IconOverlay text="" />}
            {renderCurrentComponent()}
          </DeviceFrameset>
        </div>
      );
    }

export default PhoneNav;