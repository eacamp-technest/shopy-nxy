import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {kids} from 'mock/item-list';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {ENDPOINTS} from 'services/Endpoints';
import {FlashList} from '@shopify/flash-list';
import {IMainTab, MainTab} from 'components/MainTab';
import {CardCategory} from 'components/CardCategory';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ListKidsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listKids>
> = ({navigation}) => {
  const handleDataKids = () => {
    const fetchProducts = async () => {
      const res = await axios({
        method: 'GET',
        url: `${ENDPOINTS.store.productsByCategory}/sports-accessories`,
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
        onPress={handleDataKids}
      />
    );
  };
  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.skyBlue.base}
      statusBarColorAndroid={colors.skyBlue.base}>
      <View style={styles.navBar}>
        <NavBar
          title={'KIDS'}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>

      <CardCategory
        size={'large'}
        image={require('../../assets/images/kidsLarge.png')}
      />
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainerStyle}>
        <FlashList
          data={kids}
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
