<<<<<<< HEAD
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'react-native-firebase';
export default class Main extends React.Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser});
=======
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {StyleSheet, Platform, Image, Text, View, Button} from 'react-native';
const Main = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
>>>>>>> 0869a364333ff4f8e7efd16255b7edefb4d1ec66
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <View style={styles.container}>
      <Text>Hi {user && user.email}!</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};
export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
