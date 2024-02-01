// AppProvider.js
import React, { useReducer } from 'react';
import AppContext from './createContext';

const initialState = {
  items: [], // Your data structure for items
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    // Handle other CRUD operations similarly
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
