// GetData.js
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const GetData = () => {
  const { data } = useContext(AppContext);

  return (
    <div>
      <h2>Data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetData;
