import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {StackRoutes, TabRoutes} from 'router/routes';
import {normalize} from 'theme/metrics';
import {searchCategory} from 'mock/search';
import {CartItem} from 'components/CartItem';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const SearchScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, TabRoutes.search>
> = ({navigation}) => {
  const screensArray = [
    StackRoutes.listWoman,
    StackRoutes.listMan,
    StackRoutes.listKids,
    StackRoutes.listTeens,
  ];

  const navigateToScreen = (id: number) => {
    const screenName = screensArray[id];
    if (screenName) {
      navigation.navigate(screenName);
    }
  };

  return (
    <SafeTopProvider style={styles.provider}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.main}>
          {searchCategory.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              size={'medium'}
              title={item.title}
              image={item.image}
              background={item.backgroundColor}
              onPress={() => navigateToScreen(item.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  provider: {
    backgroundColor: colors.white,
  },
  root: {
    flex: 1,
    gap: normalize('vertical', 24),
    paddingHorizontal: normalize('horizontal', 24),
  },
  contentContainer: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  main: {
    gap: normalize('vertical', 24),
  },
});
