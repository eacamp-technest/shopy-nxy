import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {TypographyStyles} from 'theme/typography';
import {StackRoutes, TabRoutes} from 'router/routes';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {TabViewExample} from 'components/TabBarViewCustom';
import {InStoresScreenTab} from './homeTabView/InStores.Screen';
import {ALLStoresScreenTab} from './homeTabView/ALLStores.Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const renderScene = {
  [StackRoutes.allStores]: ALLStoresScreenTab,
  [StackRoutes.inStores]: InStoresScreenTab,
};
const routes = [
  {key: StackRoutes.allStores, title: 'All Stores'},
  {key: StackRoutes.inStores, title: 'In-Store'},
];

export const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, TabRoutes.home>
> = ({navigation}) => {
  const Array = ['Nike,Adidas,AirMax,Puma,Abibas'];

  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.bdazzledBlue.darkest}
      statusBarColorAndroid={colors.bdazzledBlue.darkest}>
      <View style={styles.header}>
        <NavBar
          title={'SHOPPAY'}
          leftColor={colors.white}
          rightColor={colors.white}
          styleTitle={colors.white}
          leftIcon={ImageResources.menu}
          rightIcon={ImageResources.shoppingBag}
        />
        <Input
          type={'text'}
          icon={ImageResources.search}
          style={styles.input}
          placeholder={'Search brand, products...'}
          onInputPress={() =>
            navigation.navigate(StackRoutes.search, {
              headerTitle: 'Search products',
              items: Array,
            })
          }
        />
      </View>
      <TabViewExample
        screens={routes}
        style={styles.tabStyles}
        focusTitle={styles.title}
        titleStyle={styles.tabTitle}
        disabledFocusTitle={styles.title}
        renderSceneProps={renderScene}
      />
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: normalize('horizontal', 24),
    gap: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 24),
  },
  input: {
    backgroundColor: colors.white,
  },
  tabBar: {
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  indicatorStyle: {
    backgroundColor: colors.skyBlue.base,
  },
  title: {
    paddingHorizontal: normalize('horizontal', 20),
    ...TypographyStyles.RegularNoneSemibold,
    color: colors.white,
  },
  titleFocused: {
    color: colors.skyBlue.base,
  },

  tabStyles: {
    // backgroundColor: 'green',
  },

  tabTitle: {
    paddingHorizontal: normalize('horizontal', 20),
    ...TypographyStyles.RegularNoneSemibold,
    color: colors.skyBlue.base,
  },
});
