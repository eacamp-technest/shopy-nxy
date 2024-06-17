import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {CardCategory} from 'components/CardCategory';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ListTeensScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listTeens>
> = ({navigation}) => {
  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.lavender.base}
      statusBarColorAndroid={colors.lavender.base}>
      <View style={styles.navBar}>
        <NavBar
          title={'TEENS'}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>
      <CardCategory
        size={'large'}
        image={require('../../assets/images/teensLarge.png')}
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
