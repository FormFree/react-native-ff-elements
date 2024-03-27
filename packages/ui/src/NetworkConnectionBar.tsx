import { useContext, useEffect } from 'react';

import Toast from 'react-native-toast-message';
import { NetworkContext } from '@react-native-ff-elements/core';

const NetworkConnectionBar = () => {
  const network = useContext(NetworkContext);

  useEffect(() => {
    if (!network.state?.isConnected) {
      Toast.show({
        type: 'networkToast',
        text1: 'No internet connection',
        text2: 'Check your internet connection and try again.',
        position: 'top',
        visibilityTime: 5000,
        autoHide: false,
        topOffset: 70,
      });
    } else {
      Toast.hide();
    }
  }, [network.state?.isConnected]);

  return null;
};

export default NetworkConnectionBar;
