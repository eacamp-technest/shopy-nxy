import React from 'react';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {SvgImage} from 'components/SvgImage';
import {ImageResources} from 'assets/VectorResources.g';
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

// AuthStackOption

export const authStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  contentStyle: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
  },
};

// TabBottomOption

export const renderTabIcon = (
  focused: boolean,
  iconName: keyof typeof ImageResources,
) => (
  <SvgImage
    source={ImageResources[iconName]}
    color={focused ? colors.primary.base : colors.skyDark}
  />
);

export const tabBottomScreenOption: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: colors.primary.base,
  tabBarInactiveTintColor: colors.skyDark,
  tabBarItemStyle: {
    // borderColor: colors.red.base,
    // borderWidth: 1,
  },
  tabBarStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderTopWidth: 0,
    height: normalize('height', 90),
    paddingHorizontal: normalize('horizontal', 25),
  },
};
