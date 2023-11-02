import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import DrawerNavigator from 'navigation/DrawerNavigator';

import { Notification } from 'contexts/NotificationBarContext';
import useNotificationBar from 'hooks/useNotificationBar';
import customAppTheme from 'styles/Theme';

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
    <PaperProvider theme={customAppTheme}>
      <Notification.Provider value={notificationContextValue}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </Notification.Provider>
    </PaperProvider>
  );
}