import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import * as Progress from 'react-native-progress';

const Top4 = () => {
  const [view, setView] = useState(false);

  const handleOpenPDF = () => {
    setView(!view);
  };

  const renderActivityIndicator = (progress: number) => {
    const prog = progress * 1.5;

    return (
      <View style={styles.procontainer}>
        <Progress.Bar progress={prog} width={100} height={10} />
        <Text>Loading PDF... </Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleOpenPDF}>
          <Text style={styles.fileText}>Open PDF URI</Text>
        </TouchableOpacity>
      </View>
      {view && (
        <View style={styles.pdfbox}>
          <Pdf
            trustAllCerts={false}
            source={{
              uri: 'https://check.hkcd.kr/pdf.pdf',
              cache: true,
            }}
            style={styles.pdf}
            onError={error => {
              console.log('PDF 로드 오류:', error);
            }}
            renderActivityIndicator={(progress: number) =>
              renderActivityIndicator(progress)
            }
          />
        </View>
      )}
    </>
  );
};

export default Top4;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
  },
  fileText: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  pdf: {
    width: '100%',
    flex: 1,
  },
  pdfbox: {
    flex: 1,
    padding: 10,
  },
  procontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
