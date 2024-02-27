import React, { useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../Sub/Constants';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const RenderOptions = ({
  options = [],
  selectedValue,
  setSelectedValue,
  text,
  scrollViewRef,
}: any) => {
  const selectedIndex = options.indexOf(selectedValue);
  const ITEM_HEIGHT = 40;

  const scrollChange = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: (selectedIndex + 1) * ITEM_HEIGHT - ITEM_HEIGHT * 1,
        animated: true,
      });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollChange();
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    scrollChange();
  }, [selectedValue]);

  return (
    <BottomSheetScrollView
      ref={scrollViewRef}
      style={styles.optionContainer}
      contentContainerStyle={styles.oo}
      showsVerticalScrollIndicator={false}
    >
      {options.map((option: string, index: number) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor:
                option === selectedValue
                  ? COLORS.opacityColor.mint
                  : 'transparent',
            },
          ]}
          onPress={() => setSelectedValue(option)}
        >
          <Text
            style={[
              styles.text,
              {
                fontFamily:
                  option === selectedValue ? FONTS.bold : FONTS.regular,
                color:
                  option === selectedValue
                    ? COLORS.defaultColor.main
                    : COLORS.defaultColor.black,
              },
            ]}
          >
            {option} {text}
          </Text>
        </TouchableOpacity>
      ))}
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  oo: {
    paddingVertical: 80,
  },
  optionContainer: {
    maxHeight: 200,
    width: '100%',
    borderRadius: 5,
  },
  option: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    lineHeight: 22,
  },
});

export default RenderOptions;
