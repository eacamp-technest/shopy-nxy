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
import {normalize} from 'theme/metrics';

export const ListWomanScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listWoman>
> = ({navigation}) => {
  return (
    <SafeTopProvider
      style={colors.red.base}
      content={'light-content'}
      statusBarColor={colors.red.base}>
      <View style={styles.navBar}>
        <NavBar
          title={'WOMAN'}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>

      <CartItem
        size={'large'}
        image={require('../../assets/images/imageWoman.png')}
      />
      <View style={styles.main} />
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  navBar: {
    paddingHorizontal: normalize('horizontal', 24),
  },
});
