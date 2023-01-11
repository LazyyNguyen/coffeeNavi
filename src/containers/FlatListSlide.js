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


const FlatListSlide = () => {
  // const [data, setData] = useState(Data);
  return (
    <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop>
      <SlideItem type="sell" />
      <SlideItem type="user" />
      <SlideItem type="product" />
      <SlideItem type="order" />
    </SwiperFlatList>
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
