import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Videos = ({ route }: any) => {
  return (
    <View style={styles.pdfbox}>
      <Video
        source={{ uri: route.params.url }}
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
