// src/components/permission/radio_choice.jsx
import React, { useState } from 'react';
import { Radio } from 'antd';

const options = [
  {
    label: 'allow',
    value: 'true',
  },
  {
    label: 'disable',
    value: 'false',
  },
];

const RadioChoice = ({ id, name, controlType, onSelectionChange }) => {
  const [allow, setAllow] = useState(null);

  const onChange = ({ target: { value } }) => {
    setAllow(value);
    onSelectionChange(name, value);
  };

  return (
    <>
      <Radio.Group options={options} onChange={onChange} value={allow} optionType="button" size="small" />
    </>
  );
};

export default RadioChoice;
