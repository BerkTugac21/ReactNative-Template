import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

function DrawerScreen2() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{t('DummyDrawerText', { name: 'DrawerScreen2' })}</Text>
    </View>
  );
}

export default DrawerScreen2;
