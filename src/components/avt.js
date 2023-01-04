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

const Avt = ({avt}) => {
  return (
    <Image
      style={styles.img}
      source={{
        uri: `${avt}`,
      }}
    />
  );
};
export default Avt;
const styles = StyleSheet.create({
  container: {},
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 90,
  },
});
