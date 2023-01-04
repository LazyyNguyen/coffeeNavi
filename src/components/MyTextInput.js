import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Width} from '../assets/ScreenDimensions';

const TYPES = ['base', 'rounder'];

const MyTextInput = ({placeholder, type, onPress, title}) => {
  const inputType = TYPES.includes(type) ? type : 'base';
  const inputStyle = {
    height: 50,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#7C7A7A',
    borderRadius: inputType === 'base' ? 10 : 90,
  };
  return (
    <View style={styles.component}>
      <View style={styles.lable}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TextInput
        placeholderTextColor="#7C7A7A"
        placeholder={placeholder}
        style={inputStyle}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  component: {
    width: Width - 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  lable: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  title: {
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Regular',
    fontSize: 15,
  },
  input: {},
});
