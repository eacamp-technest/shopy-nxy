import React from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TabRoutes} from 'router/routes';
import {SvgImage} from 'components/SvgImage';
import {screenHeight} from 'theme/const.styles';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

const tabHeight = screenHeight <= 667 ? 55 : 90;
const tabBottom = screenHeight <= 667 ? 15 : 30;

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
  animation: 'ios',
  contentStyle: {
    backgroundColor: colors.white,
  },
};

// ! AUTH Options

export const authStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  contentStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
  },
};

// ! MainStack Options

interface ISearchScreenOption extends NativeStackNavigationOptions {
  items?: string[] | null;
}

export const searchScreenOptions: ISearchScreenOption = {
  ...defaultScreenOptions,
  headerTitle: 'Search products',
  headerLargeTitle: true,
  presentation: 'formSheet',
  headerShown: true,
  headerSearchBarOptions: {
    autoFocus: true,
    inputType: 'text',
    textColor: 'gray',
    hideWhenScrolling: false,
    // onChangeText(e) {
    //   const text = e.nativeEvent.text;
    //   console.log(text);
    // },
  },
};

// ! Tab Options

export const tabBottomScreenOption: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: colors.primary.base,
  tabBarInactiveTintColor: colors.skyDark,
  tabBarStyle: {
    shadowOpacity: 0.05,
    borderTopWidth: 0.05,
    height: tabHeight,
    paddingHorizontal: normalize('horizontal', 25),
    paddingBottom: normalize('vertical', tabBottom),
  },
};

const tabIconConfig: {[key: string]: NodeRequire} = {
  [TabRoutes.home]: require('../assets/vectors/home.svg'),
  [TabRoutes.discover]: require('../assets/vectors/search.svg'),
  [TabRoutes.favorite]: require('../assets/vectors/heartWhite.svg'),
  [TabRoutes.notification]: require('../assets/vectors/bell.svg'),
  [TabRoutes.settings]: require('../assets/vectors/settings.svg'),
};

// export const renderTabIcon = (
//   color: string,
//   iconName: keyof typeof ImageResources,
// ) => <SvgImage source={ImageResources[iconName]} color={color} />;

const renderTabIcon =
  (routeName: TabRoutes) =>
  ({color}: {color: string}) => {
    return (
      <SvgImage
        source={tabIconConfig[routeName]}
        width={24}
        height={24}
        color={color}
      />
    );
  };

export const tabBarOption = {
  [TabRoutes.home]: {
    tabBarIcon: renderTabIcon(TabRoutes.home),
  },
  [TabRoutes.discover]: {
    tabBarIcon: renderTabIcon(TabRoutes.discover),
  },
  [TabRoutes.favorite]: {
    tabBarIcon: renderTabIcon(TabRoutes.favorite),
  },
  [TabRoutes.notification]: {
    tabBarIcon: renderTabIcon(TabRoutes.notification),
  },
  [TabRoutes.settings]: {
    tabBarIcon: renderTabIcon(TabRoutes.settings),
  },
};
