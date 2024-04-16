// src/components/Permissions.jsx
import React from 'react';
import ToggleSwitch from './toggle_switch';
import Choice from './choice';

const PermissionItem = ({ name, IconComponent, controlType }) => {

    const renderControl = () => {
        switch (controlType) {
            case 'choice':
                return <Choice name={name} />;
            case 'toggle':
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
        <div className="flex items-center justify-between py-2 border-b">
            {/* border-b adds a border at the bottem */}
            <div className="flex items-center">
            <IconComponent className="h-6 w-6 text-gray-500" />
            <span className="ml-3 mr-3">{name}</span>
            </div>
            { renderControl() }
        </div>
    )
}

export const ControlType = ( {typeNumber} ) => {
    switch (typeNumber) {
        case 1:
            return 'choice';
        case 2:
            return 'toggle';
        case 3:
            return 'visible-nudge';
        case 4:
            return 'understandable-nudge';
        default:
            return 'choice';
    }
}

const Permissions = ( {nudgeType} ) => {
  // Replace these with your actual icon components or image paths
  const HealthIcon = () => <span>🩺</span>;
  const MicrophoneIcon = () => <span>🎤</span>;
  const NotificationsIcon = () => <span>🔔</span>;
  const MotionIcon = () => <span>🏃‍♂️</span>;

  let ctrl = ControlType({typeNumber: nudgeType});

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 w-72">
        <div className="text-center text-lg font-semibold">Permissions</div>
        <div className="space-y-2">
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
      <div className="px-6 py-4 bg-gray-50 text-center">
        <button className="px-4 py-2 bg-gray-200 rounded text-gray-700 hover:bg-gray-300">
          Next
        </button>
      </div>
    </div>
  );
};

export default Permissions;
