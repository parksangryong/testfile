import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  usePostMutation,
  usePutMutation,
  useDeleteMutation,
} from '../Sub/query';

const Items = ({ id, name, age }: any) => {
  const postMutation = usePostMutation();
  const putMutation = usePutMutation();
  const deleteMutation = useDeleteMutation();

  const [nameValue, setNameValue] = useState(name);
  const [ageValue, setAgeValue] = useState(age);

  return (
    <>
      <View style={stlyes.Container}>
        <Text style={stlyes.id}>{id}</Text>
        <Text style={stlyes.age}>{age}</Text>
        <Text style={stlyes.name}>{name}</Text>
        <TouchableOpacity
          style={stlyes.btn}
          onPress={() =>
            postMutation.mutate({
              endPoint: 'ddd',
              name: nameValue,
              age: ageValue,
            })
          }
        >
          <Text style={stlyes.btntext}>post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stlyes.btn}
          onPress={() =>
            putMutation.mutate({ id: id, name: nameValue, age: ageValue })
          }
        >
          <Text style={stlyes.btntext}>put</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stlyes.btn}
          onPress={() => deleteMutation.mutate({ id: id })}
        >
          <Text style={stlyes.btntext}>delete</Text>
        </TouchableOpacity>
      </View>
      <View style={stlyes.Container}>
        <Text style={stlyes.label}>이름: </Text>
        <TextInput
          style={stlyes.input}
          value={nameValue}
          onChangeText={data => setNameValue(data)}
        />
        <Text style={stlyes.label}>나이: </Text>
        <TextInput
          style={stlyes.input}
          value={ageValue}
          onChangeText={data => setAgeValue(data)}
        />
      </View>
    </>
  );
};

export default Items;

const stlyes = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
  },
  id: {
    color: 'red',
    width: 20,
  },
  name: {
    color: 'blue',
    width: 100,
  },
  age: {
    color: 'green',
    width: 35,
  },
  btn: {
    height: 40,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntext: {
    color: 'black',
    textDecorationLine: 'underline',
  },
  input: {
    backgroundColor: 'skyblue',
    width: 150,
    height: 30,
    fontSize: 15,
    lineHeight: 20,
    paddingVertical: 0,
    paddingHorizontal: 10,
    margin: 0,
    color: 'black',
  },
  label: {
    color: 'black',
    fontWeight: '500',
  },
});
