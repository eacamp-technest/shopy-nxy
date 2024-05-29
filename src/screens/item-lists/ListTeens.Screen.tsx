import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {StackRoutes} from 'router/routes';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {colors} from 'theme/colors';
import {ImageResources} from 'assets/VectorResources.g';
import {CartItem} from 'components/CartItem';
import {NavBar} from 'components/NavBar';

export const ListTeensScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listTeens>
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
        image={require('../../assets/images/imageTeens.png')}
      />

      <View style={{flex: 1, backgroundColor: colors.white}}></View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.lavender.base,
  },
});
