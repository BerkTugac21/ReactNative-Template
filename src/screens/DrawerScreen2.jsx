import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

function DrawerScreen2() {
  const { t } = useTranslation();

  return (
    <View style={styles.screen}>
      <Text>{t('DummyDrawerText', { name: 'DrawerScreen2' })}</Text>
    </View>
  );
}

export default DrawerScreen2;
