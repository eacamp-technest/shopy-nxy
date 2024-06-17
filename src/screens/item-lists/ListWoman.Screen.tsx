import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {CardCategory} from 'components/CardCategory';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ListWomanScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listWoman>
> = ({navigation}) => {
  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.red.base}
      statusBarColorAndroid={colors.red.base}>
      <View style={styles.navBar}>
        <NavBar
          title={'WOMAN'}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>
      <CardCategory
        size={'large'}
        image={require('../../assets/images/womanLarge.png')}
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
