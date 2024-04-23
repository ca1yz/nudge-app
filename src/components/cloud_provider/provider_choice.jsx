import React from 'react';

const ProviderChoice = ({ name, icon, groupName, onChange, checked }) => {
  return (
    <label className="flex flex-col items-center mb-2 text-sm justify-end">
      <input 
        type="radio"
        name={groupName}
        onChange={onChange}
        checked={checked}
        className="form-radio h-4 w-4 text-blue-600" 
      />
      <span className="pt-1 flex-shrink-0">{icon}</span>
      <span>{name}</span>
    </label>
  );
};

export default ProviderChoice;
