import React from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TabRoutes} from 'router/routes';
import {SvgImage} from 'components/SvgImage';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',
  animation: 'ios',
  contentStyle: {
    backgroundColor: colors.white,
  },
};

//  AuthOption

export const authStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  contentStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
  },
};

// TabBottomOption

export const tabBottomScreenOption: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: colors.primary.base,
  tabBarInactiveTintColor: colors.skyDark,
  tabBarStyle: {
    shadowOpacity: 0.05,
    borderTopWidth: 0.05,
    height: normalize('height', 90),
    paddingHorizontal: normalize('horizontal', 25),
  },
};

const tabIconConfig: {[key: string]: NodeRequire} = {
  [TabRoutes.home]: require('../assets/vectors/home.svg'),
  [TabRoutes.search]: require('../assets/vectors/search.svg'),
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
  [TabRoutes.search]: {
    tabBarIcon: renderTabIcon(TabRoutes.search),
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
