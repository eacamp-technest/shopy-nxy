import React, {useCallback} from 'react';
import {View, StatusBar} from 'react-native';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {useFocusEffect} from '@react-navigation/native';
import {ISafeContainer} from 'types/safe.provider.types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const SafeTopProvider: React.FC<ISafeContainer> = ({
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

  const paddingTop = useSafeAreaInsets().top;
  return (
    <View style={[CommonStyles.flex, {paddingTop}, style]}>{children}</View>
  );
};
