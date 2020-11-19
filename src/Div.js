import React, { useContext } from 'react';
import { AppContext } from './App';

const Div = () => {
  const text = useContext(AppContext);

  return (
    <div>{text}</div>
  );  
};

export default Div;