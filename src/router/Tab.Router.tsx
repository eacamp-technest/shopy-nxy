import React from 'react';
import {TabRoutes, Routes} from './routes';
import {HomeScreen} from 'screens/Home.Screen';
import {SearchScreen} from 'screens/Search.Screen';
import {FavoriteScreen} from 'screens/Favorite.Screen';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<NavigationParamList>();

export const TabRouter: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.tabRouter>
> = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={TabRoutes.home} component={HomeScreen} />
      <Tab.Screen name={TabRoutes.search} component={SearchScreen} />
      <Tab.Screen name={TabRoutes.favorite} component={FavoriteScreen} />
    </Tab.Navigator>
  );
};
