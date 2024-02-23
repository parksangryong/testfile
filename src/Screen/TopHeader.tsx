import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const TopHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.hback}
        onPress={() => navigation.navigate('doublestack')}
        activeOpacity={1}
      >
        <Text style={styles.hx}>Change</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.hback}
        onPress={() => navigation.goBack()}
        activeOpacity={1}
      >
        <Text style={styles.hx}>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  hback: {
    width: '50%',
    height: 50,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  hx: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 50,
  },
});

export default TopHeader;
