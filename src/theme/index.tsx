import React, { FunctionComponent, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  ThemeProvider as Provider,
  ThemeContext
} from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { styledComponentTheme, paperTheme } from './types';

const ThemeProvider: FunctionComponent = ({ children }) => {
  return (
    <PaperProvider
      theme={paperTheme}
      settings={{ icon: (props: any) => <AntDesign {...props} /> }}
    >
      <StatusBar translucent animated style="dark" />
      <Provider theme={styledComponentTheme}>{children}</Provider>
    </PaperProvider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);

export default ThemeProvider;
