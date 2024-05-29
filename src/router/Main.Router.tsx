import React from 'react';
import {Routes, StackRoutes} from './routes';
import {TabRouter} from './Tab.Router';
import {NavigationParamList} from 'types/navigation.types';
import {ListManScreen} from 'screens/item-lists/ListMan.Screen';
import {ListKidsScreen} from 'screens/item-lists/ListKids.Screen';
import {ListWomanScreen} from 'screens/item-lists/ListWoman.Screen';
import {ListTeensScreen} from 'screens/item-lists/ListTeens.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator<NavigationParamList>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.tabRouter}>
      <MainStack.Screen name={Routes.tabRouter} component={TabRouter} />
      <MainStack.Screen
        name={StackRoutes.listWoman}
        component={ListWomanScreen}
      />
      <MainStack.Screen name={StackRoutes.listMan} component={ListManScreen} />
      <MainStack.Screen
        name={StackRoutes.listKids}
        component={ListKidsScreen}
      />
      <MainStack.Screen
        name={StackRoutes.listTeens}
        component={ListTeensScreen}
      />
    </MainStack.Navigator>
  );
};
