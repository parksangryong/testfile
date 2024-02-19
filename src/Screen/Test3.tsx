import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { clickCount } from '../Sub/zustand';
import moment from 'moment';
import { findIndex } from 'lodash';

const Test3 = () => {
  const { count2, plusCount2, minusCount2 } = clickCount();
  const [date, setDate] = useState(moment().format('MMMM Do YYYY, h:mm a'));

  useEffect(() => {
    setInterval(() => {
      setDate(moment().format('MMMM Do YYYY, h:mm a'));
    }, 60000);
  }, []);

  const array = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];

  return (
    <View style={stlyes.back}>
      <View style={stlyes.box}>
        <Text style={stlyes.h1}>Zustand</Text>
        <Text style={stlyes.h2}>{count2}</Text>
        <View style={stlyes.btn}>
          <TouchableOpacity onPress={plusCount2}>
            <Text style={stlyes.h2}>plus</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={minusCount2}>
            <Text style={stlyes.h2}>minus</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={stlyes.box}>
        <Text style={stlyes.h1}>moment</Text>
        <Text style={stlyes.h2}>{date}</Text>
      </View>
      <View style={stlyes.box}>
        <Text style={stlyes.h1}>lodash</Text>
        <Text style={stlyes.h2}>
          findIndex(name: banana) : {findIndex(array, { name: 'Banana' })}
        </Text>
        <Text style={stlyes.h2}>
          findIndex(id: 3) : {findIndex(array, { id: 3 })}
        </Text>
      </View>
    </View>
  );
};

const stlyes = StyleSheet.create({
  back: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 30,
  },
  h1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  h2: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  btn: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
  },
});
export default Test3;
