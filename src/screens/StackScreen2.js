import { View, Text, Button, StyleSheet } from 'react-native';

const Screen2 = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Stack Screen 2</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen3')}
        title="Next >"
      />
      <Button onPress={() => props.navigation.goBack()} title="< Back" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default Screen2;
