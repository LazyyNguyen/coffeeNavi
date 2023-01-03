import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const Product = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Naa Nii',
      description: 'Followed by 15k',
      price: '47',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
    },
    {
      id: 2,
      title: 'Naa Nii',
      description: 'Followed by 15k',
      price: '47',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
    },
    {
      id: 2,
      title: 'Naa Nii',
      description: 'Followed by 15k',
      price: '47',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
    },
    {
      id: 2,
      title: 'Naa Nii',
      description: 'Followed by 15k',
      price: '47',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
    },
  ]);
  // ------------------------ Search function ----------------------
  const [search, setSearch] = useState('');
  const searchFilterFunction = () => {
    console.log('Search');
  };

  //--------------- Header ----------------------
  const headerproduct = () => {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={searchFilterFunction()}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
      </View>
    );
  };

  // ----------------------- List product ----------------------
  const Item = ({image, title, description, price}) => {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: `${image}`,
          }}
          style={styles.imageItem}
        />
        <View style={styles.bodyItem}>
          <Text style={styles.titleItem}>{title}</Text>
          <Text styles={styles.descriptionItem}>{description}</Text>
          <Text style={styles.priceItems}>${price}</Text>
        </View>
      </View>
    );
  };

  const renderItem = ({item}) => (
    <Item
      titile={item.title}
      image={item.image}
      description={item.description}
      price={item.price}
    />
  );

  return (
    <View>
      <FlatList
        data={data}
        ListHeaderComponent={headerproduct}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
    padding: 0,
    fontFamily: 'TimenewRomant',
    fontSize: 18,
    width: 120,
  },
  imageItem: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  bodyItem: {
    marginTop: 5,
  },
  titleItem: {
    // fontWeight: 600,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: '80%',
  },
  header: {
    margin: 0,
    padding: 0,
  },
});
