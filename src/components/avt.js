import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Avt = () => {
  return <Image style={styles.img} source={require('../assets/imgs/1.png')} />;
};
export default Avt;
const styles = StyleSheet.create({
  container: {},
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 90,
  },
});
