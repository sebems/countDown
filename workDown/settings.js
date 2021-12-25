import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { styles } from './themes.js'

export default function SettingsScreen() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.settingsButtons}>
        <Text style={styles.settingsText}>Themes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsButtons}>
        <Text style={styles.settingsText}>Language</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsButtons}>
        <Text style={styles.settingsText}>Contact Me</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
