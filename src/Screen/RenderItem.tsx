import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../Sub/Constants';

const RenderItem = ({
  option,
  itemFontSize,
  itemHeight,
  // setSelectedValue,
  text,
  selectedValue,
  pointColor,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.option,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          height: itemHeight ? itemHeight : 40,
        },
      ]}
      // onPress={() => setSelectedValue(option)}
    >
      <Text
        style={[
          styles.text,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            fontFamily: option === selectedValue ? FONTS.bold : FONTS.regular,
            color:
              option !== selectedValue
                ? COLORS.defaultColor.black
                : pointColor
                ? pointColor
                : COLORS.defaultColor.main,
            fontSize: itemFontSize ? itemFontSize : 17,
            lineHeight: itemFontSize ? itemFontSize + 5 : 22,
          },
        ]}
      >
        {option} {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    lineHeight: 22,
    color: COLORS.defaultColor.deepGray,
    fontFamily: FONTS.regular,
    padding: 0,
  },
});

export default RenderItem;
