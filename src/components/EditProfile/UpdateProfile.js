import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import MyButton from '../MyButton';
import MyTextInput from '../MyTextInput';

const UpdateProfile = ({navigation, route}) => {
  const {item} = route.params || {};

  const [name, setName] = useState(item.name);
  const [age, setAge] = useState(item.age);
  const [dob, setDOB] = useState(item.dob);
  const [phoneNumber, setPhoneNumber] = useState(item.phoneNumber);
  const [isImage, onChangeImage] = useState(item.image);

  async function updateItem() {
    try {
      const result = await firestore()
        .collection('profile')
        .doc('info')
        .update({
          name: name,
          image: isImage,
          age: age,
          dob: dob,
          phoneNumber: phoneNumber,
        });
      if (result) {
        console.log('vao day');
        navigation.navigate('Profile');
        alert('Update Profile Successfully!');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function ButtonSave() {
    if (
      name.length == 0 ||
      age.length == 0 ||
      dob.length == 0 ||
      phoneNumber.length == 0
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
      let reference = storage().ref(bucketFile);
      let task = reference.putFile(pathToFile);
      task
        .then(() => {
          alert('Image uploaded to the bucket!');
          onChangeImage(pathToFile);
        })
        .catch(e => alert('Uploading image error => ', e));
    });
  }
  return (
    <View style={styles.profile}>
      <View style={styles.part1Profile}></View>
      <View style={styles.part2Profile}>
        <Image
          source={{
            uri: `${isImage}`,
          }}
          style={{
            height: 85,
            width: 85,
            borderRadius: 50,
            alignSelf: 'center',
            top: -35,
            borderWidth: 4,
            borderColor: 'white',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            choosePic();
          }}>
          <Text
            style={{textAlign: 'center', fontWeight: '700', color: 'white'}}>
            Change picture
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal: 15}}>
        <View key={item.id}>
          <View style={{marginBottom: 12}}>
            <MyTextInput
              onChangeText={setName}
              value={name}
              title="Name"
              type="rounder"
            />
          </View>
          <View style={{marginBottom: 12}}>
            <MyTextInput
              onChangeText={setAge}
              value={String(age)}
              title="Age"
              type="rounder"
            />
          </View>
          <View style={{marginBottom: 12}}>
            <MyTextInput
              onChangeText={setDOB}
              value={dob}
              title="Birthday"
              type="rounder"
            />
          </View>
          <View style={{marginBottom: 12}}>
            <MyTextInput
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              title="Phone number"
              type="rounder"
            />
          </View>
        </View>
        <MyButton
          onPress={() => ButtonSave()}
          lable="Update"
          size="large"
          extraStyle={{alignSelf: 'center', marginTop: 20}}
        />
        <MyButton
          onPress={() => navigation.navigate('Profile')}
          lable="Exit"
          size="large"
          extraStyle={{alignSelf: 'center', marginTop: 20}}
        />
      </View>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#552619',

    height: '100%',
    marginVertical: 0,
    paddingVertical: 0,
  },
  part1Profile: {
    height: 100,
  },
  part2Profile: {
    position: 'relative',
  },
});
