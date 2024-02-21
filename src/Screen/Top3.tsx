import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { createThumbnail } from 'react-native-create-thumbnail';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Top3 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const videourl = 'https://check.hkcd.kr/mp4.mp4';
  const [thum, setThum] = useState('');

  useEffect(() => {
    const createThum = async () =>
      await createThumbnail({
        url: videourl,
        timeStamp: 4000,
      })
        .then(response => setThum(response.path))
        .catch(err => console.log('thumError: ', err));

    createThum();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('video')}
          style={styles.container}
        >
          <Text style={styles.fileText}>썸네일</Text>
          {thum && <Image source={{ uri: thum }} style={styles.thum} />}
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
  },
  fileText: {
    fontSize: 20,
    color: 'black',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  thum: {
    width: 150,
    height: 120,
  },
});

export default Top3;
