import {Routes, StackRoutes, TabRoutes} from 'router/routes';
import {ILoginForm} from 'screens/auth/Login.Screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
  [Routes.authRouter]: undefined;
  [Routes.mainRouter]: undefined;
  [Routes.onboarding]: undefined;
  [Routes.login]: undefined;
  [Routes.singUp]: undefined;
  [Routes.paymentScreensTab]: undefined;
  [Routes.paymentMethod]: undefined;
  [Routes.addNewCard]: undefined;
  [Routes.saveCard]: undefined;
  [Routes.yourCard]: undefined;
  [Routes.verification]: ILoginForm;
  [Routes.tabRouter]: undefined;
  [TabRoutes.home]: undefined;
  [TabRoutes.search]: undefined;
  [TabRoutes.favorite]: undefined;
  [TabRoutes.notification]: undefined;
  [TabRoutes.settings]: undefined;
  [StackRoutes.listWoman]: undefined;
  [StackRoutes.listMan]: undefined;
  [StackRoutes.listKids]: undefined;
  [StackRoutes.listTeens]: undefined;
  [StackRoutes.productDetail]: undefined;
  [StackRoutes.reviewRating]: undefined;
  [StackRoutes.allItems]: undefined;
  [StackRoutes.boards]: undefined;
  [StackRoutes.allStores]: undefined;
  [StackRoutes.inStores]: undefined;
  [StackRoutes.profile]: undefined;
};
