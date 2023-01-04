import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import MyButton from '../components/MyButton';

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
        <View style={styles.textHeader}>
          <View>
            <Text style={styles.title}>Na'vi</Text>
            <Text>25 product found</Text>
          </View>
          <View>
            {/* <TouchableOpacity style={styles.buttonAdd}>
              <Text>Press Here</Text>
            </TouchableOpacity> */}
            <MyButton type="base" size="small" lable="Add" />
          </View>
        </View>
      </View>
    );
  };

  // ----------------------- List product ----------------------
  const Item = ({image, title, description, price}) => {
    return (
      <View style={styles.containerItem}>
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
        style={styles.container}
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
    margin: 10,
  },
  containerItem: {
    margin: 'auto',
    fontFamily: 'TimenewRomant',
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '40%',
    marginTop: 10,
  },
  imageItem: {
    width: '90%',
    height: 120,
    borderRadius: 5,
    padding: '5%',
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
    width: '90%',
    marginLeft: '5%',
  },
  header: {
    // margin: 0,
    padding: 0,
    width: '90%',
    marginLeft: '5%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  textHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
});
