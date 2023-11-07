/* eslint-disable react/prop-types */
import React from 'react';
import { PaperProvider } from 'react-native-paper';

import customAppTheme from 'styles/Theme';

function PaperThemeProvider({ children }) {
  return <PaperProvider theme={customAppTheme}>{children}</PaperProvider>;
}

export default PaperThemeProvider;
