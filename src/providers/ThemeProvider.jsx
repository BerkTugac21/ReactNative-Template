/* eslint-disable react/prop-types */
import React from 'react';
import { PaperProvider } from 'react-native-paper';

import customAppTheme from 'styles/Theme';

function NotificationProvider({ children }) {
  return <PaperProvider theme={customAppTheme}>{children}</PaperProvider>;
}

export default NotificationProvider;
