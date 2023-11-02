/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Screen4 from 'screens/TabScreen1';
import StackNavigator from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Tab1"
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Screen4}
        options={{
          tabBarLabel: 'Tab2',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="folder-alert"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
