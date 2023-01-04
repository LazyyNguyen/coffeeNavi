import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const TopItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{width: '100%', height: '100%', borderRadius: 15}}
          source={{
            uri: 'https://product.hstatic.net/200000264775/product/ca_phe_ae27c2fffbc4489884c2efbef3d639bb_master.jpg',
          }}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.total}>75cups</Text>
        <Text style={styles.name}>Americano</Text>
      </View>
    </View>
  );
};

export default TopItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 15,
    borderWidth: 1,
  },
  info: {
    width: 270,
    height: 65,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#FAB2FC',
    position: 'relative',
  },
  total: {
    fontFamily: 'PPMonumentExtended-Black',
    fontSize: 20,
    color: '#292929',
    width: '100%',
    marginRight: 20,
    textAlign: 'right',
  },
  name: {
    position: 'absolute',
    color: '#292929',
    fontSize: 10,
    bottom: 10,
    left: 10,
    fontFamily: 'PPMonumentExtended-Regular',
  },
});
