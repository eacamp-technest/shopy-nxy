import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {colors} from 'theme/colors';
import {product} from 'mock/product';
import {normalize} from 'theme/metrics';
import {Tables} from 'components/Tables';
import {cardWidth} from 'utils/home.screen.size';
import {TypographyStyles} from 'theme/typography';
import {CategoryFilter} from 'components/CategoryFilter';
import {SceneRendererProps} from 'react-native-tab-view';
import {CardProduct, ICardProduct} from 'components/CardProduct';

export const ALLStoresScreenTab: React.FC<SceneRendererProps> = ({}) => {
  const renderProduct = ({
    item,
    index,
  }: {
    index: number;
    item: ICardProduct;
  }) => {
    return (
      <CardProduct
        key={index}
        type={'product'}
        image={item.image}
        price={item.price}
        title={item.title}
        style={styles.card}
        imageStyle={styles.imageStyles}
      />
    );
  };

  return (
    <View style={styles.root}>
      <Tables
        content="CATEGORIES"
        contentStyle={TypographyStyles.title3}
        Right={
          <Text onPress={() => console.log('-->')} style={styles.tableRight}>
            See All
          </Text>
        }
      />
      <View style={styles.categoryFilter}>
        <CategoryFilter />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <FlatList
          data={product}
          numColumns={2}
          scrollEnabled={false}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: normalize('vertical', 8),
  },
  categoryFilter: {
    paddingTop: normalize('vertical', 8),
    paddingBottom: normalize('vertical', 32),
    paddingLeft: normalize('horizontal', 24),
  },
  scroll: {
    flex: 1,
    minHeight: '100%',
    paddingHorizontal: normalize('horizontal', 24),
  },
  tableRight: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.primary.base,
  },
  card: {
    width: '51.8%',
  },
  imageStyles: {
    width: cardWidth,
  },
  contentContainerStyle: {
    gap: normalize('vertical', 25),
    paddingBottom: normalize('vertical', 150),
  },
  flashVertical: {
    height: normalize('height', 25),
  },
});
