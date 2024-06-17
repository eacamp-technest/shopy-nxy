import {useCallback} from 'react';
import {StatusBar} from 'react-native';
import {isAndroid} from 'constants/common.consts';
import {StyleProp, ViewStyle} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

type TStatusBar = 'light-content' | 'dark-content';

export interface ISafeContainer {
  content?: TStatusBar;
  statusBarColorAndroid?: string;
  backColorSafeProvider?: string;
  customStyles?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
}

export const useSetStatusBar = (
  content: TStatusBar,
  statusBarColorAndroid: string,
) => {
  const setStatusBar = useCallback(() => {
    StatusBar.setBarStyle(content);
    if (isAndroid) {
      StatusBar.setBackgroundColor(statusBarColorAndroid);
    }
  }, [content, statusBarColorAndroid]);

  useFocusEffect(setStatusBar);
};
