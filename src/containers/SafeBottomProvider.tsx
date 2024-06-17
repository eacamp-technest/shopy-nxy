import React from 'react';
import {View} from 'react-native';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {ISafeContainer, useSetStatusBar} from 'types/safe.provider.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeBottomProvider: React.FC<ISafeContainer> = ({
  backColorSafeProvider,
  children,
  customStyles,
  content = 'dark-content',
  statusBarColorAndroid = colors.white,
}) => {
  useSetStatusBar(content, statusBarColorAndroid);
  const paddingBottom = useSafeAreaInsets().bottom;
  return (
    <View
      style={[
        CommonStyles.flex,
        {paddingBottom},
        {backgroundColor: backColorSafeProvider},
        customStyles,
      ]}>
      {children}
    </View>
  );
};
