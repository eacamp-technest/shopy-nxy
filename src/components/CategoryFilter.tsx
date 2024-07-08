import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {FlashList} from '@shopify/flash-list';
import {category} from 'mock/category-filter';
import {TypographyStyles} from 'theme/typography';

const itemSeparatorComponent = () => {
  return <View style={styles.itemSeparatorComponent} />;
};

export const CategoryFilter = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleCategoryButton = (id: number) => setActiveButton(id);

  const renderCategory = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategoryButton(item.id)}
        style={[
          styles.main,
          activeButton === item.id ? styles.mainPress : null,
        ]}>
        <Text
          style={[
            styles.title,
            activeButton === item.id ? styles.titlePress : null,
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlashList
      horizontal
      data={category}
      estimatedItemSize={30}
      extraData={activeButton}
      renderItem={renderCategory}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
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
  mainPress: {
    backgroundColor: colors.primary.base,
  },
  titlePress: {
    color: colors.white,
  },
  itemSeparatorComponent: {
    width: normalize('width', 8),
  },
  contentContainerStyle: {
    paddingRight: normalize('horizontal', 15),
  },
});
