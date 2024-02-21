import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';
import * as Progress from 'react-native-progress';

const Videos = ({ route }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    const interval = setInterval(() => {
      if (progress < 1.0) {
        setProgress(progress + 0.02);
      } else {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <View style={styles.pdfbox}>
      {isLoading && (
        <View style={styles.procontainer}>
          <Progress.Bar progress={progress} width={100} height={10} />
          <Text style={styles.protext}>Loading Video... </Text>
        </View>
      )}
      {!isLoading && (
        <Video
          source={{ uri: route.params.url }}
          style={styles.backgroundVideo}
          resizeMode={'contain'}
          controls={true}
        />
      )}
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
  procontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  protext: {
    color: 'white',
  },
});

export default Videos;
