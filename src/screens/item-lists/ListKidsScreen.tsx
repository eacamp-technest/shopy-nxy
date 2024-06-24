import React from 'react';
import {View} from 'react-native';
import {colors} from 'theme/colors';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {CardCategory} from 'components/CardCategory';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IMainTab} from 'components/MainTab';
import {styles} from './ListKids.Screen';

export const ListKidsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listKids>
> = ({navigation}) => {
  const renderTabList = ({
    index,
    item: {title, leftIcon},
  }: {
    index: number;
    item: IMainTab;
  }) => {
    return <MainTab key={index} title={title} rightIcon={leftIcon} />;
  };
  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.skyBlue.base}
      statusBarColorAndroid={colors.skyBlue.base}>
      <View style={styles.navBar}>
        <NavBar
          title={'KIDS'}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>

      <CardCategory
        size={'large'}
        image={require('../../assets/images/kidsLarge.png')}
      />
      <View style={styles.main} />
    </SafeTopProvider>
  );
};
