import { View, Text, Button, StyleSheet } from 'react-native';

import NotificationBar from 'components/shared/NotificationBar';
import { useNotification } from '../contexts/NotificationBarContext';

const TabScreen1 = () => {
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
        message={'Test4 SnackBar Message'}
        visible={visible}
        toggleNotificationBar={toggleNotificationBar}
        openNotificationBar={openNotificationBar}
        closeNotificationBar={closeNotificationBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabScreen1;
