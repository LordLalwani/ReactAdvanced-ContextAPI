import React from 'react';
import ThemeContextProvider from './context/themeContext';
import Main from './components/main';

function App() {
  return (
    <ThemeContextProvider>
      <Main />
    </ThemeContextProvider>
  );
}

export default App;
