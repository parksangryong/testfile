import React, { useEffect, useRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

//bottomSheet
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalComponent } from '../Screen';

//zustand
import { bsRef } from './zustand';

//style
import { COLORS } from './Constants';

const BottomSheets = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef2 = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef3 = useRef<BottomSheetModal>(null);

  const { setRef, setRef2, setRef3, ref, ref2, ref3 } = bsRef();

  useEffect(() => {
    setRef(bottomSheetModalRef);
    setRef2(bottomSheetModalRef2);
    setRef3(bottomSheetModalRef3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BottomSheetModalComponent
        bottomSheetModalRef={bottomSheetModalRef}
        iosSnap={'70%'}
        andSnap={'60%'}
        children={
          <View>
            <StatusBar backgroundColor={COLORS.defaultColor.black} />
            <Text>1번 바텀시트</Text>
            <TouchableOpacity onPress={() => ref.current.close()}>
              <Text>닫기</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <BottomSheetModalComponent
        bottomSheetModalRef={bottomSheetModalRef2}
        iosSnap={'90%'}
        andSnap={'90%'}
        children={
          <View>
            <StatusBar backgroundColor={COLORS.defaultColor.black} />
            <Text>2번 바텀시트</Text>
            <TouchableOpacity onPress={() => ref2.current.close()}>
              <Text>닫기</Text>
            </TouchableOpacity>
          </View>
        }
      />
      <BottomSheetModalComponent
        bottomSheetModalRef={bottomSheetModalRef3}
        iosSnap={'50%'}
        andSnap={'40%'}
        children={
          <View>
            <StatusBar backgroundColor={COLORS.defaultColor.black} />
            <Text>3번 바텀시트</Text>
            <TouchableOpacity onPress={() => ref3.current.close()}>
              <Text>닫기</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </>
  );
};

export default BottomSheets;
