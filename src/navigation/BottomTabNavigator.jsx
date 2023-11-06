/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TabScreen1 from 'screens/TabScreen1';
import TabScreen2 from 'screens/TabScreen2';

import StackNavigator from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  const { t } = useTranslation();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Tab1"
        component={StackNavigator}
        options={{
          tabBarLabel: t('HomeTab'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={TabScreen1}
        options={{
          tabBarLabel: t('NotificationsTab'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="alert-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={TabScreen2}
        options={{
          tabBarLabel: t('LanguagesTab'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="web" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
