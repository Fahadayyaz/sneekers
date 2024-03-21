import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, NavigationContainer } from 'react-native';

export default function Payment({ navigation }) {
  const handlePaymentPress = () => {
    navigation.navigate('Notification', { message: "Order Replace successfuly" });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePaymentPress}>
        <Text style={styles.buttonText}>Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
