import { createContext, useContext } from 'react';

export const Notification = createContext();

export const useNotification = () => {
  return useContext(Notification);
};
