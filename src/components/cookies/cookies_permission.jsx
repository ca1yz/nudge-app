import React from "react";
import { useNavigate } from 'react-router-dom';
import Screen from "../screen";
import { ControlType } from "../configs";
import map_img from "../../assets/1d77d8ec-bc4b-468c-9e24-1b840cccacef.jpg"
import * as SolarIconSet from "solar-icon-set";
import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import CookiesButton from "./cookies_button";


const CookiesPermission = ( {name = CookiesPermission, nudgeType, onNext} ) => {

    let ctrl = ControlType({typeNumber: nudgeType});
    var explain = ctrl !== 'no-nudge';
    var isVisibleNudge = ctrl === 'visible-nudge' || ctrl === 'understandable-nudge';
    var isUnderstandableNudge = ctrl === 'understandable-nudge';

    return (
        <Screen>
            <div className="flex flex-col h-full text-center justify-between">

                <div className="flex flex-col h-16 items-center pt-6 mb-4">
                    <h1 className="w-64 text-xl font-bold text-gray-700">Allow cookies for this app?</h1>
                </div>

                <div className=" -translate-y-1">
                    <div className="flex flex-col min-h-64 h-full justify-center text-sm gap-y-1">
                        <CookiesButton id={name + ctrl} explain={explain} safe={isUnderstandableNudge} flipped={isVisibleNudge} 
                        frontText="Only Necessary" backText="This means xyz... and is the most privacy-friendly option. " />

                        <CookiesButton id={name + ctrl} explain={explain} 
                        frontText="Functionality" backText="allows cookies that enhance the usability and performance of the website by enabling personalized features like language preferences and shopping carts." />

                        <CookiesButton id={name + ctrl} explain={explain} 
                        frontText="Analytics" backText="Allow cookies that help us understand how visitors interact with the website by collecting and reporting information anonymously." />

                        <CookiesButton id={name + ctrl} explain={explain} 
                        frontText="Marketing" backText="These cookies may track users across websites and collect information to provide customized ads." />
                    </div>
                </div>

                <div className="">
                    <button className="w-16 -translate-y-0.5"
                     onClick={onNext}>
                        <div className="flex justify-center w-full">
                            <p className="text-xs text-gray-600">Next</p>
                        </div>
                    </button>
                </div>

            </div>
        </Screen>
    );
}

export default CookiesPermission;