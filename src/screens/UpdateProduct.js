import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyButton from '../components/MyButton';
import MyTextInput from '../components/MyTextInput';

const UpdateProduct = ({navigation, route}) => {
  const {item} = route.params || {};
  const [textName, onChangeNameText] = useState(item.name);
  const [textDescription, onChangeDescriptionText] = useState(item.description);
  const [textPrice, onChangePriceText] = useState(item.price);
  const [isImage, onChangeImage] = useState(item.img);
  const [textCategories, onChangeCategoriesText] = useState(item.category);

  async function updateItem() {
    await firestore()
      .collection('Products')
      .doc(item.id)
      .update({
        name: textName,
        description: textDescription,
        img: isImage,
        category: textCategories,
        price: textPrice,
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
      textPrice.length == 0
    ) {
      alert('The fields are required');
      return;
    }
    updateItem();
  }

  // --------------choose image--------------------------
  function choosePic() {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      const imageName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const bucketFile = `images/${imageName}`;
      const pathToFile = image.path;
      console.log('link ở đây nèeeee', pathToFile);
      let reference = storage().ref(bucketFile);
      let task = reference.putFile(pathToFile);
      task
        .then(() => {
          console.log('Image uploaded to the bucket!');
          onChangeImage(pathToFile);
        })
        .catch(e => console.log('uploading image error => ', e));
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerAdd}>
        <Icon name="arrow-back-ios" size={30} onPress={navigation.goBack} />
        <Text style={styles.titleAdd}>Update Product</Text>
      </View>
      <TouchableOpacity>
        <Image
          source={{
            uri: `${isImage}`,
          }}
          value={isImage}
          style={styles.imageAdd}
        />
        <MyButton
          onPress={() => {
            choosePic();
          }}
          lable="image"
        />
      </TouchableOpacity>
      <MyTextInput onChangeText={onChangeNameText} value={textName} />
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
  imageAdd: {
    width: 100,
    height: 100,
  },
});

export default UpdateProduct;
