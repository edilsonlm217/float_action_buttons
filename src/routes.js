import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Cornered from './components/CorneredActionBtn';
import Horizontal from './components/HorizontallyExpandingActionBtn';
import Home from './pages/Home/index';

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{gestureEnabled: true, headerShown: true}}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Cornered" 
        component={Cornered}  
        options={{
          title: 'Back',
          headerTintColor: '#337AB7',
        }}
      />

      <Stack.Screen
        name="Horizontal" 
        component={Horizontal} 
        options={{
          title: 'Back',
          headerTintColor: '#337AB7',
        }}
      />
    </Stack.Navigator>
  );
}
