import React from 'react';
import {TabRoutes, Routes} from './routes';
import {HomeScreen} from 'screens/Home.Screen';
import {DiscoveryScreen} from 'screens/Discovery.Screen';
import {FavoriteScreen} from 'screens/Favorite.Screen';
import {SettingsScreen} from 'screens/Settings.Screen';
import {renderTabIcon} from 'configs/navigation.configs';
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
        options={{tabBarIcon: ({focused}) => renderTabIcon(focused, 'homeTab')}}
      />
      <Tab.Screen
        name={TabRoutes.discovery}
        component={DiscoveryScreen}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(focused, 'searchTab'),
        }}
      />
      <Tab.Screen
        name={TabRoutes.favorite}
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(focused, 'favoriteTab'),
        }}
      />
      <Tab.Screen
        name={TabRoutes.notification}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(focused, 'notificationTab'),
        }}
      />
      <Tab.Screen
        name={TabRoutes.settings}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => renderTabIcon(focused, 'settingsTab'),
        }}
      />
    </Tab.Navigator>
  );
};
