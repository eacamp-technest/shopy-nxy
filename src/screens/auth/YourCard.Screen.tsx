import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Routes} from 'router/routes';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {BankCard} from 'components/BankCard';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const YourCardScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.yourCard>
> = ({navigation}) => {
  return (
    <SafeMainProvider>
      <NavBar
        title={'YOUR CARD'}
        leftColor={colors.ink.base}
        leftOnPress={navigation.goBack}
        leftIcon={ImageResources.chevronLeft}
      />
      <View style={styles.card}>
        <BankCard />
      </View>
      <Button text={'Add new card'} type={'outlined'} position={'center'} />
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: normalize('vertical', 24),
    marginBottom: normalize('vertical', 32),
  },
});
