import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {FlashList} from '@shopify/flash-list';
import {category} from 'mock/category-filter';
import {TypographyStyles} from 'theme/typography';

const itemSeparatorComponent = () => {
  return <View style={styles.itemSeparatorComponent} />;
};

interface ICategoryFilter {
  title?: string;
  onPress: () => void;
}

export const CategoryFilter: React.FC<ICategoryFilter> = ({}) => {
  const renderCategory = ({item}: any) => {
    return (
      <TouchableOpacity style={styles.main}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlashList
      horizontal
      data={category}
      estimatedItemSize={30}
      renderItem={renderCategory}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={itemSeparatorComponent}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    borderRadius: 100,
    backgroundColor: colors.skyLightest,
  },
  title: {
    paddingVertical: normalize('vertical', 8),
    paddingHorizontal: normalize('horizontal', 16),
    ...TypographyStyles.RegularNoneRegular,
    color: colors.ink.base,
  },
  itemSeparatorComponent: {
    width: normalize('width', 8),
  },
  contentContainerStyle: {
    paddingRight: normalize('horizontal', 15),
  },
});
