import React, { useCallback, useMemo, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Test6 = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['40%'], []);

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

  const scaleValue = useRef(new Animated.Value(1)).current;
  const colorValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  const buttonColor = colorValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['white', '#f2f3f5'],
  });

  const animateButtonIn = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(colorValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateButtonOut = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(colorValue, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // renders
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <TouchableOpacity onPress={handlePresentModalPress}>
            <Text>Open</Text>
          </TouchableOpacity>

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            onChange={handleSheetChanges}
            bottomInset={46}
            detached={true}
            handleStyle={styles.bottomSheetHandle}
            backgroundStyle={[styles.bottomSheetBackground]}
            style={styles.sheetContainer}
          >
            <View style={styles.contentContainer}>
              <View style={styles.header}>
                <Text style={styles.h1}>정렬선택</Text>
              </View>
              <TouchableOpacity
                style={styles.btntext}
                onPress={animateButton}
                activeOpacity={1}
              >
                <Animated.View
                  style={[
                    styles.btntext,
                    {
                      opacity: opacityValue,
                    },
                  ]}
                >
                  <Text style={styles.h3}>최신순</Text>
                </Animated.View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.btntext]}
                onPressIn={animateButtonIn}
                onPressOut={animateButtonOut}
                activeOpacity={1}
              >
                <Animated.View
                  style={[
                    styles.btntext,
                    {
                      transform: [{ scale: scaleValue }],
                      backgroundColor: buttonColor,
                    },
                  ]}
                >
                  <Text style={[styles.h3]}>오래된 순</Text>
                </Animated.View>
              </TouchableOpacity>
            </View>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetContainer: {
    marginHorizontal: 24,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bottomSheetHandle: {
    borderWidth: 1,
    height: 30,
    opacity: 0,
  },
  bottomSheetBackground: {
    borderRadius: 45,
  },
  text: {
    fontSize: 20,
    color: '#333',
    letterSpacing: -0.7,
    lineHeight: 25,
  },
  header: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btntext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 30,
  },
  h1: { fontSize: 30 },
  h3: { fontSize: 20, color: 'black' },
});

export default Test6;
