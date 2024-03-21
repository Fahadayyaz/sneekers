import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/images/light.png')}
        />
        <Image
          style={styles.logo}
          source={require('../assets/images/light.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: '50%', // Adjust the position as per your design
    left: 0,
    right: 0,
    transform: [{ translateY: -112 }], // Half of the logo height to center it
  },
  logo: {
    height: 225,
    width: 90,
  },
});

export default Login;
