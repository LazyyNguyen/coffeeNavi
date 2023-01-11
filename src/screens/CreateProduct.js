import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';

const CreateProduct = ({navigation}) => {
  const [image, setImage] = useState('');
  const [textName, onChangeTitleText] = useState('');
  const [textDescription, onChangeDescriptionText] = useState('');
  const [textPrice, onChangePriceText] = useState('');
  const [textCategories, onChangeCategoriesText] = useState('');

  async function addItem() {
    await firestore()
      .collection('Products')
      .add({
        name: textName,
        description: textDescription,
        price: textPrice,
        img: image,
        category: textCategories,
      })
      .then(() => {
        navigation.navigate('Products');
        alert('Create Neww Item Successfully!');
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
    addItem();
  }

  // ---------------------upload image------------------------
  function choosePic() {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      const imageName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const bucketFile = `images/${imageName}`;
      const pathToFile = image.path;
      console.log('link', pathToFile);
      let reference = storage().ref(bucketFile);
      let task = reference.putFile(pathToFile);
      task
        .then(() => {
          alert('Image uploaded to the bucket!');
          setImage(pathToFile);
        })
        .catch(e => console.log('uploading image error => ', e));
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerAdd}>
        <Icon name="arrow-back-ios" size={30} onPress={navigation.goBack} />
        <Text style={styles.titleAdd}>Add New Product</Text>
      </View>
      <MyButton
        onPress={() => {
          choosePic();
        }}
        lable="image"
      />
      <MyTextInput
        onChangeText={onChangeTitleText}
        value={textName}
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

export default CreateProduct;
