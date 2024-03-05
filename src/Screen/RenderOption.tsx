import React, { useEffect } from 'react';
import {
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';

//style
import { COLORS, FONTS } from '../Sub/Constants';

//bottomSheet
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
    setTimeout(() => {
      scrollChange();
    }, 100);
  }, []);

  return (
    <>
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
        onScrollEndDrag={() => scrollChange()}
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
