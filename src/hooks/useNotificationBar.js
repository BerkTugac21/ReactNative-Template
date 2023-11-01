import { useState } from 'react';

const useNotificationBar = () => {
  const [visible, setVisible] = useState(false);

  const toggleNotificationBar = () => setVisible(!visible);

  const openNotificationBar = () => setVisible(true);

  const closeNotificationBar = () => setVisible(false);

  return {
    visible,
    toggleNotificationBar,
    openNotificationBar,
    closeNotificationBar,
  };
};

export default useNotificationBar;
