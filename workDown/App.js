import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from './themes.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Get Stuff Done!
      </Text>
      <TouchableOpacity style={styles.addBtnStyle}>
        <Text style={styles.addBtnText}>+</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
