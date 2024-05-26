import React, {useCallback} from 'react';
import {View, StatusBar} from 'react-native';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {ISafeContainer} from 'types/safe.provider.types';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeBottomProvider: React.FC<ISafeContainer> = ({
  style,
  children,
  content = 'default',
  statusBarColor = colors.white,
}) => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(content);
      StatusBar.setBackgroundColor(statusBarColor);
      return () => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor(colors.white);
      };
    }, [statusBarColor, content]),
  );

  const paddingBottom = useSafeAreaInsets().bottom;
  return (
    <View style={[CommonStyles.flex, {paddingBottom}, style]}>{children}</View>
  );
};
