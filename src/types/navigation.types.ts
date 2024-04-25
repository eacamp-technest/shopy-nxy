import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from 'router/routes';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
  [Routes.authRouter]: undefined;
  [Routes.mainRouter]: undefined;
  [Routes.onboarding]: undefined;
  [Routes.login]: undefined;
  [Routes.singUp]: undefined;
  [Routes.paymentMethod]: undefined;
  [Routes.verification]: undefined;
  [Routes.home]: undefined;
};
