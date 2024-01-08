/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from 'navigation/DrawerNavigator';
import NotificationProvider from 'providers/NotificationBarProvider';
import ThemeProvider from 'providers/ThemeProvider';

import store from '../store';

import 'localization/i18n';

export default function AppLayout(props) {
  const { hideSplashScreen } = props;

  useEffect(() => {
    setTimeout(hideSplashScreen, 5000);
  }, []);

  return (
    <ThemeProvider>
      <StoreProvider store={store}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <NotificationProvider>
              <NavigationContainer>
                <DrawerNavigator />
              </NavigationContainer>
            </NotificationProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}
