import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Videos = () => {
  return (
    <View style={styles.pdfbox}>
      <Video
        source={{ uri: 'https://check.hkcd.kr/mp4.mp4' }} // Can be a URL or a local file.
        style={styles.backgroundVideo}
        resizeMode={'contain'}
        controls={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  pdfbox: {
    flex: 1,
  },
  backgroundVideo: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
});

export default Videos;
