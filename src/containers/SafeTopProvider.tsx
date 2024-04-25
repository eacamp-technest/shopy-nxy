import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CommonStyles} from 'theme/commonStyles';

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
}

export const SafeTopProvider: React.FC<ISafeContainer> = ({children}) => {
  const paddingTop = useSafeAreaInsets().top;
  return <View style={[CommonStyles.flex, {paddingTop}]}>{children}</View>;
};
