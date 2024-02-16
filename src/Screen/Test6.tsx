import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';

export const Test6 = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView style={styles.container}>
        <View style={styles.list}>
          <Text>Title</Text>
        </View>
        <View style={[styles.list, styles.textbox]}>
          <Text>Text</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 15,
    flex: 1,
    borderRadius: 10,
    padding: 15,
    borderColor: 'gray',
  },
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  list: {
    borderWidth: 1,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderColor: 'gray',
  },
  textbox: {
    height: 600,
    marginTop: 20,
  },
});
