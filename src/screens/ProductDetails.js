import {deleteDoc, doc} from '@react-native-firebase/firestore';
import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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
    const ref = doc({item}, route.params.item.id);
    await deleteDoc(ref)
      .then(() => {
        navigation.navigate('Product');
        alert('Deleted Item Successfully!');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Navi</Text>
      </View>
      <View>
        <View style={styles.infoItem}>
          <Text>Quality: {item?.quality}</Text>
          <Text>Price: {item.price}</Text>
          <Text>Categories: {item.categories}</Text>
          <Text>Size: {item.size}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image
            source={{
              uri: `${item.image}`,
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
            onPress={() => navigation.navigate('Update', {item})}
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
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
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
    marginLeft: 40,
  },
  imageItemDetail: {
    height: 220,
    width: 220,
    borderRadius: 20,
  },
});
