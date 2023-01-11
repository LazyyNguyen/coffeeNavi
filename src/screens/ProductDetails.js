import firestore from '@react-native-firebase/firestore';
import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../components/MyButton';
// import db from '../firebase/firebase.config';

const Details = ({navigation, route}) => {
  const {item} = route.params || {};
  // ------------------- Delete Item--------------------
  const showConfirmDialog = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to Delete this User? This action cannot be undone!',
      [
        {
          text: 'Yes',
          onPress: () => {
            deleteItem();
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };

  async function deleteItem() {
    await firestore()
      .collection('Products')
      .doc(item.id)
      .delete()
      .then(() => {
        navigation.navigate('Products');
        alert('Deleted Item Successfully!');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  return (
    <SafeAreaView
      style={{
        marginHorizontal: 15,
        marginVertical: 15,
      }}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 25, fontWeight: '700'}}>{item.name}</Text>
      </View>
      <View>
        <View style={styles.infoItem}>
          <Text style={{fontWeight: '700'}}>
            Price:{' '}
            {item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}₫
          </Text>
          <Text style={{fontWeight: '700'}}>Categories: {item.category}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image
            source={{
              uri: `${item.img}`,
            }}
            style={styles.imageItemDetail}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.details}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </ScrollView>
        <View>
          <MyButton
            onPress={() => navigation.navigate('productUpdate', {item})}
            lable="Update"></MyButton>
        </View>
        <TouchableOpacity style={{marginTop: 10, marginBottom: 10}}>
          <MyButton
            lable="Delete"
            type="secondary"
            onPress={() => {
              showConfirmDialog();
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Details;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: 'while',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: 'black',
  },
  infoItem: {
    marginTop: 20,
  },
  imageItemDetail: {
    height: 220,
    width: 220,
    borderRadius: 20,
  },
});
