import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'

import StarterPage from "./function_pages/starter";

const Phone = ({ children, start = StarterPage }) => {
    // phone frame settings
    const scale = 0.9;
    const width = 320;
    const height = 500;
    const device = 'iPhone 8';
    const color = 'gold';

    return (
        <div className="select-none flex flex-wrap justify-center items-stretch gap-5 mx-auto my-4">
            <DeviceFrameset device={device} color={color} zoom={scale} width={width} height={height}>
                {children}
            </DeviceFrameset>
        </div>
    );
}

export default Phone;