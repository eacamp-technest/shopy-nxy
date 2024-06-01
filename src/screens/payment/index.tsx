import React, {useEffect, useState} from 'react';
import {Routes} from 'router/routes';
import {windowWidth} from 'theme/const.styles';
import {SaveCardScreen} from './SaveCard.Screen';
import {YourCardScreen} from './YourCard.Screen';
import {AddNewCardScreen} from './AddNewCard.Screen';
import {TabView, SceneMap} from 'react-native-tab-view';
import {PaymentMethodScreen} from './PaymentMethod.Screen';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useUserStoreActions} from 'store/user';

const renderScene = SceneMap({
  [Routes.paymentMethod]: PaymentMethodScreen,
  [Routes.addNewCard]: AddNewCardScreen,
  [Routes.saveCard]: SaveCardScreen,
  [Routes.yourCard]: YourCardScreen,
});

const routes = [
  {key: Routes.paymentMethod},
  {key: Routes.addNewCard},
  {key: Routes.saveCard},
  {key: Routes.yourCard},
];

export const PaymentScreensTab: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.paymentScreensTab>
> = () => {
  const [index, setIndex] = useState<number>(0);

  const {initialize} = useUserStoreActions();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabView
      swipeEnabled={false}
      onIndexChange={setIndex}
      renderTabBar={() => null}
      renderScene={renderScene}
      navigationState={{index, routes}}
      initialLayout={{width: windowWidth}}
    />
  );
};
