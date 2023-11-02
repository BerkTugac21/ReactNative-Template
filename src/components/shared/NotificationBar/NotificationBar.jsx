/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function NotificationBar({ message, visible, closeNotificationBar }) {
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
}

export default NotificationBar;
