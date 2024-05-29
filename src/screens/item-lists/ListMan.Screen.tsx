import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {StackRoutes} from 'router/routes';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {ImageResources} from 'assets/VectorResources.g';
import {NavBar} from 'components/NavBar';
import {colors} from 'theme/colors';
import {CartItem} from 'components/CartItem';

export const ListManScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listMan>
> = ({navigation}) => {
  return (
    <SafeTopProvider
      style={styles.provider}
      content={'light-content'}
      statusBarColor={colors.red.base}>
      <NavBar
        leftColor={colors.white}
        title={'WOMAN'}
        leftOnPress={navigation.goBack}
        leftIcon={ImageResources.chevronLeft}
      />
      <CartItem
        size={'large'}
        image={require('../../assets/images/imageMan.png')}
      />

      <View style={{flex: 1, backgroundColor: colors.white}}></View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.blue.base,
  },
});
