import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Width} from '../assets/ScreenDimensions';
import {Colors} from '../assets/themes/Colors';
const TYPES = ['base', 'secondary', 'mainColor'];
const SIZES = ['small', 'medium', 'large'];

const MyButton = ({onPress, type, size, lable, extraStyle}) => {
  const btnSize = SIZES.includes(size) ? size : 'small';
  const btnType = TYPES.includes(type) ? type : 'mainColor';
  console.log(onPress);
  const btnStyle = {
    height: 55,
    width:
      btnSize === 'small' ? 'auto' : btnSize === 'medium' ? 210 : Width - 30,
    paddingHorizontal: 20,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      btnType === 'secondary'
        ? Colors.secondary
        : btnType === 'mainColor'
        ? Colors.mainColor
        : Colors.base,
  };
  return (
    <TouchableOpacity style={[btnStyle, extraStyle]} onPress={onPress}>
      <Text style={styles.lable}>{lable}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {},
  lable: {
    fontFamily: 'PPMonumentExtended-Black',
    color: '#333333',
    fontSize: 16,
  },
});
