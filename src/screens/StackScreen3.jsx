/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Button } from 'react-native';

function Screen3(props) {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{t('DummyStackText', { name: 'Screen3' })}</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen1')}
        title={t('FirstButton')}
      />
    </View>
  );
}

export default Screen3;
