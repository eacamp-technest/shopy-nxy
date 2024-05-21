import React from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {CommonStyles} from 'theme/commonStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ISafeContainer {
  style?: StyleProp<ViewStyle>;
  children: JSX.Element | JSX.Element[];
}

export const SafeMainProvider: React.FC<ISafeContainer> = ({
  style,
  children,
}) => {
  const paddingTop = useSafeAreaInsets().top;
  const paddingBottom = useSafeAreaInsets().bottom;
  return (
    <View style={[CommonStyles.flex, {paddingTop, paddingBottom}, style]}>
      {children}
    </View>
  );
};
