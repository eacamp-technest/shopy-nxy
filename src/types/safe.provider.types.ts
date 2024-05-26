import {StyleProp, ViewStyle} from 'react-native';

type TStatusBar = 'default' | 'light-content' | 'dark-content';

export interface ISafeContainer {
  content?: TStatusBar;
  statusBarColor?: string;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
}
