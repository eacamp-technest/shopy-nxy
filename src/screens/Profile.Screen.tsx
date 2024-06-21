import React from 'react';
import {View, Text} from 'react-native';
import {StackRoutes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ProfileScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.profile>
> = ({}) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};
