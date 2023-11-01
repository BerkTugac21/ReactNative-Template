import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const NotificationBar = ({
  message,
  visible,
  closeNotificationBar,
}) => {
  return (
    <View style={styles.container}>
      <Snackbar
        visible={visible}
        onDismiss={closeNotificationBar}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}
      >
        {message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default NotificationBar;
