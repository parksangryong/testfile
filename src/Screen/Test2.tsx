import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import useCustomToast from '../hooks/ToastHook';

const Test2 = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
  ]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.log(date);
    hideDatePicker();
  };

  const { successGrayToast, successWhiteToast, successYellowToast } =
    useCustomToast();

  return (
    <View style={stlyes.back}>
      <SafeAreaView>
        <Text style={stlyes.h1}>Toast!</Text>
        <TouchableOpacity
          onPress={() =>
            successGrayToast({
              icon: 'inventory',
              text: '정보를 올바르게 입력해 주세요.',
            })
          }
          style={stlyes.btn}
        >
          <Text>successGray</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            successWhiteToast({
              icon: 'menu',
              text: '정보를 올바르게 입력해 주세요.',
            })
          }
          style={stlyes.btn}
        >
          <Text>successWhite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            successYellowToast({
              text: '정보를 올바르게 입력해 주세요.',
            })
          }
          style={stlyes.btn}
        >
          <Text>successYellow</Text>
        </TouchableOpacity>
        <Text style={stlyes.h1}>Shadow</Text>
        <View style={stlyes.shadowbox}>
          <Shadow
            distance={5}
            startColor={'#eb9066d8'}
            endColor={'#ff00ff10'}
            offset={[1, 2]}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: 50, height: 50 }}
          >
            <View style={stlyes.shadow} />
          </Shadow>
          <Shadow
            distance={5}
            startColor={'#eb9066d8'}
            endColor={'#ff00ff10'}
            offset={[1, 2]}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ width: 50, height: 50 }}
          >
            <View style={stlyes.shadow} />
          </Shadow>
        </View>
        <Text style={stlyes.h1}>Picker</Text>
        <View style={stlyes.pick}>
          <RNPickerSelect
            // eslint-disable-next-line @typescript-eslint/no-shadow
            onValueChange={value => console.log(value)}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
          />
        </View>
        <Text style={stlyes.h1}>DateTime-Picker</Text>
        <View style={stlyes.pick}>
          <TouchableOpacity onPress={showDatePicker}>
            <Text>Click Date</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <Text style={stlyes.h1}>DropDown-Picker</Text>
        <View style={stlyes.pick}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            // eslint-disable-next-line @typescript-eslint/no-shadow
            onChangeValue={value => console.log(value)}
            placeholder={'Choose a fruit.'}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const stlyes = StyleSheet.create({
  back: {
    flex: 1,
  },
  h1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  btn: {
    backgroundColor: 'orange',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  shadow: {
    backgroundColor: 'purple',
    width: 50,
    height: 50,
  },
  shadowbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
  },
  pick: {
    marginHorizontal: 30,
    zIndex: 1,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
    marginLeft: 100,
    marginTop: 15,
  },
});

export default Test2;
