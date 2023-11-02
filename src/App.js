/* eslint-disable react/jsx-filename-extension */
import { NavigationContainer } from '@react-navigation/native';

import React, { useMemo } from 'react';
import DrawerNavigator from 'navigation/DrawerNavigator';

import { Notification } from 'contexts/NotificationBarContext';
import useNotificationBar from 'hooks/useNotificationBar';

export default function App() {
  const {
    visible,
    toggleNotificationBar,
    openNotificationBar,
    closeNotificationBar,
  } = useNotificationBar();

  const notificationContextValue = useMemo(
    () => ({
      visible,
      toggleNotificationBar,
      openNotificationBar,
      closeNotificationBar,
    }),
    [visible, toggleNotificationBar, openNotificationBar, closeNotificationBar],
  );

  return (
    <Notification.Provider value={notificationContextValue}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Notification.Provider>
  );
}
