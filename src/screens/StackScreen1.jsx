/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// import { get } from 'api/apiClient';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Screen1(props) {
  /* const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get('/todos/1');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); */

  return (
    <View style={styles.screen}>
      <Text>This is Stack Screen 1</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen2')}
        title="Next >"
      />
    </View>
  );
}

export default Screen1;
