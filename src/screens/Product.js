import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Product = ({navigation}) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Naa Nii',
      description:
        'Cà phê là một mặt hàng xuất khẩu lớn: đứng đầu trong số các mặt hàng xuất khẩu nông nghiệp tại nhiều quốc gia và là một trong những mặt hàng xuất khẩu nông nghiệp hợp pháp lớn nhất trên thế giới.[4][9] Đây cũng là loại hàng hóa có giá trị xuất khẩu nhất của các quốc gia đang phát triển. Cũng nhờ vậy, thị trường Read more',
      price: '47',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
      quality: 10,
      categories: 'food',
      size: 'L',
    },
    {
      id: 2,
      title: 'Naa Nii',
      description:
        'Cà phê là một mặt hàng xuất khẩu lớn: đứng đầu trong số các mặt hàng xuất khẩu nông nghiệp tại nhiều quốc gia và là một trong những mặt hàng xuất khẩu nông nghiệp hợp pháp lớn nhất trên thế giới.[4][9] Đây cũng là loại hàng hóa có giá trị xuất khẩu nhất của các quốc gia đang phát triển. Cũng nhờ vậy, thị trường Read more',
      price: '47',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
      quality: 11,
      categories: 'food',
      size: 'L',
    },
    {
      id: 3,
      title: 'Naa Nii',
      description:
        'Cà phê là một mặt hàng xuất khẩu lớn: đứng đầu trong số các mặt hàng xuất khẩu nông nghiệp tại nhiều quốc gia và là một trong những mặt hàng xuất khẩu nông nghiệp hợp pháp lớn nhất trên thế giới.[4][9] Đây cũng là loại hàng hóa có giá trị xuất khẩu nhất của các quốc gia đang phát triển. Cũng nhờ vậy, thị trường Read more',
      price: '47',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
      quality: 12,
      categories: 'food',
      size: 'L',
    },
    {
      id: 4,
      title: 'Naa Nii',
      description:
        'Cà phê là một mặt hàng xuất khẩu lớn: đứng đầu trong số các mặt hàng xuất khẩu nông nghiệp tại nhiều quốc gia và là một trong những mặt hàng xuất khẩu nông nghiệp hợp pháp lớn nhất trên thế giới.[4][9] Đây cũng là loại hàng hóa có giá trị xuất khẩu nhất của các quốc gia đang phát triển. Cũng nhờ vậy, thị trường Read more',
      price: '47',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6wMUznmg4JxQZECDFV5z4e60ghw62ynKyBQ&usqp=CAU',
      quality: 14,
      categories: 'food',
      size: 'L',
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
            <TouchableOpacity style={styles.buttonAdd}>
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
        onPress={() => navigation.navigate('Details', {item})}>
        <Image
          source={{
            uri: `${item.image}`,
          }}
          style={styles.imageItem}
        />
        <View style={styles.bodyItem}>
          <Text style={styles.titleItem}>{item.title}</Text>
          <Text styles={styles.descriptionItem}>{item.quality}</Text>
          <Text style={styles.priceItems}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      style={styles.container}
      data={data}
      ListHeaderComponent={headerproduct}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    // margin: 10,
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
    // marginLeft: 10,
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
    // margin: 0,
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
  // descriptionItem: {

  // },
});
