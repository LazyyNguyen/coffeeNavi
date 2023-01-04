import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
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
      <Text>Login</Text>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={e => setEmail(e)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        placeholder="Password"
        onChangeText={p => setPassword(p)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text>{email}</Text>
      <Text>{password}</Text>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
});
