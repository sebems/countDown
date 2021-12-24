import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Modal} from 'react-native';
import { NavgationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './themes.js'
import {TaskPopUp} from './popups.js'

export default function HomeScreen({ navigation }){
  const [modalVisible, setModalVisible] = useState(false);

 return(
   <View style={styles.container}>
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
     <View>
       <Modal visible={modalVisible}>
         <View>
           <Text>Hello</Text>
         </View>
       </Modal>
     </View>
   </View>
 );
}
