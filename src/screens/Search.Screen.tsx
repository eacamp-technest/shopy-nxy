import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {searchCategory} from 'mock/search';
import {CartItem} from 'components/CartItem';
import {SafeTopProvider} from 'containers/SafeTopProvider';

export const SearchScreen: React.FC = () => {
  return (
    <SafeTopProvider style={styles.provider}>
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.main}>
          {searchCategory.map(item => (
            <CartItem
              key={item.id}
              size={'medium'}
              title={item.title}
              image={item.image}
              background={item.backgroundColor}
              onPress={() => console.log('handle cart')}
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
