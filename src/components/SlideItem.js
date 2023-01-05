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
import React from 'react';
import {Width, Height} from '../assets/ScreenDimensions';


const SlideItem = ({data}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/imgs/image3.png')} />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>
          {data.title === 'Sells'
            ? 'VND'
            : data.title === 'Order'
            ? 'Order'
            : data.title === 'Product'
            ? 'Product'
            : 'User'}
        </Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>
      <Text style={styles.title}>{data.title}</Text>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width: Width - 40,
    height: 170,
    backgroundColor: '#CCFF00',
    borderRadius: 15,
    marginVertical: 20,
    position: 'relative',
    marginRight: 20,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  totalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  total: {
    width: '90%',
    textAlign: 'right',
    fontFamily: 'PPMonumentExtended-Black',
    fontSize: 32,
    color: '#ffffff',
  },
  title: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 15,
    fontFamily: 'PPMonumentExtended-Black',
    color: '#333333',
  },
});
