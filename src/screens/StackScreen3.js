import { View, Text, Button, StyleSheet } from 'react-native';

const Screen3 = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Stack Screen 3</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen1')}
        title="< First"
      />
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

export default Screen3;
