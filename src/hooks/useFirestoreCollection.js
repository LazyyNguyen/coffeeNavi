import storage from '@react-native-firebase/storage';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
function useFirestoreCollection(collection, pageSize, page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);
  const [queryLoading, setQueryLoading] = useState(false);
  const [queryError, setQueryError] = useState(null);
  const [search, setSearch] = useState();
  const [filteredDataSource, setFilteredDataSource] = useState();
  const [isImage, onChangeImage] = useState();

  useEffect(() => {
    let unsubscribe;
    if (query) {
      setQueryLoading(true);
      unsubscribe = query.onSnapshot(
        querySnapshot => {
          const data = [];
          querySnapshot.forEach(doc => {
            data.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setData(data);
          setQueryLoading(false);
        },
        error => {
          setQueryError(error);
          setQueryLoading(false);
        },
      );
    } else {
      unsubscribe = collection
        .limit(pageSize)
        // .offset(page * pageSize)
        .onSnapshot(
          collectionSnapshot => {
            const data = [];
            collectionSnapshot.forEach(doc => {
              data.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setData(data);
            setLoading(false);
          },
          error => {
            setError(error);
            setLoading(false);
          },
        );
    }
    return () => unsubscribe();
  }, [collection, query, pageSize, page]);
  const searchFilterFunction = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(data);
      setSearch(text);
    }
  };
  function refresh() {
    if (query) {
      setQueryLoading(true);
      query.get().then(
        querySnapshot => {
          const data = [];
          querySnapshot.forEach(doc => {
            data.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          setData(data);
          setQueryLoading(false);
        },
        error => {
          setQueryError(error);
          setQueryLoading(false);
        },
      );
    } else {
      collection
        .limit(pageSize)
        // .offset(page * pageSize)
        .get()
        .then(
          collectionSnapshot => {
            const data = [];
            collectionSnapshot.forEach(doc => {
              data.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setData(data);
            setLoading(false);
          },
          error => {
            setError(error);
            setLoading(false);
          },
        );
    }
  }

  function setCollectionQuery(newQuery) {
    setQuery(newQuery);
  }
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
  return {
    data,
    loading,
    error,
    queryLoading,
    queryError,
    refresh,
    setCollectionQuery,
    setData,
    searchFilterFunction,
    search,
    filteredDataSource,
    isImage,
    onChangeImage,
    choosePic,
  };
}

export default useFirestoreCollection;

const styles = StyleSheet.create({});
