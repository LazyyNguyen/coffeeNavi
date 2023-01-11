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
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 15,
        }}>
        <View style={styles.header}>
          <View>
            <Icon
              name="arrow-back-ios"
              color="#333333"
              size={28}
              onPress={navigation.goBack}
            />
          </View>
          <Text
            onPress={navigation.goBack}
            style={{
              position: 'absolute',
              textAlign: 'center',
              // right: 0,
              width: '100%',
              color: '#333333',
              fontFamily: 'PPMonumentExtended-Black',
              fontSize: 25,
              // fontWeight: '700',
            }}>
            {item.name}
          </Text>
        </View>
        <View style={{marginVertical: 10}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: 280,
              marginVertical: 15,
            }}>
            <Image
              source={{
                uri: `${item.img}`,
              }}
              style={styles.imageItemDetail}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.colorText}>
              <Text style={styles.colorText2}>Price:</Text>{' '}
              {item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}
              ₫
            </Text>
            <Text style={styles.colorText}>
              <Text style={styles.colorText2}>Categories:</Text> {item.category}
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.details}>
              <Text style={styles.colorText}>{item.description}</Text>
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
      </View>
    </SafeAreaView>
  );
};
export default Details;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  details: {
    // paddingTop: 0,
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
    // marginTop: 20,
  },
  imageItemDetail: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  colorText: {
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Regular',
    fontSize: 13,
    paddingVertical: 5,
  },
  colorText2: {
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Black',
    fontSize: 13,
    // paddingVertical: ,
  },
});
