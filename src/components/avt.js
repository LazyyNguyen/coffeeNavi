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

const Avt = () => {
  return <Image style={styles.img} source={require('../assets/imgs/2.png')} />;
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
