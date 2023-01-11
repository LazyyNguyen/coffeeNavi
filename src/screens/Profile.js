import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IconFeature from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import useFirestoreCollection from '../hooks/useFirestoreCollection';

import {TouchableOpacity} from 'react-native-gesture-handler';
import MyButton from '../components/MyButton';
const handleLogout = () => {
  auth()
    .signOut()
    .then(() => alert('Signed out!'));
};
const collection = firestore().collection('profile');
const pageSize = 10;
const page = 10;
const Profile = ({navigation}) => {
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
    <View style={styles.profile}>
      {data.map(item => (
        <View key={item.id}>
          <View style={styles.part1Profile}></View>
          <View style={styles.part2Profile}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                height: 85,
                width: 85,
                borderRadius: 50,
                alignSelf: 'center',
                position: 'absolute',
                top: -45,
                borderWidth: 4,
                borderColor: 'white',
              }}
            />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                // top: -25,
                // height: 125,
                marginTop: 10,
                // width: 65,
                padding: 5,
                // backgroundColor: '#FFFFFF50',
                // borderRadius: 100,
              }}>
              <Text
                // onPress={}
                onPress={() => {
                  handleLogout();
                }}
                style={{
                  // color: '#333333',
                  // fontWeight: '700',
                  width: '100%',
                  marginTop: 25,
                  textAlign: 'center',
                  // opacity: 1,
                  color: '#333333',
                  fontFamily: 'PPMonumentExtended-Regular',
                }}>
                Log out
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 20, marginVertical: 10}}>
            <Text
              style={{
                color: '#333333',
                // fontWeight: '700',
                fontFamily: 'PPMonumentExtended-Black',
                fontSize: 18,
                marginBottom: 20,
              }}>
              Contact
            </Text>
            <View key={item.id}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    fontFamily: 'PPMonumentExtended-Black',
                    fontSize: 10,
                    color: '#333333',
                    flex: 1,
                  }}>
                  Name:
                </Text>
                <Text style={styles.colorText}>{item.name}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    fontFamily: 'PPMonumentExtended-Black',
                    fontSize: 10,
                    color: '#333333',
                    flex: 1,
                  }}>
                  Age:
                </Text>
                <Text style={styles.colorText}>{item.age}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    fontFamily: 'PPMonumentExtended-Black',
                    fontSize: 10,
                    color: '#333333',
                    flex: 1,
                  }}>
                  Birthday:
                </Text>
                <Text style={styles.colorText}>{item.dob}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    fontFamily: 'PPMonumentExtended-Black',
                    fontSize: 10,
                    color: '#333333',
                    flex: 1,
                  }}>
                  Position:
                </Text>
                <Text style={styles.colorText}>Sale</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    fontFamily: 'PPMonumentExtended-Black',
                    fontSize: 10,
                    color: '#333333',
                    flex: 1,
                  }}>
                  Phone number:
                </Text>
                <Text style={styles.colorText}>{item.phoneNumber}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text
                  style={{
                    flex: 1,
                    fontFamily: 'PPMonumentExtended-Black',
                    fontSize: 10,
                    color: '#333333',
                  }}>
                  Email:
                </Text>
                <Text style={styles.colorText}>{item.email}</Text>
              </View>
            </View>

            <Text
              style={{
                color: '#333333',
                // fontWeight: '700',
                fontFamily: 'PPMonumentExtended-Black',
                fontSize: 18,
                marginBottom: 20,
                marginTop: 20,
              }}>
              Settings
            </Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 12,
              }}>
              <Icon name="language" size={20} color="#333333" />
              <Text style={styles.colorText}>Language</Text>
              <IconFeature name="chevron-right" size={20} color="#333333" />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 12,
              }}>
              <IconFeature name="moon" size={20} color="#333333" />
              <Text style={styles.colorText}>Darkmoon</Text>
              <IconFeature name="chevron-right" size={20} color="#333333" />
            </View>
          </View>
          <MyButton
            onPress={() => navigation.navigate('UpdateProfile', {item})}
            lable="Edit"
            size="large"
            extraStyle={{alignSelf: 'center', marginTop: 20}}
          />
          <MyButton
            onPress={() => navigation.navigate('ChangePassword', {item})}
            lable="Change Password"
            size="large"
            type="mainColor"
            extraStyle={{alignSelf: 'center', marginTop: 20}}
          />
        </View>
      ))}
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  profile: {
    height: '100%',
    marginVertical: 0,
    paddingVertical: 0,
    backgroundColor: '#ffffff',
  },
  part1Profile: {
    height: 100,
    backgroundColor: '#CCFF00',
  },
  part2Profile: {
    position: 'relative',
  },
  colorText: {
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Regular',
    fontSize: 10,
  },
});
