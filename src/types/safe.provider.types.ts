import {useCallback} from 'react';
import {StyleProp, ViewStyle, StatusBar} from 'react-native';
import {colors} from 'theme/colors';
import {useFocusEffect} from '@react-navigation/native';

type TStatusBar = 'default' | 'light-content' | 'dark-content';

export interface ISafeContainer {
  content?: TStatusBar;
  statusBarColor?: string;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
}

export const useSetStatusBar = (
  content: TStatusBar,
  statusBarColor: string,
) => {
  const setStatusBar = useCallback(() => {
    StatusBar.setBarStyle(content);
    StatusBar.setBackgroundColor(statusBarColor);
    return () => {
      StatusBar.setBarStyle('default');
      StatusBar.setBackgroundColor(colors.white);
    };
  }, [content, statusBarColor]);

  useFocusEffect(setStatusBar);
};
