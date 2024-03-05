import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

//style
import { COLORS, FONTS } from '../Sub/Constants';

//component
import RenderOptions from './RenderOption';

const TimeSelect = ({
  itemHeight,
  pointColor,
  pointBackgroundColor,
  itemFontSize,
  handlePress,
}: any) => {
  const [selectedHours, setSelectedHours] = useState(
    new Date().getHours() > 12
      ? new Date().getHours() - 12
      : new Date().getHours(),
  );
  const [selectedMinute, setSelectedMinute] = useState(new Date().getMinutes());
  const [selectAmpm, setSelectedAmpm] = useState(
    new Date().getHours() > 12 ? 'PM' : 'AM',
  );

  const hoursScrollViewRef = useRef(null);
  const minuteScrollViewRef = useRef(null);
  const AmpmRef = useRef(null);

  const years = Array.from({ length: 12 }, (_, index) => index + 1);
  const months = Array.from({ length: 60 }, (_, index) => index + 1);
  const ampm = ['AM', 'PM'];

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
          options={ampm}
          setSelectedValue={setSelectedAmpm}
          text=""
          scrollViewRef={AmpmRef}
          itemHeight={itemHeight}
          itemFontSize={itemFontSize}
          selectedValue={selectAmpm}
          pointColor={pointColor}
        />
        <RenderOptions
          options={years}
          setSelectedValue={setSelectedHours}
          text="시"
          scrollViewRef={hoursScrollViewRef}
          itemHeight={itemHeight}
          itemFontSize={itemFontSize}
          selectedValue={selectedHours}
          pointColor={pointColor}
        />
        <RenderOptions
          options={months}
          setSelectedValue={setSelectedMinute}
          text="분"
          scrollViewRef={minuteScrollViewRef}
          itemHeight={itemHeight}
          itemFontSize={itemFontSize}
          selectedValue={selectedMinute}
          pointColor={pointColor}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() =>
          handlePress({
            hours: selectedHours,
            minute: selectedMinute,
            ampm: selectAmpm,
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
export default TimeSelect;
