import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNotification } from "../contexts/NotificationsContext";

export default function Notification() {
  const { notifications, pushNotification, markNotificationAsRead } =
    useNotification();
  console.log(notifications);
  return (
    <View>
      {notifications.map((notification) => (
        <View>
          <Text>
            {notification.message}
            {notification.isRead ? " read" : " not read"}
          </Text>
          <View>
            <Text>{new Date(notification.date).toLocaleDateString()}</Text>
            <Pressable
              style={{
                width: 100,
                height: 40,
                backgroundColor: "blue",
              }}
              onPress={() => {
                markNotificationAsRead(notification.id);
              }}
            >
              <Text>Mark as Read</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
}
