import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Avt from './src/components/avt';

const App = () => {
  return (
    <View style={styles.backG}>
      <Text style={styles.text}>Na'vi</Text>
      <View style={styles.avt}>
        <Avt />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backG: {
    backgroundColor: 'red',
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
