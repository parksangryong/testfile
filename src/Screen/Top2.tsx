import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-gifted-charts';
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

  const pieData = [
    { value: 25, color: '#f39c12', text: '25%', shiftX: 10, shiftY: -10 },
    { value: 20, color: '#3498db', text: '20%' },
    { value: 15, color: '#e74c3c', text: '15%' },
    { value: 15, color: '#2ecc71', text: '15%' },
    { value: 15, color: '#9b59b6', text: '15%' },
    { value: 10, color: '#f1c40f', text: '10%' },
  ];
  const bar2Data = [
    {
      value: 0.3,
      label: '지난주',
      topLabel: '3회',
      color: 'rgba(0,100,255,0.3)',
    },
    {
      value: 0.7,
      label: '이번주',
      topLabel: '7회',
      color: 'rgba(0,100,255,0.3)',
    },
    {
      value: 0.2,
      label: '소 주',
      topLabel: '2회',
      color: 'rgba(200,200,200,0.3)',
    },
  ];

  const lineData = [
    { value: 40, label: 'Mon' },
    { value: 30, label: 'Tue' },
    { value: 50, label: 'Wed' },
    { value: 45, label: 'Thu' },
    { value: 60, label: 'Fri' },
    { value: 55, label: 'Sat' },
    { value: 50, label: 'Sun' },
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
      <View style={styles.ninja} />
      <PieChart
        data={pieData}
        showText
        radius={120}
        textColor="black"
        labelsPosition="onBorder"
        fontStyle="oblique"
        fontWeight="bold"
      />
      <BarChart
        data={bar2Data}
        barWidth={30}
        yAxisLabelWidth={50}
        frontColor="rgba(0,100,255,0.1)"
        maxValue={1.0}
        rulesType="solid"
        noOfSections={5}
        xAxisIndicesWidth={30}
        barBorderTopLeftRadius={10}
        barBorderTopRightRadius={10}
        yAxisLabelTexts={['0', '0.2', '0.4', '0.6', '0.8', '1.0']}
        barInnerComponent={item => {
          return (
            <View style={[styles.barLabel, { backgroundColor: item?.color }]}>
              <Text style={styles.label}>{item?.topLabel}</Text>
            </View>
          );
        }}
      />
      <LineChart
        areaChart
        data={lineData}
        color="#e74c3c"
        dataPointsRadius={5}
        dataPointsColor="red"
        maxValue={60}
        stepValue={20}
        startFillColor="rgba(255,120,120,0.3)"
        height={150}
        rulesType="solid"
      />
      <View style={styles.ninja} />
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
  barLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 5,
  },
  label: {
    color: 'white',
  },
});

export default Top2;
