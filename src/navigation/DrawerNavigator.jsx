import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Stacks" component={StackNavigator} />
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
