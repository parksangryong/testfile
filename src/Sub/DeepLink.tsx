import { Alert, Linking, Platform } from 'react-native';
import VersionCheck from 'react-native-version-check';

export const AppVersionCheck = async () => {
  console.log('첫 진입 시작', Platform.OS);

  try {
    // 기기에 설치되 있는 버전 확인
    let CurrentVersion = await VersionCheck.getCurrentVersion();
    console.log(CurrentVersion, Platform.OS);

    // 앱의 최신버전 확인
    let LatestVersion = await VersionCheck.getLatestVersion({
      provider: Platform.OS === 'ios' ? 'appStore' : 'playStore',
      //forceUpdate: true,     //강제 업데이트 시 사용
    });
    console.log(LatestVersion, Platform.OS);

    //appStore url => 지워도 됨
    VersionCheck.getStoreUrl({ appID: '1669677803' }).then((res: any) => {
      console.log(res);
    });

    //playStore url => 지워도 됨
    VersionCheck.getPlayStoreUrl({ packageName: 'com.hkcommsv' }).then(
      (res: any) => {
        console.log(res);
      },
    );

    // 기기에 설치되있는 버전과 앱에 올려져있는 최신버전을 비교
    let updateNeeded = await VersionCheck.needUpdate({
      currentVersion: CurrentVersion,
      latestVersion: LatestVersion,
    });

    console.log('updateNeeded', updateNeeded);

    if (updateNeeded.isNeeded) {
      Alert.alert('필수 업데이트 사항이 있습니다.', '', [
        {
          text: '스토어 이동',
          onPress: async () => {
            if (Platform.OS === 'android') {
              Linking.openURL(
                await VersionCheck.getPlayStoreUrl({
                  packageName: 'com.hkcommsv',
                }),
              );
            } else {
              Linking.openURL(
                await VersionCheck.getStoreUrl({ appID: '1669677803' }),
              );
            }
          },
        },
      ]);
    }
  } catch (error) {
    console.error('버전 확인 중 오류 발생:', error);
  }
};
