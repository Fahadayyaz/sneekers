import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import { Switch } from 'react-native-elements';
import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from '../config/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = () => {
  const Theme = useContext(ThemeContext);
  const [mode, setMode] = useState(false);

  useEffect(() => {
    loadThemeMode();
  }, []);

  const loadThemeMode = async () => {
    try {
      const storedMode = await AsyncStorage.getItem('themeMode');
      if (storedMode !== null) {
        setMode(storedMode === 'dark');
      }
    } catch (error) {
      console.error('Error loading theme mode:', error);
    }
  };

  const saveThemeMode = async (value) => {
    try {
      await AsyncStorage.setItem('themeMode', value ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme mode:', error);
    }
  };

  const toggleThemeMode = (value) => {
    setMode(value);
    saveThemeMode(value);
    EventRegister.emit('changeTheme', value);
  };

  return (
    <View style={[styles.container, { backgroundColor: Theme.background }]}>
      <Text style={{ color: Theme.color }}>Theme Setting</Text>
      <Switch
        value={mode}
        color="white"
        thumbColor="white"
        onValueChange={(value) => toggleThemeMode(value)}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
