import React from 'react';
import { AppContext } from './App';

const Div = () => {
  return (
    <AppContext.Consumer>
      {text => {
        return (
          <div>{text}</div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Div;