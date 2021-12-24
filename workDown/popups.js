import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import { styles } from './themes.js'

export default function TaskPopUp() {
  return (
    <View>
      <Modal>
        <View>
          <Text>Hello</Text>
        </View>
      </Modal>
    </View>
  );
}
