import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {CommonStyles} from 'theme/commonStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}

export const SafeBottomProvider: React.FC<ISafeContainer> = ({
  style,
  children,
}) => {
  const paddingBottom = useSafeAreaInsets().bottom;
  return (
    <View style={[CommonStyles.flex, {paddingBottom}, style]}>{children}</View>
  );
};
