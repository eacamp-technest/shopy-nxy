import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {teens} from 'mock/item-list';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {IMainTab, MainTab} from 'components/MainTab';
import {CardCategory} from 'components/CardCategory';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ENDPOINTS} from 'services/Endpoints';

export const ListTeensScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listTeens>
> = ({navigation}) => {
  const handleDataTeens = () => {
    const fetchProducts = async () => {
      const res = await axios({
        method: 'GET',
        url: `${ENDPOINTS.store.productsByCategory}/beauty`,
      });

      res.status === 200 && navigation.navigate(StackRoutes.extra, res.data);
    };
    fetchProducts();
  };

  const renderTabList = ({
    index,
    item: {title, leftIcon},
  }: {
    index: number;
    item: IMainTab;
  }) => {
    return (
      <MainTab
        key={index}
        title={title}
        rightIcon={leftIcon}
        onPress={handleDataTeens}
      />
    );
  };
  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.lavender.base}
      statusBarColorAndroid={colors.lavender.base}>
      <View style={styles.navBar}>
        <NavBar
          title={'TEENS'}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>
      <CardCategory
        size={'large'}
        image={require('../../assets/images/teensLarge.png')}
      />
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainerStyle}>
        <FlashList
          data={teens}
          scrollEnabled={false}
          estimatedItemSize={200}
          renderItem={renderTabList}
        />
      </ScrollView>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: normalize('vertical', 16),
    paddingHorizontal: normalize('horizontal', 24),
    backgroundColor: colors.white,
  },
  navBar: {
    paddingHorizontal: normalize('horizontal', 24),
  },
  contentContainerStyle: {
    paddingBottom: normalize('vertical', 50),
  },
});
