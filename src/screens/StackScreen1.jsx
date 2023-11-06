/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Button } from 'react-native';

// import { get } from 'api/apiClient';

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

  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{t('DummyStackText', { name: 'Screen1' })}</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen2')}
        title={t('NextButton')}
      />
    </View>
  );
}

export default Screen1;
