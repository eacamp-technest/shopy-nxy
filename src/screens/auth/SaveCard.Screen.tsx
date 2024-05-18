import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Routes} from 'router/routes';
import {colors} from 'theme/colors';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {BankCard} from 'components/BankCard';
import {CommonStyles} from 'theme/commonStyles';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SaveCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.saveCard>
> = ({navigation}) => {
  return (
    <SafeTopProvider>
      <ScrollView
        scrollEnabled={false}
        style={CommonStyles.flex}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.flex}>
        <NavBar
          title={'YOUR CARD'}
          leftColor={colors.ink.base}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
        <View style={styles.card}>
          <BankCard disabled={true} />
        </View>
        <View style={styles.inputs}>
          <Input placeholder={'4532 1245 8765 2156'} label={'Card Number'} />
          <Input placeholder={'Brooklyn Simmons'} label={'Cardholder Name'} />
          <Input placeholder={'12 / 24  /  088'} />
        </View>
        <Button
          text={'Save'}
          type={'primary'}
          position={'center'}
          onPress={() => console.log('SAVE')}
        />
      </ScrollView>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  inputs: {
    gap: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 118),
  },
  card: {
    marginTop: normalize('vertical', 24),
    marginBottom: normalize('vertical', 32),
  },
});
