// src/components/permission_screen.jsx
import React from 'react';
import ToggleSwitch from './toggle_switch';
import Choice from './choice';
import Screen from '../screen';
import { ControlType } from '../nudges';
import * as SolarIconSet from "solar-icon-set";


const PermissionItem = ({ name, IconComponent, controlType }) => {

    const renderControl = () => {
        switch (controlType) {
            case 'no-nudge':
                return <Choice name={name} />;
            case 'nudge':
                return <ToggleSwitch id={name+controlType} name={name} defaultChecked={false} controlType={controlType} />;
            case 'visible-nudge':
                return <ToggleSwitch id={name+controlType} name={name} defaultChecked={false} controlType={controlType} />;
            case 'understandable-nudge':
                return <ToggleSwitch id={name+controlType} name={name} defaultChecked={false} controlType={controlType} />;
            default:
                return <Choice name={name} />;
        }
    }

    return (
        <div className="flex h-14 items-center justify-between py-2 border-b">
            {/* border-b adds a border at the bottem */}
            <div className="flex items-center ml-2 pb-2">
                <IconComponent className="h-6 w-6 text-gray-500" />
                <span className="ml-2">{name}</span>
            </div>
            <div>
                { renderControl() }
            </div>
        </div>
    )
}

const Permissions = ( {nudgeType} ) => {
  // Replace these with your actual icon components or image paths
  const HealthIcon = () => <SolarIconSet.HeartPulse color="#1C274C" size={24} iconStyle="BoldDuotone" />;
  const MicrophoneIcon = () => <SolarIconSet.Microphone2 color="#1C274C" size={24} iconStyle="BoldDuotone" />;
  const NotificationsIcon = () => <SolarIconSet.NotificationUnread color="#1C274C" size={24} iconStyle="Broken" />;
  const MotionIcon = () => <SolarIconSet.Running2 color="#1C274C" size={24} iconStyle="LineDuotone" />;
  

  let ctrl = ControlType({typeNumber: nudgeType});

  return (
    <Screen>
        <div className="px-6 py-4 w-72">
            <div className="text-center text-lg font-semibold h-10">Permissions</div>
            <div className="space-y-2 py-2">
                <PermissionItem name="Health" IconComponent={HealthIcon} controlType={ctrl} />
                <PermissionItem name="Microphone" IconComponent={MicrophoneIcon} controlType={ctrl} />
                <PermissionItem name="Notifications" IconComponent={NotificationsIcon} controlType={ctrl} />
                <PermissionItem name="Motion" IconComponent={MotionIcon} controlType={ctrl} />
            </div>
            <div className=' h-12'> 
                <p className="py-1 text-xs text-gray-600 text-opacity-65 text-left">
                    { ctrl === 'understandable-nudge' ?
                    'Permissions are turned off by default to support you in making privacy-preserving choices'
                    : ''}
                </p>
            </div>

        </div>
        <div className="px-6 py-4 w-full bg-gray-100 text-center">
            <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
            Next
            </button>
        </div>
    </Screen>
  );
};

export default Permissions;
