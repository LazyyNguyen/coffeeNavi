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
import Icon from 'react-native-vector-icons/Feather';
import firestore, {firebase} from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
// import { Query } from '@tanstack/react-query';

const Item = ({type}) => {
  const [diff, setDiff] = useState(null);
  const [amount, setAmount] = useState(null);

  let data;
  switch (type) {
    case 'Income':
      data = {
        title: 'Income',
        query: 'Orders',
      };
      break;
    case 'Outcome':
      data = {
        title: 'Outcome',
        query: 'Outcome',
      };
      break;
    default:
      break;
  }
  useEffect(() => {
    const fetchData = async () => {
      // const today = new Date();
      // const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
      // const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
      // const lastMonthQuery = firestore()
      //   .collection(data.query)
      //   .where('timestamp', '<=', today)
      //   .where('timestamp', '>', lastMonth);
      // // // )
      // // // ;
      // const prevMonthQuery = firestore()
      //   .collection(data.query)
      //   .where('timestamp', '<=', today)
      //   .where('timestamp', '>', lastMonth)
      //   .get();

      // // const prevMonthData = await firestore().namedQuery(prevMonthQuery);
      // // // setDiff(
      // //   ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
      // //     100
      // // );

      const collection = firestore().collection(data.query);
      return collection.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
          list.push(doc.data());
        });
        const total = list.reduce((prev, curr) => prev + curr.total, 0);
        setAmount(total.toLocaleString());
      });
    };
    fetchData();
  }, []);
  return (
    <View style={styles.itemThuchi}>
      <Text style={styles.titleTc}>{data.title}</Text>
      <Text style={styles.total}>VND</Text>
      <Text style={styles.total2}>{amount}</Text>
      <View style={styles.tg}>
        <Icon name="chevron-up" color="black" />
        <Text style={styles.pt}>50%</Text>
      </View>
    </View>
  );
};

const FlatListPercent = () => {
  return (
    <View style={styles.thuchi}>
      <Item type="Income" />
      <Item type="Outcome" />
    </View>
  );
};

export default FlatListPercent;

const styles = StyleSheet.create({
  thuchi: {
    width: '100%',
    height: 90,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor:
  },
  itemThuchi: {
    width: '47%',
    height: '100%',
    backgroundColor: '#CCFF00',
    display: 'flex',
    justifyContent: 'space-between',
    opacity: 0.9,
    borderRadius: 15,
    padding: 10,
  },
  titleTc: {
    fontFamily: 'PPMonumentExtended-Regular',
    color: '#333333',
    fontSize: 13,
  },
  total: {
    fontFamily: 'PPMonumentExtended-Black',
    color: '#333333',
    fontSize: 20,
  },
  total2: {
    fontFamily: 'PPMonumentExtended-Black',
    color: '#333333',
    fontSize: 15,
  },
  tg: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    top: 10,
  },
  pt: {
    fontFamily: 'PPMonumentExtended-Black',
    color: '#333333',
    fontSize: 11,
  },
});
