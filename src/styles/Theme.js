import { DefaultTheme } from 'react-native-paper';

const customTheme = {
  ...DefaultTheme,
  // Customize your theme here
  colors: {
    ...DefaultTheme.colors,
    primary: '#f3edf6',
    accent: 'yellow',
  },
  // You can customize other theme options here
};

export default customTheme;
