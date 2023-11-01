import {View, Text, StyleSheet} from 'react-native';

const DrawerScreen1 = () => {
  return (
    <View style={styles.screen}>
      <Text>This is Drawer Screen 1</Text>
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

export default DrawerScreen1;