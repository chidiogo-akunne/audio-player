import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '@screens/index';
import BaseNavigator from './navigator/base';

const RootStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <RootStack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
        />
        <RootStack.Screen name="BaseScreen" component={BaseNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
