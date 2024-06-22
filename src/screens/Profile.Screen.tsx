import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Avatar} from 'components/Avatar';
import {StackRoutes} from 'router/routes';
import {MainTab} from 'components/MainTab';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ProfileScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.profile>
> = ({navigation}) => {
  return (
    <SafeTopProvider
      statusBarColorAndroid={colors.mellow.base}
      backColorSafeProvider={colors.mellow.base}>
      <View style={styles.root}>
        <NavBar
          title={'PROFILE'}
          styleTitle={colors.ink.base}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.bdazzledBlue.blueBase}
        />
        <Avatar
          size={'extraLarge'}
          name={'Nadir Musayev'}
          email={'msyv.nadir@gmail.com'}
          image={require('../assets/images/Ellipse7.png')}
        />
      </View>
      <View style={styles.main}>
        <MainTab
          title={'Email'}
          caption={'msyv.nadir@gmail.com'}
          leftIcon={ImageResources.mail}
          rightIcon={ImageResources.chevronRight}
        />
        <MainTab
          title={'Birthday'}
          caption={'01-01-1991'}
          leftIcon={ImageResources.calendar}
          rightIcon={ImageResources.chevronRight}
        />
        <MainTab
          title={'Phone Number'}
          caption={'(+99450594-54-54)'}
          leftIcon={ImageResources.smartphone}
          rightIcon={ImageResources.chevronRight}
        />
        <MainTab
          title={'Change Password'}
          caption={'*****************'}
          leftIcon={ImageResources.lock}
          rightIcon={ImageResources.chevronRight}
        />
      </View>
    </SafeTopProvider>
  );
};

const paddingMain = normalize('horizontal', 24);

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingHorizontal: paddingMain,
    gap: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 40),
  },
  main: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: paddingMain,
    paddingTop: normalize('vertical', 16),
  },
});
