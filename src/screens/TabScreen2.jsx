import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

function TabScreen2() {
  const { t, i18n } = useTranslation();

  return (
    <View className="flex-1 items-center justify-center">
      <Text>{t('language-options')}</Text>
      <Button onPress={() => i18n.changeLanguage('tr')} title="Turkish" />
      <Button onPress={() => i18n.changeLanguage('en')} title="English" />
    </View>
  );
}

export default TabScreen2;
