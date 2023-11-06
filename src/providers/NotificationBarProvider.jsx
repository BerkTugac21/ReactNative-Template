/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';

import { Notification } from 'contexts/NotificationBarContext';
import useNotificationBar from 'hooks/useNotificationBar';

function NotificationProvider({ children }) {
  const {
    visible,
    toggleNotificationBar,
    openNotificationBar,
    closeNotificationBar,
  } = useNotificationBar();

  const notificationContextValue = useMemo(
    () => ({
      visible,
      toggleNotificationBar,
      openNotificationBar,
      closeNotificationBar,
    }),
    [visible, toggleNotificationBar, openNotificationBar, closeNotificationBar],
  );

  return (
    <Notification.Provider value={notificationContextValue}>
      {children}
    </Notification.Provider>
  );
}

export default NotificationProvider;
