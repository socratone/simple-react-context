import React from 'react';
import AppContext from './AppContext';
import Section from './Section';

const App = () => {
  const text = 'hello world';

  return (
    <AppContext.Provider value={text}>
      <Section />
    </AppContext.Provider>
  );
}

export default App;
