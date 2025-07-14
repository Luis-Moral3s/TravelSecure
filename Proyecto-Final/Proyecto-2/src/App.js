// src/app/App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Usar contexto/Redux en producción

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <AppStack setIsLoggedIn={setIsLoggedIn}/> 
      ) : (
        <AuthStack setIsLoggedIn={setIsLoggedIn} />
      )}
    </NavigationContainer>
  );
}