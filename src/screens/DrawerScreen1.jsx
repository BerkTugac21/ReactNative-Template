import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

function DrawerScreen1() {
  const { t } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{t('DummyDrawerText', { name: 'DrawerScreen1' })}</Text>
    </View>
  );
}

export default DrawerScreen1;
