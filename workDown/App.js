import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { NavgationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './themes.js'
import HomeScreen from './HomeScreen.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <HomeScreen />
  );
};

// <NavgationContainer>
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{ title: 'Welcome'}}
//     />
//   </Stack.Navigator>
// </NavgationContainer>
