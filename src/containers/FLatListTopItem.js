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
      setData(
        list
          .sort((prev, curr) => curr.quantityOrder - prev.quantityOrder)
          .filter(a => a.quantityOrder >= 20),
      );
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
