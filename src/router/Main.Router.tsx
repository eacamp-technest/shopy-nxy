import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from 'screens/Home.Screen';
import {Routes} from './routes';
import {NavigationParamList} from 'types/navigation.types';

const MainStack = createNativeStackNavigator<NavigationParamList>();

export const MainRouter = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        options={{headerShown: false}}
        name={Routes.home}
        component={HomeScreen}
      />
    </MainStack.Navigator>
  );
};
