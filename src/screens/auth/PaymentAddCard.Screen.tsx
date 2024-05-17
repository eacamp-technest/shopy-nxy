import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {Routes} from 'router/routes';
import {colors} from 'theme/colors';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const PaymentAddCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.paymentAddCard>
> = ({navigation}) => {
  return (
    <SafeMainProvider>
      <NavBar
        leftColor={colors.ink.base}
        textRight={'Skip'}
        largeTitle={'ADD NEW CARD'}
        leftOnPress={navigation.goBack}
        leftIcon={ImageResources.chevronLeft}
      />
      <View style={styles.inputs}>
        <Input placeholder={'Enter your card number'} label={'Card Number'} />
        <Input
          label={'Cardholder Name'}
          placeholder={'Enter your holder name'}
        />
        <Input placeholder={'MM / YY / CVV'} />
      </View>
      <Button
        type={'primary'}
        text={'Add card'}
        position={'center'}
        onPress={() => navigation.navigate(Routes.paymentSaveCard)}
      />
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  inputs: {
    gap: normalize('vertical', 24),
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  },
});
