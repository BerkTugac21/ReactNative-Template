import { View, Text, Button, StyleSheet } from 'react-native';

import NotificationBar from 'components/shared/NotificationBar';
import React from 'react';
import { useNotification } from 'contexts/NotificationBarContext';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function TabScreen1() {
  const {
    visible,
    toggleNotificationBar,
    openNotificationBar,
    closeNotificationBar,
  } = useNotification();

  return (
    <View style={styles.screen}>
      <Text>This is Tab Screen 1</Text>
      <Button
        onPress={toggleNotificationBar}
        title={visible ? 'Close-Notification' : 'Show-Notification'}
      />
      <NotificationBar
        message="My snackbar message text is here!"
        visible={visible}
        toggleNotificationBar={toggleNotificationBar}
        openNotificationBar={openNotificationBar}
        closeNotificationBar={closeNotificationBar}
      />
    </View>
  );
}

export default TabScreen1;
