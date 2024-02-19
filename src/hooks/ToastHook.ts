import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

type ToastType = {
  type?: string;
  icon?: string;
  text: string;
};

const useCustomToast = () => {
  const showToast = ({ type, icon, text }: ToastType) => {
    Toast.show({
      type: type,
      text1: icon,
      text2: text,
      position: 'bottom',
      bottomOffset: 100,
      visibilityTime: 2500,
    });
  };

  const successGrayToast = ({ icon, text }: ToastType) => {
    showToast({ type: 'successGray', icon, text });
  };

  const successWhiteToast = ({ icon, text }: ToastType) => {
    showToast({ type: 'successWhite', icon, text });
  };

  const successYellowToast = ({ icon, text }: ToastType) => {
    showToast({ type: 'successYellow', icon, text });
  };

  useEffect(() => {
    return () => {
      Toast.hide();
    };
  }, []);

  return { successGrayToast, successWhiteToast, successYellowToast };
};

export default useCustomToast;
