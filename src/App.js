import React, { createContext } from 'react';
import Section from './Section';

const AppContext = createContext();

const App = () => {
  const text = 'hello world';

  return (
    <AppContext.Provider value={text}>
      <Section />
    </AppContext.Provider>
  );
}

export { App, AppContext };
