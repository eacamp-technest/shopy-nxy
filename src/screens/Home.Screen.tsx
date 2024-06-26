import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from 'theme/colors';
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {windowWidth} from 'theme/const.styles';
import {TypographyStyles} from 'theme/typography';
import {StackRoutes, TabRoutes} from 'router/routes';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {InStoresScreenTab} from './homeTabView/InStores.Screen';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ALLStoresScreenTab} from './homeTabView/ALLStores.Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const renderScene = SceneMap({
  [StackRoutes.allStores]: ALLStoresScreenTab,
  [StackRoutes.inStores]: InStoresScreenTab,
});
const routes = [
  {key: StackRoutes.allStores, title: 'All Stores'},
  {key: StackRoutes.inStores, title: 'In-Store'},
];

export const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, TabRoutes.home>
> = ({navigation}) => {
  const [index, setIndex] = useState<number>(0);

  const Array = ['Nike,Adidas,AirMax,Puma,Abibas'];

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBar}
      renderLabel={({route, focused}) => (
        <Text
          style={[
            styles.title,
            focused ? styles.titleFocused : styles.titleNoFocused,
          ]}>
          {route.title}
        </Text>
      )}
    />
  );

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
              // onItemPress: item => console.log('item pressed ', item),
            })
          }
        />
      </View>
      <TabView
        swipeEnabled={true}
        onIndexChange={setIndex}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        initialLayout={{width: windowWidth}}
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
  titleNoFocused: {
    ...TypographyStyles.RegularNoneRegular,
    color: colors.white,
  },
});
