import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CommonStyles} from 'theme/commonStyles';

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
}

export const SafeBottomProvider: React.FC<ISafeContainer> = ({children}) => {
  const paddingBottom = useSafeAreaInsets().bottom;
  return <View style={[CommonStyles.flex, {paddingBottom}]}>{children}</View>;
};
