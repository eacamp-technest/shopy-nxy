import React, {useCallback, useEffect, useState} from 'react';
import {AuthRouter} from './Auth.Router';
import {MainRouter} from './Main.Router';
import BootSplash from 'react-native-bootsplash';
import {useUserStore} from 'store/user/user.store';
import {OffLineScreen} from 'screens/OffLine.Screen';
import {NavigationContainer} from '@react-navigation/native';
import {addEventListener} from '@react-native-community/netinfo';

const delay = (ms: number, cb?: any) =>
  new Promise(resolve => setTimeout(resolve, ms, cb));

const Router = () => {
  const [ready, setReady] = useState<boolean>(false);
  const {
    user,
    actions: {initialize},
  } = useUserStore(state => state);

  const [isConnected, setConnection] = useState<boolean | null>(true);

  const init = useCallback(async () => {
    await delay(1000, initialize());
    setReady(true);
    await BootSplash.hide({fade: true});
  }, [initialize]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      setConnection(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  });

  if (!ready) {
    return null;
  }

  return (
    <NavigationContainer>
      {isConnected ? user ? <MainRouter /> : <AuthRouter /> : <OffLineScreen />}
    </NavigationContainer>
  );
};

export default Router;
