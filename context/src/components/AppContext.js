import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const addData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <AppContext.Provider value={{ data, addData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
