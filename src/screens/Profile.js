import firestore from '@react-native-firebase/firestore';
import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import IconFeature from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import useFirestoreCollection from '../hooks/useFirestoreCollection';

import MyButton from '../components/MyButton';
function User() {
  const collection = firestore().collection('profile');
  const pageSize = 10;
  const page = 10;
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
    <FlatList
      data={data}
      renderItem={({item}) => <Text>{item.name}</Text>}
      keyExtractor={item => item.id}
      onRefresh={refresh}
      refreshing={loading}
    />
  );
}
const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.part2Profile}>
        <Image
          source={{
            uri: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/300758845_1112426026019971_4238245341289244832_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=B89UALR8s7EAX_mmelO&_nc_ht=scontent.fdad1-3.fna&oh=00_AfCZDZf7vAgkbCjCZ3gOg-Qe0_ISypKOYPMFjB6R-TnSBg&oe=63BA4603',
          }}
          style={{
            height: 85,
            width: 85,
            borderRadius: 50,
            alignSelf: 'center',
            // position: 'absolute',
            top: -35,
            borderWidth: 4,
            borderColor: 'white',
          }}
        />
        <Text style={{textAlign: 'center', fontWeight: '700'}}>
          LazyyNguyen
        </Text>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontWeight: '700', fontSize: 18, marginBottom: 20}}>
            Contact
          </Text>
          <View
            style={{display: 'flex', flexDirection: 'row', marginBottom: 12}}>
            <Text style={{flex: 1}}>Name</Text>
            <Text>Nguyễn Thị Khánh Linh</Text>
          </View>
          <View
            style={{display: 'flex', flexDirection: 'row', marginBottom: 12}}>
            <Text style={{flex: 1}}>Age</Text>
            <Text>20</Text>
          </View>
          <View
            style={{display: 'flex', flexDirection: 'row', marginBottom: 12}}>
            <Text style={{flex: 1}}>Birthday</Text>
            <Text>20/11/2002</Text>
          </View>
          <View
            style={{display: 'flex', flexDirection: 'row', marginBottom: 12}}>
            <Text style={{flex: 1}}>Position</Text>
            <Text>Sale</Text>
          </View>
          <View
            style={{display: 'flex', flexDirection: 'row', marginBottom: 12}}>
            <Text style={{flex: 1}}>Phone number</Text>
            <Text>+8485 430 1907</Text>
          </View>
          <View
            style={{display: 'flex', flexDirection: 'row', marginBottom: 12}}>
            <Text style={{flex: 1}}>Email</Text>
            <Text>linh.nguyenthikhanh02@gmail.com</Text>
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
          lable="Edit"
          size="large"
          extraStyle={{alignSelf: 'center', marginTop: 20}}
        />
        <MyButton
          lable="Change Password"
          size="large"
          extraStyle={{alignSelf: 'center', marginTop: 20}}
        />
      </View>
      <User />
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
