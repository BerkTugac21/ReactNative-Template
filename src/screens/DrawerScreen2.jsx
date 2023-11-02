import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

function DrawerScreen2() {
  return (
    <View style={styles.screen}>
      <Text>This is Drawer Screen 2</Text>
    </View>
  );
}

export default DrawerScreen2;
