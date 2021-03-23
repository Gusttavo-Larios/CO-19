import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native'

// import { StyleSheet, Text, View } from 'react-native';

//routes
import Route from './src/routes/routes'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar hidden />
      <Route />
    </NavigationContainer>
  );
}
