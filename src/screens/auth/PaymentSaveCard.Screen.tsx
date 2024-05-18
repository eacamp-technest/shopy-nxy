import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {NavBar} from 'components/NavBar';
import {colors} from 'theme/colors';
import {ImageResources} from 'assets/VectorResources.g';
import {BankCard} from 'components/BankCard';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';

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
      <BankCard />
      <View style={styles.inputs}>
        <Input placeholder={'4532 1245 8765 2156'} label={'Card Number'} />
        <Input placeholder={'Brooklyn Simmons'} label={'Cardholder Name'} />
        <Input placeholder={'12 / 24  /  088'} />
      </View>
      <Button text={'Save'} type={'primary'} position={'center'} />
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  inputs: {
    gap: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 118),
  },
});
