import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from 'router/routes';
import {ILoginForm} from 'screens/auth/Login.Screen';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
  [Routes.authRouter]: undefined;
  [Routes.mainRouter]: undefined;
  [Routes.onboarding]: undefined;
  [Routes.login]: undefined;
  [Routes.singUp]: undefined;
  [Routes.paymentMethod]: undefined;
  [Routes.paymentSaveCard]: undefined;
  [Routes.verification]: {
    email: ILoginForm;
    password: ILoginForm;
  };
  [Routes.home]: undefined;
};
