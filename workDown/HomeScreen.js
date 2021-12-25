import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './themes.js'
import {TaskPopUp} from './popups.js'
import SettingsScreen from './settings.js'

export default function HomeScreen({ navigation }){
  const [modalVisible, setModalVisible] = useState(false);

  return(
   <View style={styles.container}>
     <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.settingsMenu}
      />

     <Text style={styles.textStyle}>
       Get Stuff Done!
     </Text>
     <TouchableOpacity
        style={styles.addBtnStyle}
        onPress={() => setModalVisible(true)}
        >
       <Text style={styles.addBtnText}>+</Text>
     </TouchableOpacity>
     <StatusBar style="auto" />



     {/* Task creation popup */}
     <Modal visible={modalVisible} transparent={true} animationType={'slide'}>
       <View style={popStyle.modalContainer}>
        <View style={popStyle.box}>
           <Text>Task Name</Text>
           <Text>Due Date</Text>
         </View>
         <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={popStyle.modalToggle}>OK</Text>
         </TouchableOpacity>
       </View>
     </Modal>
   </View>
  );
}

const popStyle = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 25,
    top: '20%',
    height: '50%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  modalContainer: {
		padding: '10%',
		backgroundColor: '#000000aa',
		flex: 1,
	},
  modalToggle: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
