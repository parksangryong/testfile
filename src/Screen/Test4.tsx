import React, { useState } from 'react';
import { Alert, StyleSheet, Image, View, SafeAreaView } from 'react-native';
import SignatureView from 'react-native-signature-canvas';

const Test4 = () => {
  const [baseimg, setBaseImg] = useState('');

  const handleSignature = (signature: string) => {
    setBaseImg(signature);
    Alert.alert('Signature shot!');
  };

  return (
    <SafeAreaView>
      <View style={stlyes.container}>
        <View style={stlyes.back}>
          <SignatureView
            onOK={handleSignature}
            onEmpty={() => console.log('Please provide a signature.')}
            descriptionText="Sign"
            clearText="Clear"
            confirmText="Save"
            webStyle={`
				.m-signature-pad { 
			    box-shadow: none; 
			    border: none; 
			    background-color: #FFF;     

			  }
			  .m-signature-pad--body {
			    border: 1px solid #000;
     
			  }
			  .m-signature-pad--footer {
			    background-color: green;
			  }
			  .button {
			    background-color: #FFF;
			    color: #000;
			  }
			`}
          />
        </View>
        <View style={stlyes.center}>
          {baseimg && <Image style={stlyes.img} source={{ uri: baseimg }} />}
        </View>
      </View>
    </SafeAreaView>
  );
};

const stlyes = StyleSheet.create({
  back: {
    zIndex: 1,
    height: 360,
    borderBottomWidth: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '95%',
  },
  img: {
    height: 200,
    width: 250,
    borderWidth: 0.5,
    backgroundColor: 'white',
  },
  center: {
    justifyContent: 'center',
    width: 250,
    height: 200,
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default Test4;
