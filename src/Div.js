import React, { useContext } from 'react';
import AppContext from './AppContext';

const Div = () => {
  const text = useContext(AppContext);

  return (
    <div>{text}</div>
  );  
};

export default Div;