import {View, Text, Button, StyleSheet} from 'react-native';

const Screen4 = props => {
  return (
    <View style={styles.screen}>
      <Text>Screen 4</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen1')}
        title='< Back to Initial Screen'
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

export default Screen4;