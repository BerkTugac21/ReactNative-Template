import { DefaultTheme } from 'react-native-paper';

import { size } from './Font';

const customTheme = {
  ...DefaultTheme,
  // Customize your theme here
  colors: {
    ...DefaultTheme.colors,
    primary: '#89181aff',
    accent: '#8a5f1aff',
  },
  customFont: {
    size,
  },
  // You can add other theme options here
};

export default customTheme;
