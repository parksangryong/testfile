import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { BarChart } from 'react-native-gifted-charts';
import {
  clickCount,
  clickCount2,
  clickCount3,
  clickCount4,
} from '../Sub/zustand';

const Top2 = () => {
  const { count2 } = clickCount();
  const { count3 } = clickCount2();
  const { count4 } = clickCount3();
  const { count5 } = clickCount4();

  const data = [
    { value: count2 },
    { value: count3 },
    { value: count4 },
    { value: count5 },
  ];
  const barData = [
    { value: count2 },
    { value: count3 },
    { value: count4 },
    { value: count5 },
    { value: count2 + count4 - count3 - count5 },
    { value: (count4 * count5) / (count2 + count3) },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text>t2</Text>
      <LineChart areaChart data={data} width={300} spacing={90} />
      <View style={styles.ninja} />
      <BarChart
        showFractionalValues
        showYAxisIndices
        showXAxisIndices
        hideRules
        noOfSections={5}
        data={barData}
        showGradient
        frontColor={'#1B6BB0'}
        gradientColor={'#FFEEFE'}
        backgroundColor={'#eee'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingLeft: 10,
  },
  ninja: {
    backgroundColor: 'black',
    width: '97%',
    height: 1,
    marginTop: 20,
    marginBottom: 40,
  },
});

export default Top2;
