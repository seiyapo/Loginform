import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Login from './components/contents/Login';
import { Container } from './components/styles/Container';
import GlobalStyles from './components/styles/Globalstyles';



const App = () => {
  return (
    
    <> 
        <GlobalStyles />
        
            <Login />
    </>  
   
  );
};

export default App;
