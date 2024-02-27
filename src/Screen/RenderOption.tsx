import React, { useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

//style
import { COLORS, FONTS } from '../Sub/Constants';

//bottomSheet
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';

const RenderOptions = ({
  options = [],
  selectedValue,
  setSelectedValue,
  text,
  scrollViewRef,
  itemFontSize,
  itemHeight,
  pointColor,
  pointBackgroundColor,
}: any) => {
  const selectedIndex = options.indexOf(selectedValue);
  const ITEM_HEIGHT = itemHeight ? itemHeight : 40;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                option !== selectedValue
                  ? 'transparent'
                  : pointBackgroundColor
                  ? pointBackgroundColor
                  : COLORS.opacityColor.mint,
              height: itemHeight ? itemHeight : 40,
            },
          ]}
          onPress={() => setSelectedValue(option)}
        >
          <Text
            style={[
              styles.text,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                fontFamily:
                  option === selectedValue ? FONTS.bold : FONTS.regular,
                color:
                  option !== selectedValue
                    ? COLORS.defaultColor.deepGray
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
