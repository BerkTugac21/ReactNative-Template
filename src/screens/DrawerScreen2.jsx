import {View, Text, StyleSheet} from 'react-native';

const DrawerScreen2 = () => {
  return (
    <View style={styles.screen}>
      <Text>This is Drawer Screen 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default DrawerScreen2;