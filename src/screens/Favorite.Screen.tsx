import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {windowWidth} from 'theme/const.styles';
import {TypographyStyles} from 'theme/typography';
import {StackRoutes, TabRoutes} from 'router/routes';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {BoardsScreen} from './favoriteTabView/Boards.Screen';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ALLItemsScreen} from './favoriteTabView/ALLItems.Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const renderScene = SceneMap({
  [StackRoutes.allItems]: ALLItemsScreen,
  [StackRoutes.boards]: BoardsScreen,
});

const routes = [
  {key: StackRoutes.allItems, title: 'All Items'},
  {key: StackRoutes.boards, title: 'Boards'},
];

export const FavoriteScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, TabRoutes.favorite>
> = () => {
  const [index, setIndex] = useState<number>(0);

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
      style={colors.bdazzledBlue.darkest}
      content={'light-content'}
      statusBarColor={colors.bdazzledBlue.darkest}>
      <View style={styles.header}>
        <NavBar styleTitle={colors.white} title={'SAVED ITEMS'} />
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
    paddingBottom: normalize('vertical', 16),
  },
  tabBar: {
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  indicatorStyle: {
    backgroundColor: colors.skyBlue.base,
  },
  title: {
    paddingVertical: normalize('vertical', 16),
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
