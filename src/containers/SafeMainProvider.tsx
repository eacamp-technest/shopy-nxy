import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CommonStyles} from 'theme/commonStyles';

interface ISafeContainer {
  children: JSX.Element | JSX.Element[];
}

export const SafeMainProvider: React.FC<ISafeContainer> = ({children}) => {
  const paddingTop = useSafeAreaInsets().top;
  const paddingBottom = useSafeAreaInsets().bottom;
  return (
    <View style={[CommonStyles.flex, {paddingTop, paddingBottom}]}>
      {children}
    </View>
  );
};
