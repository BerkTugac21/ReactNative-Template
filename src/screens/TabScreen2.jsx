import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

function TabScreen2() {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.screen}>
      <Text>{t('language-options')}</Text>
      <Button onPress={() => i18n.changeLanguage('tr')} title="Turkish" />
      <Button onPress={() => i18n.changeLanguage('en')} title="English" />
    </View>
  );
}

export default TabScreen2;
