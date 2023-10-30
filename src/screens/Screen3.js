import {View, Text, Button, StyleSheet} from 'react-native';

const Screen3 = props => {
  return (
    <View style={styles.screen}>
      <Text>Screen 3</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen4')}
        title='Go to Screen 4 >'
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

export default Screen3;