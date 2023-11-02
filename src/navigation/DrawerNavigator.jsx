import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';

import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: 'black',
        drawerActiveBackgroundColor: theme.colors.primary,
      }}
    >
      <Drawer.Screen name="Stacks" component={StackNavigator} />
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
