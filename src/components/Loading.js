import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
const Loading = ({navigation}) => {
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      navigation.navigate(user ? 'Main' : 'Login');
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
export default Loading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
