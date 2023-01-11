import firestore from '@react-native-firebase/firestore';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import useFirestoreCollection from '../hooks/useFirestoreCollection';

// -----------------get data from firebase-------------------
const collection = firestore().collection('Products');
const pageSize = 10;
const page = 1;

const Product = ({navigation}) => {
  const {
    data,
    loading,
    error,
    refresh,
    searchFilterFunction,
    search,
    filteredDataSource,
  } = useFirestoreCollection(collection, pageSize, page);

  //--------------- Header ----------------------
  console.log(filteredDataSource);
  const headerproduct = ({item}) => {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <View style={styles.textHeader}>
          <View>
            <Text style={styles.title}>Na'vi</Text>
            <Text>25 product found</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => navigation.navigate('addNew', {item})}>
              <Text style={{fontWeight: 'bold'}}>Add New</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  // ----------------------- List product ----------------------
  const Item = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.containerItem}
        onPress={() => navigation.navigate('Detail', {item})}>
        <Image
          source={{
            uri: `${item.img}`,
          }}
          style={styles.imageItem}
        />
        <View style={styles.bodyItem}>
          <Text style={styles.titleItem}>{item.name}</Text>
          <Text style={styles.priceItems}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // --------------- show data----------------------------

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <>
      {loading ? (
        <ActivityIndicator color="#00ff00" size="large" />
      ) : (
        <FlatList
          style={styles.container}
          data={filteredDataSource || data}
          ListHeaderComponent={headerproduct}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item.id}
          onRefresh={refresh}
          renderItem={({item}) => {
            return <Item item={item} />;
          }}
          refreshing={loading}
        />
      )}
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
  containerItem: {
    margin: 20,
    fontSize: 18,
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'thistle',
    borderRadius: 15,
    alignItems: 'center',
  },
  imageItem: {
    width: '90%',
    height: 120,
    borderRadius: 5,
    margin: 7,
  },
  bodyItem: {
    marginBottom: 5,
    alignItems: 'center',
  },
  titleItem: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: '90%',
    marginLeft: '5%',
  },
  header: {
    padding: 0,
    width: '90%',
    marginLeft: '5%',
  },
  title: {
    fontSize: 28,
    fontFamily: 'PPMonumentExtended-Black',
  },
  textHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#CCFF00',
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginTop: 7,
  },
  priceItems: {
    fontWeight: 'bold',
  },
});
