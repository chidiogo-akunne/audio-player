import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootToaster } from '@components/rootToaster';
import { StatusBar } from 'expo-status-bar';
import ThemeProvider from './theme';
import Router from './router';
import GlobalErrorBoundary from '@libs/error';

export default function AppRouter() {
  return (
    <GlobalErrorBoundary>
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar translucent animated style="dark" />
          <RootToaster />
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </GlobalErrorBoundary>
  );
}
