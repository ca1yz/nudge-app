import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const PrintLocalStorage = ({ onNext }) => {
  const [transformedData, setTransformedData] = useState([]);

  useEffect(() => {
    const extractAndTransformLocalStorage = () => {
      const data = [];

      const isCapitalizedWord = (word) => /^[A-Z][a-z]*$/.test(word);

      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('vars_')) {
          const newKey = key.replace('vars_', '').replace(/_/g, ' ');
          const words = newKey.split(' ');

          // Check if each word starts with a capital letter
          if (words.every(isCapitalizedWord)) {
            data.push({ key, name: newKey, value: localStorage.getItem(key) });
          }
        }
      });
      // Sort the data array before setting the state
      data.sort((a, b) => a.name.localeCompare(b.name));
      setTransformedData(data);
    };

    extractAndTransformLocalStorage();
  }, []);

  const columns = [
    {
      title: 'Variable',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  return (
    <>
    <div>
      {/* <h2>Transformed Local Storage Data</h2> */}
      <Table columns={columns} dataSource={transformedData} pagination={false} size='small'/>
    </div>
    <div className="">
        <button className="w-16 -translate-y-0.5"
            onClick={onNext}>
            <div className="flex justify-center w-full">
                <p className="text-xs text-gray-600">Restart</p>
            </div>
        </button>
    </div>
    </>
    
  );
};

export default PrintLocalStorage;
