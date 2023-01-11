import React, {useEffect} from 'react';
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
import firestore from '@react-native-firebase/firestore';
import useFirestoreCollection from '../hooks/useFirestoreCollection';
const collection = firestore().collection('profile');
const pageSize = 10;
const page = 10;
const Avt = () => {
  const {data, loading, error, refresh} = useFirestoreCollection(
    collection,
    pageSize,
    page,
  );

  useEffect(() => {
    refresh();
  }, []);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }
  return (
    <>
      {data.map(item => (
        <Image
          key={item.id}
          style={styles.img}
          source={{
            uri: item.image,
          }}
        />
      ))}
    </>
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
    borderWidth: 0.5,
    borderColor: '#333333',
  },
});
