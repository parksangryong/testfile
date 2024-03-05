import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { bsRef } from '../Sub/zustand';
import { COLORS } from '../Sub/Constants';
import { useNavigation } from '@react-navigation/native';

const Top7 = () => {
  //바텀시트
  const { ref, ref2, ref3 } = bsRef();

  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => ref.current?.present()}
        style={styles.btn}
      >
        <Text>open1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => ref2.current?.present()}
        style={styles.btn}
      >
        <Text>open2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => ref3.current?.present()}
        style={styles.btn}
      >
        <Text>open3</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('bottom2')}
        style={styles.btn}
      >
        <Text>nextBottomStack</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.opacityColor.gray,
    borderRadius: 5,
  },
});

export default Top7;
