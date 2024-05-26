import {StyleProp, ViewStyle} from 'react-native';

type TStatusBar = 'default' | 'dark-content';

export interface ISafeContainer {
  content?: TStatusBar;
  statusBarColor?: string;
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
}
