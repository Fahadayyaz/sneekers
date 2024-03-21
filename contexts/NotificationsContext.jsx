import { useContext, createContext, useState } from "react";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export default function NotificationContextProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const pushNotification = (message) => {
    const newNotifications = [
      ...notifications,
      {
        id: notifications.length + 1,
        date: new Date().toISOString(),
        message,
        isRead: false,
      },
    ];

    setNotifications(newNotifications);
  };

  const markNotificationAsRead = (id) => {
    const updatedNotifications = notifications.map((entry) => {
      if (entry.id === id) {
        return {
          ...entry,
          isRead: true,
        };
      }

      return entry;
    });

    setNotifications(updatedNotifications);
  };

  const filteredNotification = notifications.filter(
    (notification) => (notification.isRead = true)
  );

  const value = {
    notifications: filteredNotification,
    pushNotification,
    markNotificationAsRead,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
