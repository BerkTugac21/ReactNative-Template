import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { get } from 'api/apiClient';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Screen1() {
  const [data, setData] = useState(null);

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
  }, []);

  return (
    <View style={styles.screen}>
      {/* <Text>This is Stack Screen 1</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen2')}
        title='Next >'
      /> */}
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}

export default Screen1;
