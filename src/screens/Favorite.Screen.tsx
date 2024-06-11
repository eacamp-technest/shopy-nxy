import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {windowWidth} from 'theme/const.styles';
import {StackRoutes, TabRoutes} from 'router/routes';
import {TabView, SceneMap} from 'react-native-tab-view';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {BoardsScreen} from './favoriteTabView/Boards.Screen';
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
        navigationState={{index, routes}}
        initialLayout={{width: windowWidth}}
      />
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    gap: normalize('vertical', 24),
    paddingHorizontal: normalize('horizontal', 24),
    paddingBottom: 16,
  },
});
