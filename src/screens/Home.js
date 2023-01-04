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
import Avt from '../components/avt';
import SlideItem from '../components/SlideItem';
import TopItem from '../components/TopItem';
const Data = [
  {title: 'Sells', total: 2550000},
  {title: 'Users', total: 350},
];
const avt =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_orYH8FKWYS5w45tZdya1Q32e6W0s0ug3g&usqp=CAU';

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
        <FlatList
          horizontal
          data={Data}
          renderItem={({item}) => <SlideItem data={item} />}
        />
      </View>
      <View style={styles.trending}>
        <Text style={styles.title}>Trending Order</Text>
        <View style={styles.listTrending}>
          <TopItem />
          <TopItem />
          <TopItem />
          <TopItem />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: Width - 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'PPMonumentExtended-Black',
    fontSize: 30,
    color: '#333333',
  },
  containerFlat: {
    width: Width - 30,
  },

  avt: {
    width: 60,
    height: 60,
  },
  title: {
    textAlign: 'left',
    fontFamily: 'PPMonumentExtended-Regular',
    color: '#333333',
    fontSize: 15,
  },
  listTrending: {
    paddingVertical: 20,
  },
  trending: {
    paddingVertical: 20,
  },
});
