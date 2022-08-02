import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { enableScreens } from 'react-native-screens';
import AppRouter from './src';
import loadResources from './src/libs/loadResources';

enableScreens();

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    loadResources().then(async () => {
      await SplashScreen.hideAsync();
      setIsAppReady(true);
    });
  }, []);

  return isAppReady && <AppRouter />;
}
