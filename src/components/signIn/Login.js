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
          <Text style={[styles.title, {fontWeight: '700'}]}>Na'vi</Text>
        </View>
      </View>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <MyTextInput
        placeholder="Email"
        onChangeText={e => setEmail(e)}
        value={email}
        title="Email"
      />
      <MyTextInput
        placeholder="Password"
        autoCapitalize="none"
        onChangeText={p => setPassword(p)}
        value={password}
        title="Password"
      />
      <MyButton lable="Login" onPress={handleLogin} size="large" />
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#552619',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: '#FFB067',
  },
});
