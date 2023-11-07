import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';

import DrawerNavigator from 'navigation/DrawerNavigator';
import NotificationProvider from 'providers/NotificationBarProvider';
import ThemeProvider from 'providers/ThemeProvider';

import 'localization/i18n';

export default function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </NotificationProvider>
    </ThemeProvider>
  );
}

registerRootComponent(App);
