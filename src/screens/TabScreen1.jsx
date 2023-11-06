import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

import NotificationBar from 'components/shared/NotificationBar';
import React from 'react';
import { useNotification } from 'contexts/NotificationBarContext';

function TabScreen1() {
  const { t } = useTranslation();

  const {
    visible,
    toggleNotificationBar,
    openNotificationBar,
    closeNotificationBar,
  } = useNotification();

  return (
    <View className="flex-1 items-center justify-center">
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
