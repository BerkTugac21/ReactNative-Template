import { View, Text, Button, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import NotificationBar from 'components/shared/NotificationBar';
import React from 'react';
import { useNotification } from 'contexts/NotificationBarContext';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function TabScreen1() {
  const { t } = useTranslation();

  const {
    visible,
    toggleNotificationBar,
    openNotificationBar,
    closeNotificationBar,
  } = useNotification();

  return (
    <View style={styles.screen}>
      <Text>{t('DummyTabText', { name: 'TabScreen1' })}</Text>
      <Button
        onPress={toggleNotificationBar}
        title={visible ? t('CloseButton') : t('ShowButton')}
      />
      <NotificationBar
        message={t('NotificationText')}
        visible={visible}
        toggleNotificationBar={toggleNotificationBar}
        openNotificationBar={openNotificationBar}
        closeNotificationBar={closeNotificationBar}
      />
    </View>
  );
}

export default TabScreen1;
