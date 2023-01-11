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
import Avt from '../components/avt';

import {Width, Height} from '../assets/ScreenDimensions';

const avt =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_orYH8FKWYS5w45tZdya1Q32e6W0s0ug3g&usqp=CAU';
import TopItem from '../components/TopItem';
import FlatListSlide from '../containers/FlatListSlide';
import FLatListTopItem from '../containers/FLatListTopItem';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Na'vi</Text>
        <View style={styles.avt}>
          <Avt avt={avt} />
        </View>
      </View>
      <View style={styles.containerFlat}>
        <FlatListSlide />
      </View>
      <View style={styles.trending}>
        <Text style={styles.title}>Trending Order</Text>
        <View style={styles.listTrending}>
          <FLatListTopItem />
        </View>
      </View>
      <View style={styles.thuchi}>
        <View style={styles.itemThuchi}>
          <Text style={styles.titleTc}>Income</Text>
          <Text style={styles.total}>VND 2001500</Text>
        </View>
        <View style={styles.itemThuchi}>
          <Text style={styles.titleTc}>Outcome</Text>
          <Text style={styles.total}>VND 55500</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: Height,
    // height: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: Width - 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
  },
  logo: {
    fontFamily: 'PPMonumentExtended-Black',
    fontSize: 30,
    color: '#333333',
  },
  containerFlat: {
    width: Width - 40,
  },

  avt: {
    width: 55,
    height: 55,
  },
  title: {
    textAlign: 'left',
    fontFamily: 'PPMonumentExtended-Regular',
    color: '#333333',
    fontSize: 15,
  },
  listTrending: {
    paddingVertical: 30,
    height: 320,
  },
  trending: {
    // paddingVertical: 10,
  },
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
    opacity: 0.7,
    borderRadius: 15,
    padding: 10,
  },
  titleTc: {
    fontFamily: 'PPMonumentExtended-Regular',
    color: '#000000',
    fontSize: 15,
  },
  total: {
    fontFamily: 'PPMonumentExtended-Black',
    color: '#000000',
  },
});
