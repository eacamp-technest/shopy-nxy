import React from 'react';
import {Routes} from './routes';
import {TabRouter} from './Tab.Router';
import {NavigationParamList} from 'types/navigation.types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator<NavigationParamList>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.tabRouter}>
      <MainStack.Screen name={Routes.tabRouter} component={TabRouter} />
    </MainStack.Navigator>
  );
};
