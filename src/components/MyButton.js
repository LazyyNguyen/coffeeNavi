import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../assets/themes/Colors';
import {Width, Height} from '../assets/ScreenDimensions';
const TYPES = ['base', 'secondary'];
const SIZES = ['small', 'medium', 'large'];

const MyButton = ({onPress, type, size, lable}) => {
  const btnSize = SIZES.includes(size) ? size : 'small';
  const btnType = TYPES.includes(type) ? type : 'base';

  const btnStyle = {
    height: 55,
    width:
      btnSize === 'small' ? 'auto' : btnSize === 'medium' ? 210 : Width - 30,
    paddingHorizontal: 20,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: btnType === 'secondary' ? Colors.secondary : Colors.base,
  };
  return (
    <TouchableOpacity style={btnStyle} onPress={onPress}>
      <Text style={styles.lable}>{lable}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {},
  lable: {
    fontFamily: 'PPMonumentExtended-Black',
    color: '#ffffff',
    fontSize: 16,
  },
});
