import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MyButton from '../MyButton';
import MyTextInput from '../MyTextInput';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = async () => {
    console.log('requesting');
    try {
      const result = await auth().signInWithEmailAndPassword(email, password);
      console.log('result', result);
    } catch (error) {
      console.log('error', {...error});
    } finally {
      console.log('finnaly');
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          textAlign: 'left',
          fontSize: 30,
          width: '95%',
          marginBottom: 15,
        }}>
        <Text style={styles.title}>Hey!</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Welcome to </Text>
          <Text
            style={[styles.title, {fontFamily: 'PPMonumentExtended-Black'}]}>
            Na'vi
          </Text>
        </View>
      </View>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <View style={{width: '90%'}}>
        <MyTextInput
          placeholder="Email"
          onChangeText={e => setEmail(e)}
          value={email}
          title="Email"
        />
        <MyTextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={p => setPassword(p)}
          value={password}
          title="Password"
        />
        <MyButton lable="Login" onPress={handleLogin} size="large" />
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Regular',
  },
});
