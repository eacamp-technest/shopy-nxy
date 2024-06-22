import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProcessingScreen} from './orderTabView/Processing.Screen';
import {DeliveredScreen} from './orderTabView/Delivered.Screen';
import {CancelledScreen} from './orderTabView/Cancelled.Screen';
import {windowWidth} from 'theme/const.styles';
import {normalize} from 'theme/metrics';

const renderScene = SceneMap({
  [StackRoutes.processing]: ProcessingScreen,
  [StackRoutes.delivered]: DeliveredScreen,
  [StackRoutes.cancelled]: CancelledScreen,
});
const routes = [
  {key: StackRoutes.processing, title: 'Processing'},
  {key: StackRoutes.delivered, title: 'Delivered'},
  {key: StackRoutes.cancelled, title: 'Cancelled'},
];

export const OrderScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.order>
> = ({navigation}) => {
  const [index, setIndex] = useState<number>(0);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBar}
      renderLabel={({route, focused}) => (
        <Text
          style={[
            styles.title,
            focused ? styles.titleFocused : styles.titleNoFocused,
          ]}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.bdazzledBlue.darkest}
      statusBarColorAndroid={colors.bdazzledBlue.darkest}>
      <View style={styles.header}>
        <NavBar
          title={'MY ORDERS'}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
        <TabView
          swipeEnabled={true}
          onIndexChange={setIndex}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          initialLayout={{width: windowWidth}}
        />
      </View>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    gap: normalize('vertical', 16),
  },
  title: {
    ...TypographyStyles.RegularNoneRegular,
    color: colors.white,
  },
  tabBar: {
    backgroundColor: colors.bdazzledBlue.darkest,
  },
  indicatorStyle: {
    backgroundColor: colors.skyBlue.base,
  },
  titleFocused: {
    color: colors.skyBlue.base,
  },
  titleNoFocused: {
    ...TypographyStyles.RegularNoneRegular,
    color: colors.white,
  },
});
