import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { createThumbnail } from 'react-native-create-thumbnail';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

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
          onPress={() => navigation.navigate('video', { url: videourl })}
          style={styles.container}
          activeOpacity={0.9}
        >
          <Text style={styles.fileText}>썸네일</Text>
          {thum && (
            <>
              <Image source={{ uri: thum }} style={styles.thum} />
              <FontAwesomeIcon
                icon={faCirclePlay}
                size={50}
                style={styles.icon}
              />
            </>
          )}
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
    opacity: 0.7,
  },
  icon: {
    position: 'relative',
    bottom: 85,
  },
});

export default Top3;
