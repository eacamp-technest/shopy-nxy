import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {man} from 'mock/item-list';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {IMainTab, MainTab} from 'components/MainTab';
import {CardCategory} from 'components/CardCategory';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ListManScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.listMan>
> = ({navigation}) => {
  const renderTabList = ({
    index,
    item: {title, leftIcon},
  }: {
    index: number;
    item: IMainTab;
  }) => {
    return <MainTab key={index} title={title} rightIcon={leftIcon} />;
  };
  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.blue.base}
      statusBarColorAndroid={colors.blue.base}>
      <View style={styles.navBar}>
        <NavBar
          title={'MAN'}
          leftColor={colors.white}
          styleTitle={colors.white}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
      </View>
      <CardCategory
        size={'large'}
        image={require('../../assets/images/manLarge.png')}
      />
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainerStyle}>
        <FlashList
          data={man}
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
