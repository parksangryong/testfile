import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

import { MMKV } from 'react-native-mmkv';
export const storage = new MMKV({
  id: 'users',
  encryptionKey: 'hello?',
});

export const storages = new MMKV({
  id: 'userss',
  encryptionKey: 'hello?',
});

const Test5 = () => {
  const [inputset, setInputset] = useState('');
  const [key, setKey] = useState('');
  const [inputget, setInputget] = useState('');
  const [inputdel, setInputdel] = useState('');

  const [allkey, setAllkey] = useState([]) as any;
  const [data, setData] = useState('') as any;

  return (
    <SafeAreaView style={stlyes.container}>
      <View style={stlyes.box}>
        <Text style={stlyes.h1}>MMKV Set - other id</Text>
        <View style={stlyes.ibox}>
          <TextInput
            style={stlyes.input2}
            value={key}
            onChangeText={text => setKey(text)}
            placeholder="key"
          />
          <TextInput
            style={stlyes.input2}
            value={inputset}
            onChangeText={text => setInputset(text)}
            placeholder="data"
          />
          <TouchableOpacity
            style={stlyes.btn}
            onPress={() => storages.set(key, inputset)}
          >
            <Text>set!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={stlyes.box}>
        <Text style={stlyes.h1}>MMKV Set</Text>
        <View style={stlyes.ibox}>
          <TextInput
            style={stlyes.input2}
            value={key}
            onChangeText={text => setKey(text)}
            placeholder="key"
          />
          <TextInput
            style={stlyes.input2}
            value={inputset}
            onChangeText={text => setInputset(text)}
            placeholder="data"
          />
          <TouchableOpacity
            style={stlyes.btn}
            onPress={() => storage.set(key, inputset)}
          >
            <Text>set!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={stlyes.box}>
        <Text style={stlyes.h1}>MMKV Get</Text>
        <View style={stlyes.ibox}>
          <TextInput
            style={stlyes.input}
            onChangeText={text => setInputget(text)}
            placeholder="key"
            value={inputget}
          />
          <TouchableOpacity
            style={stlyes.btn}
            onPress={() => setData(storage.getString(inputget))}
          >
            <Text>get!</Text>
          </TouchableOpacity>
        </View>
        <Text style={stlyes.data}>{data}</Text>
      </View>
      <View style={stlyes.box}>
        <Text style={stlyes.h1}>MMKV Delete</Text>
        <View style={stlyes.ibox}>
          <TextInput
            style={stlyes.input}
            onChangeText={text => setInputdel(text)}
            placeholder="key"
            value={inputdel}
          />
          <TouchableOpacity
            style={stlyes.btn}
            onPress={() => storage.delete(inputdel)}
          >
            <Text>delete!</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={stlyes.box}>
        <Text style={stlyes.h1}>MMKV AllKey</Text>
        <TouchableOpacity
          style={stlyes.btn}
          onPress={() => setAllkey(storage.getAllKeys())}
        >
          <Text>all!</Text>
        </TouchableOpacity>
        <Text style={stlyes.data}>{allkey.join(', ')}</Text>
      </View>
    </SafeAreaView>
  );
};

const stlyes = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
  },
  box: {
    borderBottomWidth: 5,
    flex: 1,
    justifyContent: 'center',
  },
  h1: {
    color: 'black',
    fontSize: 25,
    paddingTop: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 300,
  },
  input2: {
    borderWidth: 1,
    marginHorizontal: 4,
    marginVertical: 10,
    width: 150,
  },
  btn: {
    backgroundColor: 'skyblue',
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  ibox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  data: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default Test5;
