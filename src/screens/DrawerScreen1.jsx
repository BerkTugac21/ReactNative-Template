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

function DrawerScreen1() {
  return (
    <View style={styles.screen}>
      <Text>This is Drawer Screen 1</Text>
    </View>
  );
}

export default DrawerScreen1;
