import {Routes, StackRoutes, TabRoutes} from 'router/routes';
import {ILoginForm} from 'screens/auth/Login.Screen';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;
import {ICardProduct} from 'components/CardProduct';

interface ISearchInterface extends NativeStackNavigationOptions {
  items?: ICardProduct[];
  onItemPress?: (item: ICardProduct) => void;
}

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
  [StackRoutes.search]: ISearchInterface;
  [TabRoutes.favorite]: undefined;
  [TabRoutes.notification]: undefined;
  [TabRoutes.settings]: undefined;
  [TabRoutes.discover]: undefined;
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
  [StackRoutes.order]: undefined;
  [StackRoutes.processing]: undefined;
  [StackRoutes.delivered]: undefined;
  [StackRoutes.cancelled]: undefined;
  [StackRoutes.scanner]: undefined;
  [StackRoutes.mostPopular]: undefined;
};

export type BottomTabNavigationOptions = {};
