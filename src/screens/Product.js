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
        <View>
          <Text style={styles.colorText2}>Na'vi</Text>
          <Text>25 product found</Text>
        </View>
        <View style={styles.textHeader}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            placeholderTextColor="#3333"
          />
          <View>
            <TouchableOpacity
              style={styles.buttonAdd}
              onPress={() => navigation.navigate('addNew', {item})}>
              <Text
                style={{
                  // fontWeight: 'bold',
                  color: '#333333',
                  fontFamily: 'PPMonumentExtended-Black',
                }}>
                Add
              </Text>
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
          <Text style={styles.priceItems}>
            {item.price.toLocaleString(undefined, {minimumFractionDigits: 2})}₫
          </Text>
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
          // stickyHeaderIndices={[0]}
          stickyHeaderIndices={[0]}
          // invertStickyHeaders
          // StickyHeaderComponent={headerproduct}
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
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Black',
    fontSize: 13,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    // margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    color: '#333333',
    width: '70%',
    // marginLeft: '5%',
  },
  header: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#ffffff',

    // marginLeft: '5%',
  },
  title: {
    fontSize: 28,
    fontFamily: 'PPMonumentExtended-Black',
  },
  textHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: ''
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#CCFF00',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 90,
    color: '#333333',
    // width: ,
    // height: 50,
    // marginTop: 7,
  },
  priceItems: {
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Regular',
    fontSize: 10,
  },
  colorText: {
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Regular',
    fontSize: 10,
  },
  colorText2: {
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Black',
    fontSize: 30,
  },
});
