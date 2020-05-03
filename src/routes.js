import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();
import Event from './pages/Event';
import Logon from './pages/Logon';
import Perfil from './pages/Perfil';
import Profile from './pages/Profile';
import Register from './pages/Register';


export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false }}>
                <AppStack.Screen name="Event" component={Event} />
                <AppStack.Screen name="Logon" component={Logon} /> 
                <AppStack.Screen name="Perfil" component={Perfil} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="Register" component={Register} />
            </AppStack.Navigator>

        </NavigationContainer>
    ); 
}