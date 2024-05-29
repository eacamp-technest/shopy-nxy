import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {CartItem} from 'components/CartItem';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ListWomanScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listWoman>
> = ({navigation}) => {
  return (
    <SafeTopProvider
      style={styles.provider}
      content={'light-content'}
      statusBarColor={colors.red.base}>
      <NavBar
        title={'WOMAN'}
        leftColor={colors.white}
        leftOnPress={navigation.goBack}
        leftIcon={ImageResources.chevronLeft}
        styleTitle={styles.titleColor}
      />
      <CartItem
        size={'large'}
        image={require('../../assets/images/imageWoman.png')}
      />

      <View style={{flex: 1, backgroundColor: colors.white}}></View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.red.base,
  },
  titleColor: {
    color: colors.white,
  },
});
