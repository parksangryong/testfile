import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import Items from './Items';
import { useHomeQuery } from '../Sub/query';
import { clickCount, useApiCount } from '../Sub/zustand';

const Test1 = () => {
  const { count } = useApiCount();
  const { count2, plusCount2, minusCount2 } = clickCount();

  const { status, data: rqData, refetch } = useHomeQuery();

  if (status === 'loading') {
    return (
      <SafeAreaView>
        <View style={stlyes.body}>
          <ActivityIndicator size="large" color={'black'} />
        </View>
      </SafeAreaView>
    );
  }

  if (status === 'error') {
    return (
      <SafeAreaView>
        <View style={stlyes.number}>
          <TouchableOpacity onPress={() => plusCount2()}>
            <Text>plus</Text>
          </TouchableOpacity>
          <Text
            style={[stlyes.counter, count2 >= 0 ? stlyes.plus : stlyes.minus]}
          >
            {count2}
          </Text>
          <TouchableOpacity onPress={() => minusCount2()}>
            <Text>minus</Text>
          </TouchableOpacity>
        </View>
        <View style={stlyes.body}>
          <Text style={stlyes.error}>Query Error</Text>
        </View>
        <TouchableOpacity onPress={() => refetch()} style={stlyes.re}>
          <Text>restart</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={stlyes.number}>
          <TouchableOpacity onPress={() => plusCount2()}>
            <Text>plus</Text>
          </TouchableOpacity>
          <Text style={stlyes.counter}>{count2}</Text>
          <TouchableOpacity onPress={() => minusCount2()}>
            <Text>minus</Text>
          </TouchableOpacity>
        </View>
        <View style={stlyes.Container}>
          {rqData.map((data: { id: any; name: any; age: any }, index: any) => {
            return (
              <Items id={data.id} name={data.name} age={data.age} key={index} />
            );
          })}
        </View>
        <View style={stlyes.number}>
          <Text style={stlyes.count}>개수 : {count}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const stlyes = StyleSheet.create({
  Container: {
    flex: 1,
  },
  number: {
    backgroundColor: 'gray',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 15,
    height: 50,
    flexDirection: 'row',
  },
  count: {
    fontSize: 20,
    color: 'white',
  },
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  input: {
    backgroundColor: 'white',
  },
  error: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
  },
  plus: {
    color: 'white',
  },
  minus: {
    color: 'blue',
  },
  re: {
    marginRight: 20,
    alignItems: 'flex-end',
  },
});

export default Test1;
