import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  NavigationContainer,
} from "react-native";
import { useNotification } from "../contexts/NotificationsContext";

export default function Payment({ navigation }) {
  const { pushNotification } = useNotification();

  const handlePaymentPress = () => {
    pushNotification("sdfjkdlkd");
    navigation.navigate("Notification", {
      message: "Order Replace successfuly",
    });
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: "green",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
