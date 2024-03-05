import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { FONTS } from '../../Sub/Constants';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const VTest1 = () => {
  const [selected, setSelected] = useState('');
  const [date, setDate] = useState(dayjs()) as any;

  LocaleConfig.locales.kr = {
    monthNames: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    dayNames: [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: '오늘',
  };

  LocaleConfig.defaultLocale = 'kr';

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.h1}>wix/react-native-calendars</Text>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'skyblue',
            },
          }}
          theme={{
            dayTextColor: 'gray',
          }}
        />
        <View style={styles.ninja} />
        <Text style={styles.h1}>
          farhoudshapouran/react-native-ui-datepicker
        </Text>
        <DateTimePicker
          mode="single"
          date={date}
          onChange={params => setDate(params.date)}
          locale={'kr'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    lineHeight: 25,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  ninja: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    marginVertical: 20,
  },
});

export default VTest1;
