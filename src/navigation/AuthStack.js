import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();
//console.log('setIsLoggedIn recibido:', setIsLoggedIn);
const AuthStack = ({ setIsLoggedIn }) => (
    
   <Stack.Navigator>
        <Stack.Screen name="Login">
            {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
  </Stack.Navigator>

);

export default AuthStack;


