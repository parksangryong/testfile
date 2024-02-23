import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createThumbnail } from 'react-native-create-thumbnail';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import FastImage from 'react-native-fast-image';

const Top3 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [thum, setThum] = useState('');
  const videourl = 'https://check.hkcd.kr/mp4.mp4';

  const createThum = async () => {
    await createThumbnail({
      url: videourl,
      timeStamp: 0,
    })
      .then(response => setThum(response.path))
      .catch(err => console.log('thumError: ', err));
  };

  useEffect(() => {
    createThum();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('video', { url: videourl })}
          style={styles.container}
          activeOpacity={0.9}
        >
          <Text style={styles.fileText}>동영상 썸네일</Text>
          {thum && (
            <>
              <FastImage
                source={{
                  uri: thum,
                  priority: FastImage.priority.normal,
                }}
                style={styles.thum}
                resizeMode={FastImage.resizeMode.cover}
              />
              <FontAwesomeIcon
                icon={faCirclePlay}
                size={50}
                style={styles.icon}
              />
            </>
          )}
        </TouchableOpacity>
        <View style={styles.ninja} />
        <View style={styles.container}>
          <Text style={styles.fileText}>이미지 썸네일</Text>
          <FastImage
            source={{
              uri: 'https://cdn.pixabay.com/photo/2024/01/25/12/30/forest-8531787_960_720.jpg',
              priority: FastImage.priority.normal,
            }}
            style={styles.thumimg}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
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
    opacity: 0.7,
  },
  thumimg: {
    width: 150,
    height: 120,
  },
  icon: {
    position: 'relative',
    bottom: 85,
  },
  ninja: {
    width: '80%',
    height: 2,
    backgroundColor: 'black',
  },
});

export default Top3;
