import React, { useMemo, useCallback } from 'react';
import { Platform } from 'react-native';
// bottom-sheet
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';

const BottomSheetModalComponent = ({
  bottomSheetModalRef,
  children,
  iosSnap,
  andSnap,
}: any) => {
  /** 바텀시트 높이 */
  const snapPoints = useMemo(
    () => (Platform.OS === 'ios' ? [iosSnap] : [andSnap]),
    [],
  );

  /** 백드롭 */
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.8}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      {children}
    </BottomSheetModal>
  );
};

export default BottomSheetModalComponent;
