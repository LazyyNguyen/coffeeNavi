import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IconFeature from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import useFirestoreCollection from '../hooks/useFirestoreCollection';

import MyButton from '../components/MyButton';
export const handleLogout = () => {
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
            <Text
              style={{
                textAlign: 'center',
                paddingTop: 40,
                fontSize: 18,
                fontWeight: '500',
              }}
              onPress={() => {
                handleLogout();
              }}>
              Log out
            </Text>
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text style={{fontWeight: '700', fontSize: 18, marginBottom: 20}}>
              Contact
            </Text>
            <View key={item.id}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text style={{flex: 1}}>Name</Text>
                <Text>{item.name}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text style={{flex: 1}}>Age</Text>
                <Text>{item.age}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text style={{flex: 1}}>Birthday</Text>
                <Text>{item.dob}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text style={{flex: 1}}>Position</Text>
                <Text>Sale</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text style={{flex: 1}}>Phone number</Text>
                <Text>{item.phoneNumber}</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 12,
                }}>
                <Text style={{flex: 1}}>Email</Text>
                <Text>{item.email}</Text>
              </View>
            </View>

            <Text style={{fontWeight: '700', fontSize: 18, marginBottom: 20}}>
              Settings
            </Text>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 12,
              }}>
              <Icon name="language" size={20} />
              <Text>Language</Text>
              <IconFeature name="chevron-right" size={20} />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginBottom: 12,
              }}>
              <IconFeature name="moon" size={20} />
              <Text>Darkmoon</Text>
              <IconFeature name="chevron-right" size={20} />
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
  },
  part1Profile: {
    height: 100,
    backgroundColor: '#552619',
  },
  part2Profile: {
    position: 'relative',
  },
});
