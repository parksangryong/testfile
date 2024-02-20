import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  clickCount,
  clickCount2,
  clickCount3,
  clickCount4,
} from '../Sub/zustand';

const Top1 = () => {
  const { fifCount2, fifmCount2, count2, plusCount2, minusCount2 } =
    clickCount();
  const { fifCount3, fifmCount3, count3, plusCount3, minusCount3 } =
    clickCount2();
  const { fifCount4, fifmCount4, count4, plusCount4, minusCount4 } =
    clickCount3();
  const { fifCount5, fifmCount5, count5, plusCount5, minusCount5 } =
    clickCount4();

  return (
    <View style={styles.container}>
      <View style={styles.ninja} />
      <Text>zustand : {count2}</Text>
      <View style={styles.box}>
        <TouchableOpacity onPress={minusCount2}>
          <Text>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fifmCount2}>
          <Text>- 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={plusCount2}>
          <Text>+ 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fifCount2}>
          <Text>+ 5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ninja} />
      <Text>zustand : {count3}</Text>
      <View style={styles.box}>
        <TouchableOpacity onPress={minusCount3}>
          <Text>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fifmCount3}>
          <Text>- 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={plusCount3}>
          <Text>+ 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fifCount3}>
          <Text>+ 5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ninja} />
      <Text>zustand : {count4}</Text>
      <View style={styles.box}>
        <TouchableOpacity onPress={minusCount4}>
          <Text>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fifmCount4}>
          <Text>- 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={plusCount4}>
          <Text>+ 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fifCount4}>
          <Text>+ 5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ninja} />
      <Text>zustand : {count5}</Text>
      <View style={styles.box}>
        <TouchableOpacity onPress={minusCount5}>
          <Text>- 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fifmCount5}>
          <Text>- 5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={plusCount5}>
          <Text>+ 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={fifCount5}>
          <Text>+ 5</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ninja} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ninja: {
    backgroundColor: 'black',
    width: '90%',
    height: 1,
    marginVertical: 20,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '70%',
    height: 50,
  },
});
export default Top1;
