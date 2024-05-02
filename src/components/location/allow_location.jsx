import React from "react";
import { useState, useEffect } from "react";
import Screen from "../screen";
import { ControlType } from "../nudges";
import map_img from "../../assets/1d77d8ec-bc4b-468c-9e24-1b840cccacef.jpg"
import * as SolarIconSet from "solar-icon-set";
import { ShieldCheckIcon } from '@heroicons/react/24/solid';


const AllowLocation = ( {nudgeType} ) => {

    var initialButtons = [
        {id: nudgeType + 'btn-while-using', text: 'While using'},
        {id: nudgeType + 'btn-never', text: 'Never'},
        {id: nudgeType + 'btn-always', text: 'Always'}
    ]

    const shuffleArray = (array) => {
        let newArray = array.slice(); // Clone the array to avoid modifying state directly
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
        }
        return newArray;
    };

    let ctrl = ControlType({typeNumber: nudgeType});
    var buttons = ctrl === 'no-nudge' ? shuffleArray(initialButtons) : initialButtons;
    var isVisibleNudge = ctrl === 'visible-nudge' || ctrl === 'understandable-nudge';
    var isUnderstandableNudge = ctrl === 'understandable-nudge';
    if (isVisibleNudge) {
        // swap the first and second buttons to put "Never" first
        [buttons[0], buttons[1]] = [buttons[1], buttons[0]];
    }
    const SafeIcon = () => <SolarIconSet.ShieldCheck color="#1c59c9" size={16} iconStyle="BoldDuotone" />; // <ShieldCheckIcon className="h-5 w-5 text-blue-500" />

    return (
        <Screen>
            <div className="flex flex-col justify-between h-full text-center">

                <div className="flex flex-col items-center translate-y-0">
                    <h1 className="w-64 text-xl h-16 translate-y-3 font-bold text-gray-700">Allow location tracking by this app?</h1>
                    <img src={map_img} alt="map" className="w-40 h-40 mt-2" />
                    {/* img with free license https://www.freepik.com/free-vector/grey-map-with-location-pin_154661093.htm */}
                </div>

                {/* <span className="h-3"></span> */}

                <div className="flex flex-col items-center text-sm gap-1 mb-6">
                    <button id={buttons[0]?.id} className="w-36 h-9 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                        {isUnderstandableNudge ? <SafeIcon></SafeIcon> : ''} {buttons[0]?.text}
                    </button>
                    {isVisibleNudge ?
                    <div className="h-16 text-xs text-gray-500 text-opacity-100">
                        {isUnderstandableNudge ? "Not letting applications track your location helps preserve your digital privacy." : ''}
                    </div>
                    : ''}
                    <button id={buttons[1]?.id} className="w-36 h-9 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                        {buttons[1]?.text}
                    </button>
                    <button id={buttons[2]?.id} className="w-36 h-9 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
                        {buttons[2]?.text}
                    </button>
                </div>
                
                <div className="-translate-y-0.5">
                    <button className="w-16 -translate-y-0.5">
                        <h1 className="text-xs text-gray-600">Next</h1>
                    </button>
                </div>
            </div>
        </Screen>
    );
}

export default AllowLocation;