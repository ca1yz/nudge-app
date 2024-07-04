import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'

import StarterPage from "../function_pages/starter";
import AllowLocation from "../location/allow_location";
import CookiesPermission from "../cookies/cookies_permission";
import CloudProvider from "../cloud_provider/provider";
import Permissions from "../permission/permission_screen";
import Buffer from "../function_pages/buffer";
import Feedback from "../function_pages/feedback";
import IconOverlay from "../function_pages/icon_overlay";
import PrintLocalStorage from "../function_pages/print_variables";
  
const PermissionsPage = () => {    

    // phone frame settings
    const scale = 0.9;
    const width = 320;
    const height = 500;
    const device = 'iPhone 8';
    const color = 'gold';    
    const NudgeType = () => Math.floor(Math.random() * 4) + 1;
    const nudgeType = NudgeType();
    // disable tab, space, and arrow keys
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Tab' || event.key === ' ' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
          event.preventDefault();
        }
      };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
    

    return (
        <div className="select-none flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
          <DeviceFrameset device={device} color={color} zoom={scale} width={width} height={height}>
            <Permissions nudgeType={nudgeType} />
          </DeviceFrameset>
        </div>
      );
    }

export default PermissionsPage;    