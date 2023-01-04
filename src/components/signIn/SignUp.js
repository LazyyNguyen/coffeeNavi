import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSignUp = async () => {
    console.log('requesting');
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('result', result);
    } catch (error) {
      console.log('error', {...error});
    } finally {
      console.log('finnaly');
    }
  };
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={e => setEmail(e)}
        value={email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        autoCapitalize="none"
        style={styles.textInput}
        onChangeText={p => setPassword(p)}
        value={password}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};
export default SignUp;
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
