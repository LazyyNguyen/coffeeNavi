import {doc, updateDoc} from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyTextInput from '../components/MyTextInput';

const UpdateProduct = ({navigation, route}) => {
  const {item} = route.params || {};

  const [textTitle, onChangeTitleText] = useState(route.params.item.name);
  const [textDescription, onChangeDescriptionText] = useState(
    route.params.item.name,
  );
  const [textPrice, onChangePriceText] = useState(route.params.item.name);
  const [textQuality, onChangeQualityText] = useState(route.params.item.name);
  const [textSize, onChangeSizeText] = useState(route.params.item.name);
  const [isImage, onChangeImage] = useState(route.params.item.name);
  const [textCategories, onChangeCategoriesText] = useState(
    route.params.item.name,
  );

  async function updateItem() {
    const ref = doc(item, 'users', route.params.item.id);
    await updateDoc(ref, {
      title: textTitle,
      description: textDescription,
      price: textPrice,
      quality: textQuality,
      size: textSize,
      image: isImage,
      categories: textCategories,
    })
      .then(() => {
        navigation.navigate('Product');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  function ButtonSave() {
    if (
      textTitle.length == 0 ||
      textDescription.length == 0 ||
      textQuality == 0 ||
      textSize.length == 0 ||
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
        <Text style={styles.titleAdd}>Add New Product</Text>
      </View>
      <MyTextInput
        onChangeText={onChangeTitleText}
        value={textTitle}
        placeholder="Enter title"
      />
      <MyTextInput
        onChangeText={onChangeDescriptionText}
        value={textDescription}
        placeholder="Enter Description"
      />
      <MyTextInput
        onChangeText={onChangePriceText}
        value={textPrice}
        placeholder="Enter Price"
      />
      <MyTextInput
        onChangeText={onChangeQualityText}
        value={textQuality}
        placeholder="Enter Quality"
      />
      <MyTextInput
        onChangeText={onChangeSizeText}
        value={textSize}
        placeholder="Enter size cup"
      />
      <MyTextInput
        onChangeText={onChangeCategoriesText}
        value={textCategories}
        placeholder="Enter categories"
      />
      <Pressable style={styles.buttonSave} onPress={() => ButtonSave()}>
        <Text style={styles.textButton}>SAVE USER</Text>
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
