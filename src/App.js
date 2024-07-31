import React from 'react';
import { ThemeProvider } from './components/ThemeContext';

import Navbar from './components/Navbar';
import Content from './components/Content';

const App = () => {
  return (
    <div className="App">
      
      <Navbar />
      <Content />
    </div>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;
