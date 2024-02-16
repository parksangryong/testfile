import Toast from 'react-native-toast-message';

export const ShowToast = ({ type, icon, text }: any) => {
  Toast.show({
    type: type,
    text1: icon,
    text2: text,
    position: 'bottom',
    bottomOffset: 100,
    visibilityTime: 2500,
  });
};
