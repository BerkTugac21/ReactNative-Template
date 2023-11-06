/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

function Screen2(props) {
  const { t } = useTranslation();

  return (
    <View style={styles.screen}>
      <Text>{t('DummyStackText', { name: 'Screen2' })}</Text>
      <Button
        onPress={() => props.navigation.navigate('Screen3')}
        title={t('NextButton')}
      />
      <Button
        onPress={() => props.navigation.goBack()}
        title={t('BackButton')}
      />
    </View>
  );
}

export default Screen2;
