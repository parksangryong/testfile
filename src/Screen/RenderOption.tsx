import React, { useEffect } from 'react';
import {
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Platform,
} from 'react-native';

//style
import { COLORS, FONTS } from '../Sub/Constants';

//bottomSheet
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import RenderItem from './RenderItem';

const RenderOptions = ({
  options = [],
  setSelectedValue,
  text,
  scrollViewRef,
  itemFontSize,
  itemHeight,
  selectedValue,
  pointColor,
}: any) => {
  const ITEM_HEIGHT = itemHeight ? itemHeight : 40;

  const scrollChange = () => {
    const selectedIndex = options.indexOf(selectedValue);
    scrollViewRef.current.scrollTo({
      x: 0,
      y: selectedIndex * ITEM_HEIGHT,
      animated: false,
    });
  };

  const changeValue = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = Math.round(event.nativeEvent.contentOffset.y);
    const Index = Math.round(y / itemHeight);
    const Value = options[Index];

    setSelectedValue(Value);
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      setTimeout(() => {
        scrollChange();
      }, 100);
    } else {
      setTimeout(() => {
        scrollChange();
      }, 1000);
    }
  }, []);

  return (
    <>
      {Platform.OS === 'ios' ? (
        <ScrollView
          ref={scrollViewRef}
          style={styles.optionContainer}
          contentContainerStyle={[
            styles.oo,

            {
              paddingVertical:
                itemHeight > 50 ? 80 - itemHeight * 0.2 : 75 + itemHeight * 0.1,
            },
          ]}
          showsVerticalScrollIndicator={false}
          onScroll={event => changeValue(event)}
          scrollEventThrottle={16}
          bounces={false}
        >
          {options.map((option: string, index: number) => (
            <RenderItem
              option={option}
              key={index}
              // setSelectedValue={setSelectedValue}
              text={text}
              itemFontSize={itemFontSize}
              itemHeight={itemHeight}
              selectedValue={selectedValue}
              pointColor={pointColor}
            />
          ))}
        </ScrollView>
      ) : (
        <BottomSheetScrollView
          ref={scrollViewRef}
          style={styles.optionContainer2}
          contentContainerStyle={[
            styles.oo,
            {
              paddingVertical:
                itemHeight > 50 ? 80 - itemHeight * 0.2 : 75 + itemHeight * 0.1,
            },
          ]}
          showsVerticalScrollIndicator={false}
          onScroll={event => changeValue(event)}
          bounces={false}
        >
          {options.map((option: string, index: number) => (
            <RenderItem
              option={option}
              key={index}
              // setSelectedValue={setSelectedValue}
              text={text}
              itemFontSize={itemFontSize}
              itemHeight={itemHeight}
              selectedValue={selectedValue}
              pointColor={pointColor}
            />
          ))}
        </BottomSheetScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  oo: {
    paddingVertical: 80,
  },
  optionContainer: {
    maxHeight: 210,
    width: '33%',
    borderRadius: 5,
    zIndex: 10,
  },
  optionContainer2: {
    maxHeight: 210,
    width: '100%',
    borderRadius: 5,
    zIndex: 10,
  },
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
  },
  btntext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 30,
  },
});

export default RenderOptions;
