import { NavigationContainer } from '@react-navigation/native';

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

  return (
    <Notification.Provider
      value={{
        visible,
        toggleNotificationBar,
        openNotificationBar,
        closeNotificationBar,
      }}
    >
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Notification.Provider>
  );
}
