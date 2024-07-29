import React from 'react';
import {View, Text} from 'react-native';
import {StackRoutes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const CheckOutScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.checkout>
> = ({}) => {
  return (
    <SafeMainProvider>
      <View>
        <Text>CheckOutScreen</Text>
      </View>
    </SafeMainProvider>
  );
};
