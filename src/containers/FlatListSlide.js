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
import React, {useState} from 'react';
import {Width, Height} from '../assets/ScreenDimensions';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const avt =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_orYH8FKWYS5w45tZdya1Q32e6W0s0ug3g&usqp=CAU';

import SlideItem from '../components/SlideItem';
const Data = [
  {title: 'Sells', total: 2550000},
  {title: 'Users', total: 350},
  {title: 'Order', total: 4500},
  {title: 'Product', total: 30},
];

const FlatListSlide = () => {
  const [data, setData] = useState(Data);
  return (
    <SwiperFlatList
      horizontal
      autoplay
      autoplayDelay={4}
      autoplayLoop
      index={2}
      // StickyHeaderComponent={Header}
      data={data}
      renderItem={({item}) => <SlideItem data={item} />}
    />
  );
};

export default FlatListSlide;

const styles = StyleSheet.create({
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
  avt: {
    width: 60,
    height: 60,
  },
});
