import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notification({ route }) {
  const { message } = route.params || { message: "No message available" };


  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  const dateTimeString = `${hours}:${minutes}, ${currentDate.toDateString()}, ${month}/${year},${day}`;

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Text>{dateTimeString}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
