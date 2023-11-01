import {View, Text, Button, StyleSheet} from 'react-native';

const TabScreen1 = props => {
  return (
    <View style={styles.screen}>
      <Text>This is Tab Screen 1</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen1')}
        title='< Back to Home Drawer Tab'
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