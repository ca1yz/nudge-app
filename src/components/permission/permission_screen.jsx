// src/components/permission_screen.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from './toggle_switch';
import RadioChoice from './radio_choice';
import Screen from '../screen';
import { ControlType } from '../configs';
import * as SolarIconSet from "solar-icon-set";
import BubbleMessage from '../function_pages/bubble_message';


const PermissionItem = ({ name, IconComponent, controlType, onSelectionChange }) => {
    const renderControl = () => {
      switch (controlType) {
        case 'nudge':
        case 'visible-nudge':
        case 'understandable-nudge':
                      return <ToggleSwitch id={name + controlType} name={name} defaultChecked={false} controlType={controlType} onSelectionChange={onSelectionChange} />;
        case 'no-nudge':
        default:
          return <RadioChoice id={name + controlType} name={name} controlType={controlType} onSelectionChange={onSelectionChange} />;
      }
    };
  
    return (
      <div className="flex h-14 items-center justify-between py-2 border-b">
        <div className="flex items-center ml-2 pb-2">
          <IconComponent className="h-6 w-6 text-gray-500" />
          <span className="ml-2">{name}</span>
        </div>
        <div>{renderControl()}</div>
      </div>
    );
  };
  
const Permissions = ( {nudgeType, onNext} ) => {
  // Replace these with your actual icon components or image paths
  const HealthIcon = () => <SolarIconSet.HeartPulse color="#1C274C" size={24} iconStyle="BoldDuotone" />;
  const MicrophoneIcon = () => <SolarIconSet.Microphone2 color="#1C274C" size={24} iconStyle="BoldDuotone" />;
  const NotificationsIcon = () => <SolarIconSet.NotificationUnread color="#1C274C" size={24} iconStyle="Broken" />;
  const MotionIcon = () => <SolarIconSet.Running2 color="#1C274C" size={24} iconStyle="LineDuotone" />;
  

  let ctrl = ControlType({typeNumber: nudgeType});

  const inititalValue = ctrl === 'no-nudge' ? null : false;
  const [selections, setSelections] = useState({
    Health: inititalValue,
    Microphone: inititalValue,
    Notifications: inititalValue,
    Motion: inititalValue,
  });
  const saveSelectionsToLocalStorage = () => {
    Object.entries(selections).forEach(([key, value]) => {
      localStorage.setItem(`vars_Permission_${key}`, value);
    });
  };

  const onSelectionChange = (name, value) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [name]: value,
    }));
  };

  // Save state to local storage whenever selections change
  useEffect(() => {
    saveSelectionsToLocalStorage();
  }, [selections]);

  const [showMessage, setShowMessage] = useState(false);

  // in case of no-nudge, all options must be selected (not null)
  const allSelected = ctrl === 'no-nudge' ? 
    Object.values(selections).every(value => value !== null) 
    : true;

  const handleNextClick = () => {
    if (allSelected) {
        onNext();
    } else {
        // alert user to select all options
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 1000);
      }
  };


  return (
    <Screen>
        <div className="px-6 py-4 w-full">
            <div className="text-center text-lg font-semibold h-10">Permissions</div>
            <div className="space-y-2 py-2">
                <PermissionItem name="Health" IconComponent={HealthIcon} controlType={ctrl} onSelectionChange={onSelectionChange}/>
                <PermissionItem name="Microphone" IconComponent={MicrophoneIcon} controlType={ctrl} onSelectionChange={onSelectionChange}/>
                <PermissionItem name="Notifications" IconComponent={NotificationsIcon} controlType={ctrl} onSelectionChange={onSelectionChange}/>
                <PermissionItem name="Motion" IconComponent={MotionIcon} controlType={ctrl} onSelectionChange={onSelectionChange}/>
            </div>
            <div className=' h-12'> 
                <p className="py-1 text-xs text-gray-600 text-opacity-100 text-left">
                    { ctrl === 'understandable-nudge' ?
                    'Permissions are turned off by default to support you in making privacy-preserving choices'
                    : ''}
                </p>
            </div>

        </div>
        <div className="">
            <button className="w-16 -translate-y-0.5"
             onClick={handleNextClick}>
                <div className="flex justify-center w-full">
                    <p className="text-xs text-gray-600">Next</p>
                </div>
            </button>
            <BubbleMessage
                show={showMessage}
                message="Please select all options before proceeding."
            />

        </div>
    </Screen>
  );
};

export default Permissions;
