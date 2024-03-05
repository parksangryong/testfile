import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const VTest2 = () => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text>hello2</Text>
        <View>
          <Text>new Version Test</Text>
        </View>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={selectedItem => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={item => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          dropdownStyle={styles.dropdown}
          dropdownOverlayColor="transparent"
          buttonStyle={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  box: {
    paddingLeft: 30,
    paddingTop: 30,
  },
  dropdown: {
    borderRadius: 10,
    backgroundColor: '#eee',
    marginTop: -20,
    zIndex: 10,
    marginLeft: 20,
    paddingHorizontal: 30,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'white',
    width: 150,
  },
});

export default VTest2;
