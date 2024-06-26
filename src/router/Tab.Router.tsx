import React from 'react';
import {TabRoutes, Routes} from './routes';
import {HomeScreen} from 'screens/Home.Screen';
import {DiscoverScreen} from 'screens/Discover.Screen';
import {FavoriteScreen} from 'screens/Favorite.Screen';
import {SettingsScreen} from 'screens/Settings.Screen';
import {tabBarOption} from 'configs/navigation.configs';
import {NavigationParamList} from 'types/navigation.types';
import {NotificationScreen} from 'screens/Notification.Screen';
import {tabBottomScreenOption} from 'configs/navigation.configs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<NavigationParamList>();

export const TabRouter: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.tabRouter>
> = () => {
  return (
    <Tab.Navigator screenOptions={tabBottomScreenOption}>
      <Tab.Screen
        name={TabRoutes.home}
        component={HomeScreen}
        options={tabBarOption[TabRoutes.home]}
      />
      <Tab.Screen
        name={TabRoutes.discover}
        component={DiscoverScreen}
        options={tabBarOption[TabRoutes.discover]}
      />
      <Tab.Screen
        name={TabRoutes.favorite}
        component={FavoriteScreen}
        options={tabBarOption[TabRoutes.favorite]}
      />
      <Tab.Screen
        name={TabRoutes.notification}
        component={NotificationScreen}
        options={tabBarOption[TabRoutes.notification]}
      />
      <Tab.Screen
        name={TabRoutes.settings}
        component={SettingsScreen}
        options={tabBarOption[TabRoutes.settings]}
      />
    </Tab.Navigator>
  );
};
