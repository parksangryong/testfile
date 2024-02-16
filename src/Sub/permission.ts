import { check, PERMISSIONS, requestMultiple } from 'react-native-permissions';

//1. 권한 체크
export const checkAllPermissions = async (
  os: string,
  dispatch: (arg0: any) => void,
) => {
  let chk = true;
  if (os === 'android') {
    await Promise.all([
      check(PERMISSIONS.ANDROID.CAMERA),
      check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE),
      check(PERMISSIONS.ANDROID.READ_CONTACTS),
      check(PERMISSIONS.ANDROID.CALL_PHONE),
      check(PERMISSIONS.ANDROID.ANSWER_PHONE_CALLS),
      check(PERMISSIONS.ANDROID.RECORD_AUDIO),
    ])
      .then(data => {
        console.log('check permissions(android)', data);
        data.map(value => {
          if (value !== 'granted') {
            if (value !== 'blocked') {
              chk = false;
            }
          }
        });
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        dispatch(setPermissionChk(chk)); //체크상태 저장
      });
  } else {
    await Promise.all([
      check(PERMISSIONS.IOS.CAMERA),
      check(PERMISSIONS.IOS.PHOTO_LIBRARY),
      check(PERMISSIONS.IOS.CONTACTS),
      check(PERMISSIONS.IOS.MICROPHONE),
      check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY),
    ])
      .then(data => {
        console.log('check permissions(ios) result : ', data);
        // console.log('data[3] (APP_TRACKING_TRANSPARENCY) : ', data[3]);
        data.map(value => {
          if (value !== 'granted') {
            if (value !== 'blocked' && value !== 'unavailable') {
              chk = false;
            }
          }
        });
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        console.log('chk', chk);
        dispatch(setPermissionChk(chk)); //체크상태 저장
      });
  }
  return chk;
};

export const requestAndroidPermissionsChk = async (
  dispatch: (arg0: any) => void,
) => {
  //권한 요청
  requestMultiple([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.READ_CONTACTS,
    PERMISSIONS.ANDROID.CALL_PHONE,
    PERMISSIONS.ANDROID.ANSWER_PHONE_CALLS,
    PERMISSIONS.ANDROID.RECORD_AUDIO,
  ]).then(data => {
    console.log('request permissions(aos) result : ', data);
    dispatch(setPermissionChk(true));
  });
};

//3. iOS 모든 권한 요청
export const requestiOSPermissionsChk = async (
  dispatch: (arg0: any) => void,
) => {
  requestMultiple([
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
    PERMISSIONS.IOS.CONTACTS,
    PERMISSIONS.IOS.MICROPHONE,
  ]).then(data => {
    console.log('request permissions(ios)', data);
    dispatch(setPermissionChk(true));
  });
};
function setPermissionChk(_chk: boolean): any {
  throw new Error('Function not implemented.');
}
