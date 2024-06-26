import React from 'react';
import {TabRouter} from './Tab.Router';
import {Routes, StackRoutes} from './routes';
import {OrderScreen} from 'screens/Order.Screen';
import {SearchScreen} from 'screens/Search.Screen';
import {ProfileScreen} from 'screens/Profile.Screen';
import {ScannerScreen} from 'screens/Scanner.Screen';
import {NavigationParamList} from 'types/navigation.types';
import {searchScreenOptions} from 'configs/navigation.configs';
import {ReviewRatingScreen} from 'screens/ReviewRating.Screen';
import {ListManScreen} from 'screens/item-lists/ListMan.Screen';
import {ProductDetailScreen} from 'screens/ProductDetail.Screen';
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
      <MainStack.Screen
        name={StackRoutes.productDetail}
        component={ProductDetailScreen}
      />
      <MainStack.Screen
        name={StackRoutes.reviewRating}
        component={ReviewRatingScreen}
      />
      <MainStack.Screen name={StackRoutes.profile} component={ProfileScreen} />
      <MainStack.Screen name={StackRoutes.order} component={OrderScreen} />
      <MainStack.Screen
        name={StackRoutes.search}
        component={SearchScreen}
        options={searchScreenOptions}
      />
      <MainStack.Screen name={StackRoutes.scanner} component={ScannerScreen} />
    </MainStack.Navigator>
  );
};
