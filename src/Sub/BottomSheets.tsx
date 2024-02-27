import React, { useEffect, useRef } from 'react';
import { BottomSheetModalComponent } from '../Screen';
import { View, Text } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { bsRef } from './zustand';

const BottomSheets = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef2 = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef3 = useRef<BottomSheetModal>(null);

  const { setRef, setRef2, setRef3 } = bsRef();

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
            <Text>1번 바텀시트</Text>
          </View>
        }
      />
      <BottomSheetModalComponent
        bottomSheetModalRef={bottomSheetModalRef2}
        iosSnap={'50%'}
        andSnap={'40%'}
        children={
          <View>
            <Text>2번 바텀시트</Text>
          </View>
        }
      />
      <BottomSheetModalComponent
        bottomSheetModalRef={bottomSheetModalRef3}
        iosSnap={'20%'}
        andSnap={'15%'}
        children={
          <View>
            <Text>3번 바텀시트</Text>
          </View>
        }
      />
    </>
  );
};

export default BottomSheets;
