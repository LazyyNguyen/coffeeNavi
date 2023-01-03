import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Avt from './src/components/avt';
import MyButton from './src/components/MyButton';

const App = () => {
  return (
    <View style={styles.backG}>
      <MyButton lable="Fucking" size="large" type="secondary" />
      <MyButton lable="Add" />
    </View>
  );
};

const styles = StyleSheet.create({
  backG: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontFamily: 'PPMonumentExtended-Black',
    color: 'white',
  },
  avt: {
    width: 100,
    height: 100,
    borderRadius: 90,
    backgroundColor: 'white',
  },
});
export default App;
