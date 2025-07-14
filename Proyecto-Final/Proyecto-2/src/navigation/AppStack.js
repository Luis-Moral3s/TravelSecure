// src/navigation/AppStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import MapRouteScreen from '../screens/home/MapRouteScreen';
import RouteScreen from '../screens/home/RouteScreen';
import DriverInfo from '../screens/profile/DriverInfo';
import VehicleInfo from '../screens/profile/VehicleInfo';
import CalificacionScreen from '../screens/calificacion/CalificacionScreen';


const Stack = createStackNavigator();

const AppStack = ({ setIsLoggedIn }) => (
    <Stack.Navigator>
        <Stack.Screen name="Home">
            {props => <HomeScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="Profile" component = {ProfileScreen} />
        <Stack.Screen name="MapRouteScreen" component={MapRouteScreen} />
        <Stack.Screen name = "RouteScreen" component={RouteScreen} />
        <Stack.Screen name = "DriverInfo" component={DriverInfo} />
        <Stack.Screen name='VehicleInfo' component={VehicleInfo} /> 
        <Stack.Screen name="Calificacion" component={CalificacionScreen} />
    </Stack.Navigator>
);

export default AppStack;