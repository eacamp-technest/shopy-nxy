import React from 'react';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {NavBar} from 'components/NavBar';
import {colors} from 'theme/colors';
import {ImageResources} from 'assets/VectorResources.g';

export const PaymentSaveCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.paymentSaveCard>
> = ({navigation}) => {
  return (
    <SafeMainProvider>
      <NavBar
        title={'YOUR CARD'}
        leftColor={colors.ink.base}
        leftOnPress={navigation.goBack}
        leftIcon={ImageResources.chevronLeft}
      />
    </SafeMainProvider>
  );
};
