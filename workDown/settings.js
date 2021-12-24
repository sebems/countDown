import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from './themes.js'

function Setting() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnText}>Themes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnText}>Language</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnText}>Contanct Me</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
