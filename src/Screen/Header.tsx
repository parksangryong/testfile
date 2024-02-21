import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <TouchableOpacity
        style={styles.hback}
        onPress={() => navigation.goBack()}
        activeOpacity={1}
      >
        <Text style={styles.hx}>x</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  hback: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  hx: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
    marginRight: 10,
  },
});

export default Header;
