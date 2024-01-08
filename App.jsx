/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

import AppLayout from './src/AppLayout';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return <AppLayout hideSplashScreen={SplashScreen.hideAsync} />;
}
