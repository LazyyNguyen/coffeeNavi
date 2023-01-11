import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import MyButton from '../MyButton';
import MyTextInput from '../MyTextInput';
import {handleLogout} from '../../screens/Profile';

const ChangePassword = ({navigation, route}) => {
  const [email, setEmail] = useState();
  const sendMail = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('Check your email to reset password!');
        handleLogout();
        navigation.navigate('Login');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const {item} = route.params || {};
  return (
    <View style={styles.profile}>
      <View style={styles.part1Profile}></View>
      <View style={styles.part2Profile}>
        <Image
          source={{
            uri: `${item.image}`,
          }}
          style={{
            height: 85,
            width: 85,
            borderRadius: 50,
            alignSelf: 'center',
            top: -35,
            borderWidth: 4,
            borderColor: 'white',
          }}
        />
        <TouchableOpacity>
          <Text
            style={{textAlign: 'center', fontWeight: '700', color: 'white'}}>
            Lazyy Nguyen
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 15}}>
        <View key={item.id}>
          <View style={{marginBottom: 12, marginTop: 20}}>
            <MyTextInput
              onChangeText={setEmail}
              value={email}
              title="Email"
              type="rounder"
            />
          </View>
        </View>
        <MyButton
          onPress={() => sendMail()}
          lable="Send"
          size="large"
          extraStyle={{alignSelf: 'center', marginTop: 20}}
        />
        <MyButton
          onPress={() => navigation.navigate('Profile')}
          lable="Exit"
          size="large"
          extraStyle={{alignSelf: 'center', marginTop: 20}}
        />
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#552619',

    height: '100%',
    marginVertical: 0,
    paddingVertical: 0,
  },
  part1Profile: {
    height: 100,
  },
  part2Profile: {
    position: 'relative',
  },
});
