import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TopHeader from './TopHeader';
import DatePicker from 'react-native-date-picker';

const GabTest = () => {
  return (
    <ScrollView>
      <Text style={styles.text}>
        <Text style={styles.color}>Gap</Text> Test
      </Text>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.min} />
          <View style={styles.min} />
          <View style={styles.max} />
        </View>
        <View style={styles.container}>
          <View style={styles.min} />
          <View style={styles.min} />
          <View style={styles.min} />
        </View>
        <View style={styles.dd} />
        <View style={styles.container}>
          <View style={styles.min} />
          <View style={styles.min} />
          <View style={styles.max} />
        </View>
        <View style={styles.dd} />
        <View style={styles.container}>
          <View style={styles.min} />
          <View style={styles.min} />
          <View style={styles.max} />
        </View>
      </View>
    </ScrollView>
  );
};
const Stack = createStackNavigator();
const TestStack = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.center}>
      <DatePicker
        date={date}
        onDateChange={setDate}
        textColor="rgba(7,171,183,1)"
      />
    </View>
  );
};

const Top6 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {
          return <TopHeader />;
        },
      }}
    >
      <Stack.Screen name="gab" component={GabTest} />
      <Stack.Screen name="doublestack" component={TestStack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  min: {
    backgroundColor: 'rgba(26,99,217,0.1)',
    flex: 1,
    height: 100,
  },
  max: {
    backgroundColor: 'rgba(42,128,73,0.1)',
    flex: 2,
    height: 100,
  },
  dd: {
    flex: 1,
    height: 150,
    backgroundColor: 'rgba(7, 171, 183, 0.1)',
  },
  container: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  body: { flex: 1, gap: 20, padding: 20 },
  text: {
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 20,
  },
  color: {
    color: 'green',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctext: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Top6;
