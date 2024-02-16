import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import * as images from '../assets';

type ImageKey = keyof typeof images;

const toastConfig = {
  success: ({ text2, text1 }: any) => {
    const imageKey = text2 as ImageKey;
    const imageSource = images[imageKey];
    return (
      <View style={styles.sBody}>
        {text2 && <Image source={imageSource} style={styles.img} />}
        <Text style={styles.sText}>{text1}</Text>
      </View>
    );
  },
  success2: ({ text2, text1 }: any) => {
    const imageKey = text2 as ImageKey;
    const imageSource = images[imageKey];
    return (
      <View style={[styles.s2Body, styles.shadows]}>
        {text2 && <Image source={imageSource} style={styles.img} />}
        <Text style={styles.s2Text}>{text1}</Text>
      </View>
    );
  },
  success3: ({ text1 }: any) => {
    return (
      <View style={[styles.s3Body]}>
        <Text style={styles.s3Text}>{text1}</Text>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  sBody: {
    height: 50,
    width: '67%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
  },
  sText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    lineHeight: 50,
    letterSpacing: -1,
  },
  s2Body: {
    height: 50,
    width: '67%',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
  },
  s2Text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    lineHeight: 50,
    letterSpacing: -1,
  },
  img: {
    width: 17,
    height: 16,
    resizeMode: 'contain',
    marginRight: 5,
    letterSpacing: -1,
  },
  shadows: {
    shadowColor: '#eeeeee',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,

    elevation: 20,
  },
  s3Body: {
    height: 50,
    width: '67%',
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderLeftWidth: 18,
    borderRightWidth: 18,
    borderLeftColor: '#FFC55B',
    borderRightColor: '#FFC55B',
  },
  s3Text: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    lineHeight: 50,
  },
});

export default toastConfig;
