import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//style
import { COLORS, FONTS } from '../Sub/Constants';

//component
import RenderOptions from './RenderOption';

const DateSelect = ({
  itemHeight,
  pointColor,
  pointBackgroundColor,
  itemFontSize,
  handlePress,
}: any) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getDay() - 1);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());

  const yearScrollViewRef = useRef(null);
  const monthScrollViewRef = useRef(null);
  const dayScrollViewRef = useRef(null);

  const years = Array.from(
    { length: 21 },
    (_, index) => new Date().getFullYear() - 10 + index,
  );
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const days = Array.from(
    { length: new Date(selectedYear, selectedMonth, 0).getDate() },
    (_, index) => index + 1,
  );

  return (
    <View style={styles.container}>
      <View style={styles.dateBox}>
        <View
          style={[
            styles.activeBar,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              height: itemHeight ? itemHeight : 40,
              top: itemHeight ? (200 - itemHeight) / 2 : 80,
              backgroundColor: pointBackgroundColor
                ? pointBackgroundColor
                : COLORS.opacityColor.mint,
            },
          ]}
        />
        <RenderOptions
          options={years}
          setSelectedValue={setSelectedYear}
          text="년"
          scrollViewRef={yearScrollViewRef}
          itemHeight={itemHeight}
          itemFontSize={itemFontSize}
          selectedValue={selectedYear}
          pointColor={pointColor}
        />
        <RenderOptions
          options={months}
          setSelectedValue={setSelectedMonth}
          text="월"
          scrollViewRef={monthScrollViewRef}
          itemHeight={itemHeight}
          itemFontSize={itemFontSize}
          selectedValue={selectedMonth}
          pointColor={pointColor}
        />
        <RenderOptions
          options={days}
          setSelectedValue={setSelectedDay}
          text="일"
          scrollViewRef={dayScrollViewRef}
          itemHeight={itemHeight}
          itemFontSize={itemFontSize}
          selectedValue={selectedDay}
          pointColor={pointColor}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          handlePress({
            year: selectedYear,
            month: selectedMonth,
            day: selectedDay,
          })
        }
      >
        <Text style={styles.btntext}>선택완료</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  dateBox: {
    flex: 2,
    flexDirection: 'row',
  },
  optionContainer: {
    maxHeight: 210,
    width: '30%',
    borderRadius: 5,
    marginVertical: 10,
  },
  option: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.defaultColor.main,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  btntext: {
    fontFamily: FONTS.bold,
    lineHeight: 60,
    color: COLORS.defaultColor.white,
    fontSize: 16,
  },
  activeBar: {
    width: '100%',
    zIndex: -1,
    position: 'absolute',
    backgroundColor: COLORS.opacityColor.mint,
    top: 80,
    height: 40,
  },
});
export default DateSelect;
