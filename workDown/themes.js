import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393E46',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#ffaec8',
  },

  // Add Button
  addBtnStyle: {
    backgroundColor: '#26292e',
    borderRadius: 100,
    width: '12%',
    height: '5.75%',
    alignItems: 'center',
    top: '10%',
  },
  addBtnText: {
    fontSize: 25,
    color: '#fff',
    padding: '15%',
  },

  // Settings Button

  settingsButtons: {
    backgroundColor: '#26292e',
    borderWidth: 3,
    width: '70%',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },

  settingsMenu: {
    backgroundColor: '#26292e',
    borderRadius: 100,
    width: '12%',
    height: '5.75%',
    alignItems: 'center',
    bottom: '35%',
    left: '35%',
  },

  settingsText: {
    fontSize: 25,
    color: '#fff',
  },

  // General Button Style
  btnStyle: {
    backgroundColor: '#26292e',
    borderRadius: 100,
    width: '12%',
    height: '5.75%',
    alignItems: 'center',
    top: '10%',
  },

  btnText: {
    fontSize: 25,
    color: '#fff',
    // padding: '15%',
  }

});
