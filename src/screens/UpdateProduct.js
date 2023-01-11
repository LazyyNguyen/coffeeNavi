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
    }).then(async image => {
      const imageName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const bucketFile = `images/${imageName}`;
      const pathToFile = image.path;
      const url = storage().ref(bucketFile);
      await url
        .putFile(pathToFile)
        .then(async () => {
          const imgUrl = await url.getDownloadURL();
          alert('Image uploaded to the bucket!');
          console.log(' link 2: ', imgUrl);
          onChangeImage(imgUrl);
        })
        .catch(e => console.log('uploading image error => ', e));
    });
  }

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20, marginVertical: 15}}>
        <View style={styles.headerAdd}>
          <Icon
            color="#333333"
            name="arrow-back-ios"
            size={30}
            onPress={navigation.goBack}
          />
          <Text style={styles.colorText}>Update Product</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
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
            lable="Edit"
          />
        </TouchableOpacity>
        <MyTextInput onChangeText={onChangeNameText} value={textName} />
        <MyTextInput
          onChangeText={onChangeDescriptionText}
          value={textDescription}
        />
        <MyTextInput
          onChangeText={onChangePriceText}
          value={textPrice.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        />
        <MyTextInput
          onChangeText={onChangeCategoriesText}
          value={textCategories}
        />
        <MyButton lable="Update" onPress={() => ButtonSave()} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
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
  colorText: {
    color: '#333333',
    fontFamily: 'PPMonumentExtended-Black',
    fontSize: 20,
  },
});

export default UpdateProduct;
