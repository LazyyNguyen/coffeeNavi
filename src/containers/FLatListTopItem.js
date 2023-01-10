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
import TopItem from '../components/TopItem';
import firestore from '@react-native-firebase/firestore';
const Data = [
  {
    quantity: 75,
    name: 'Americano',
    img: 'https://product.hstatic.net/200000264775/product/ca_phe_ae27c2fffbc4489884c2efbef3d639bb_master.jpg',
  },
  {
    quantity: 62,
    name: 'Coffee z',
    img: 'https://www.acouplecooks.com/wp-content/uploads/2021/08/Cafe-Au-Lait-001s.jpg',
  },
  {
    quantity: 60,
    name: 'Matha',
    img: 'http://thucphamplaza.com/wp-content/uploads/products_img/Matcha-Latte.jpg',
  },
  {
    quantity: 52,
    name: 'Matha',
    img: 'https://genk.mediacdn.vn/139269124445442048/2022/6/12/photo-1-1654953211070596211129-1654972389822-1654972389914936267375.jpg',
  },
  {
    quantity: 52,
    name: 'Matha',
    img: 'https://genk.mediacdn.vn/139269124445442048/2022/6/12/photo-1-1654953211070596211129-1654972389822-1654972389914936267375.jpg',
  },
  {
    quantity: 52,
    name: 'Matha',
    img: 'https://genk.mediacdn.vn/139269124445442048/2022/6/12/photo-1-1654953211070596211129-1654972389822-1654972389914936267375.jpg',
  },
  {
    quantity: 51,
    name: 'Matha',
    img: 'https://genk.mediacdn.vn/139269124445442048/2022/6/12/photo-1-1654953211070596211129-1654972389822-1654972389914936267375.jpg',
  },
];
const colors = ['#FAB2FC', '#BFBFBF', '#9DE2E2'];
const FLatListTopItem = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const collection = firestore().collection('Products');

  useEffect(() => {
    return collection.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        list.push(doc.data());
      });
      setData(list);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);
  return (
    <FlatList
      showsVerticalScrollIndicator
      data={data}
      renderItem={({item, index}) => (
        <TopItem data={item} color={colors[index % colors.length]} />
      )}
    />
  );
};

export default FLatListTopItem;

const styles = StyleSheet.create({});
