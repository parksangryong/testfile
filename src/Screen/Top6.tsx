import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

const Top6 = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
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

const styles = StyleSheet.create({
  min: {
    backgroundColor: '#ccc',
    flex: 1,
    height: 100,
  },
  max: {
    backgroundColor: '#ccc',
    flex: 1.5,
    height: 100,
  },
  dd: {
    flex: 1,
    height: 150,
    backgroundColor: '#ccc',
  },
  container: {
    columnGap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  body: { flex: 1, rowGap: 20, padding: 20 },
});

export default Top6;
