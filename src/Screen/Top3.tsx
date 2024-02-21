import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';
import checkPdf from '../assets/check.pdf';

const Top3 = () => {
  const [view, setView] = useState(false);

  const handleOpenPDF = () => {
    setView(!view);
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleOpenPDF}>
          <Text style={styles.fileText}>Open PDF File</Text>
        </TouchableOpacity>
      </View>
      {view && (
        <View style={styles.pdfbox}>
          <Pdf
            trustAllCerts={false}
            source={checkPdf}
            style={styles.pdf}
            onError={error => {
              console.log(error);
            }}
          />
        </View>
      )}
    </>
  );
};

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
  },
  pdf: {
    width: '100%',
    flex: 1,
  },
  pdfbox: {
    flex: 1,
    padding: 10,
  },
});

export default Top3;
