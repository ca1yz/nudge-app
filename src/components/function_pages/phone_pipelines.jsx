import React from "react";
import { useState, useEffect } from "react";
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
import { bufferPages, isDemo, surveyUrl } from "../../../config";
import { extractAndTransformLocalStorage } from "./print_variables";
import { postSubmission } from "../../api/api";

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

const getRandomDelayTime = () => Math.floor(Math.random() * (500 - 200 + 1)) + 200;
  
const PhoneNav = ( {participantId, nudgeSequence, isLogin} ) => {
    // states for switching pages
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const nudges = [0, nudgeSequence[0], 0, nudgeSequence[1], 0, nudgeSequence[2], 0, nudgeSequence[3], 0, 0];
            
    const handleNext = () => {
        setIsLoading(true);
        const delay = getRandomDelayTime();
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
          setIsLoading(false);
        }, delay); // 0.5 second delay
      };
    
    // send data to backend
    const onSubmit = () => {
        const finalData = extractAndTransformLocalStorage();
        postSubmission(finalData);
        handleNext();
      };
        
    const CurrentComponent = components[currentIndex];
    
    // phone frame settings
    const scale = 0.9;
    const width = 320;
    const height = 500;
    const device = 'iPhone 8';
    const color = 'gold';

    const customKeys = [0, 2, 4, 6, 8, 9]; // indices for buffer pages
    const BuffersParams = bufferPages.reduce((acc, page, index) => {  // {index: {title, text}} pairs
        acc[customKeys[index]] = { title: page.title, text: page.text };
        return acc;
    }, {});        

    const renderCurrentComponent = () => {
      const params = BuffersParams[currentIndex] || {};
      params.nudgeType = nudges[currentIndex];
      params.onNext = handleNext;
      if (currentIndex === 8) { // Feedback page
        localStorage.setItem('vars_Participant_Id', participantId);
        localStorage.setItem('vars_Nudge_Sequence', nudgeSequence);   
        params.onNext = onSubmit;
      }
      if (currentIndex === 9) { // final page
        params.hideBtn = true;   
      }  
      return <CurrentComponent {...params} />;
    };
    
    // redirect to the survey page after
    useEffect(() => {
      if (currentIndex === 9 && surveyUrl) {
          const timer = setTimeout(() => {
            setIsLoading(true);
            window.location.href = surveyUrl;
          }, 3000);
          return () => clearTimeout(timer);
      }
    }, [currentIndex]);

  

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