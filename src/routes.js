import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AppStack = createStackNavigator();
import Event from './pages/Event';
import Detail from './pages/Detail';


export default function Routes() {
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false }}>
                <AppStack.Screen name="Event" component={Event} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    ); 
} 