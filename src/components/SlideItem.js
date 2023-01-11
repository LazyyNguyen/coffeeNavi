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
import React, {useEffect, useState} from 'react';
import {Width, Height} from '../assets/ScreenDimensions';
import firestore from '@react-native-firebase/firestore';

const SlideItem = ({type}) => {
  const [amount, setAmount] = useState(null);
  let data;
  switch (type) {
    case 'user':
      data = {
        title: 'User',
        isMoney: false,
        query: 'Users',
      };
      break;
    case 'order':
      data = {
        title: 'Order',
        isMoney: false,
        query: 'Orders',
      };
      break;
    case 'sell':
      data = {
        title: 'Sell',
        isMoney: true,
        query: 'Orders',
      };
      break;
    case 'product':
      data = {
        title: 'Product',
        query: 'Products',
      };
      break;
    default:
      break;
  }

  useEffect(() => {
    const fetchData = () => {
      const collection = firestore().collection(data.query);
      return collection.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
          list.push(doc.data());
        });
        if (data.title === 'Sell') {
          const total = list.reduce((prev, curr) => prev + curr.total, 0);
          setAmount(total.toLocaleString());
          return;
        }
        setAmount(list.length);
      });
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/imgs/image3.png')} />
      <View style={styles.totalContainer}>
        <Text style={styles.total}>
          {type === 'sell'
            ? 'VND'
            : type === 'order'
            ? 'Order'
            : type === 'product'
            ? 'Product'
            : 'User'}
        </Text>
        <Text style={styles.total}>{amount}</Text>
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
