import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyTextInput from '../components/MyTextInput';

const UpdateProduct = ({navigation, route}) => {
  const {item} = route.params || {};
  const [textName, onChangeNameText] = useState(item.name);
  const [textDescription, onChangeDescriptionText] = useState(item.description);
  const [textPrice, onChangePriceText] = useState(item.price);
  // const [isImage, onChangeImage] = useState(route.params.item.name);
  const [textCategories, onChangeCategoriesText] = useState(item.category);

  async function updateItem() {
    await firestore()
      .collection('Products')
      .doc(item.id)
      .update({
        name: textName,
        description: textDescription,
        price: textPrice,
        // image: isImage,
        category: textCategories,
      })
      .then(() => {
        navigation.navigate('Products');
        alert('Update Item Successfully!');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  function ButtonSave() {
    if (
      textName.length == 0 ||
      textDescription.length == 0 ||
      textCategories.length == 0 ||
      textPrice == 0
    ) {
      alert('The fields are required');
      return;
    }
    updateItem();
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerAdd}>
        <Icon name="arrow-back-ios" size={30} onPress={navigation.goBack} />
        <Text style={styles.titleAdd}>Update Product</Text>
      </View>
      <TextInput onChangeText={onChangeNameText} value={textName} />
      <MyTextInput
        onChangeText={onChangeDescriptionText}
        value={textDescription}
      />
      <MyTextInput onChangeText={onChangePriceText} value={textPrice} />
      <MyTextInput
        onChangeText={onChangeCategoriesText}
        value={textCategories}
      />
      <Pressable style={styles.buttonSave} onPress={() => ButtonSave()}>
        <Text style={styles.textButton}>SUBMIT</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  buttonSave: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#1ecfea',
  },
  textButton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  titleAdd: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
  },
  headerAdd: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default UpdateProduct;
