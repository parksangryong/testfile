import React, {
  useCallback,
  useMemo,
  useRef,
  // useState
} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  Alert,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TopHeader from './TopHeader';
// import DatePicker from 'react-native-date-picker';
import { COLORS, FONTS } from '../Sub/Constants';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { selectDate } from '../Sub/zustand';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/pro-solid-svg-icons';

import DateSelect from './DateSelect';
const GabTest = () => {
  return (
    <ScrollView>
      <Text style={styles.text}>
        <Text style={styles.color}>Gap</Text> Test
      </Text>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.min} />
          <View style={styles.min} />
          <View style={styles.max} />
        </View>
        <View style={styles.container}>
          <View style={styles.min} />
          <View style={styles.min} />
          <View style={styles.min} />
        </View>
        <View style={styles.dd} />
        <View style={styles.container}>
          <View style={styles.min} />
          <View style={styles.min} />
          <View style={styles.max} />
        </View>
        <View style={styles.dd} />
        <View style={styles.container}>
          <View style={styles.min} />
          <View style={styles.min} />
          <View style={styles.max} />
        </View>
      </View>
    </ScrollView>
  );
};
const Stack = createStackNavigator();
const TestStack = () => {
  // const [date, setDate] = useState(new Date());
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(
    () => (Platform.OS === 'ios' ? ['55%'] : ['65%']),
    [],
  );

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    [],
  );

  const handlePress = ({ year, month, day }: any) => {
    Alert.alert(`${year}년 ${month}월 ${day}일`);
    setDate(`${year}년 ${month}월 ${day}일`);
    bottomSheetModalRef.current?.close();
  };

  const { date, setDate } = selectDate();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={handlePresentModalPress}
            style={styles.open}
          >
            <Text style={styles.openText}>Open</Text>
            <FontAwesomeIcon icon={faCoffee} />
            <Text style={styles.openDate}>{date}</Text>
          </TouchableOpacity>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            onChange={handleSheetChanges}
            bottomInset={26}
            detached={true}
            handleStyle={styles.bottomSheetHandle}
            backgroundStyle={[styles.bottomSheetBackground]}
            style={styles.sheetContainer}
            enablePanDownToClose={false}
          >
            <View style={styles.center}>
              <DateSelect
                itemFontSize={18}
                itemHeight={50}
                pointColor={COLORS.defaultColor.main}
                pointBackgroundColor={COLORS.opacityColor.mint}
                handlePress={handlePress}
              />
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const Top6 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {
          return <TopHeader />;
        },
      }}
    >
      <Stack.Screen name="gab" component={GabTest} />
      <Stack.Screen name="doublestack" component={TestStack} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  min: {
    backgroundColor: COLORS.opacityColor.blue,
    flex: 1,
    height: 100,
  },
  max: {
    backgroundColor: COLORS.opacityColor.green,
    flex: 2,
    height: 100,
  },
  dd: {
    flex: 1,
    height: 150,
    backgroundColor: COLORS.opacityColor.mint,
  },
  container: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  body: { flex: 1, gap: 20, padding: 20 },
  text: {
    paddingTop: 20,
    paddingLeft: 20,
    fontFamily: FONTS.bold,
    lineHeight: 20,
    fontSize: 15,
  },
  open: {
    marginTop: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  openText: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    lineHeight: 23,
    color: COLORS.defaultColor.black,
  },
  openDate: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    lineHeight: 18,
    color: COLORS.defaultColor.deepGray,
  },
  color: {
    color: 'green',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctext: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    width: 356,
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
  pick: {
    height: Platform.select({
      ios: 160,
      android: 180,
    }),
    width: 356,
    backgroundColor: 'white',
  },
  sheetContainer: {
    marginHorizontal: 10,
  },
  bottomSheetHandle: {
    opacity: 0.3,
  },
  bottomSheetBackground: {
    borderRadius: 30,
  },
});

export default Top6;
