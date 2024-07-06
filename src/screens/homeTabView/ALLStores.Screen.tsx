import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {product} from 'mock/product';
import {normalize} from 'theme/metrics';
import {Tables} from 'components/Tables';
import {FlashList} from '@shopify/flash-list';
import {cardWidth} from 'utils/home.screen.size';
import {TypographyStyles} from 'theme/typography';
import {SceneRendererProps} from 'react-native-tab-view';
import {CardProduct, ICardProduct} from 'components/CardProduct';

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <FlashList
          data={product}
          numColumns={2}
          scrollEnabled={false}
          estimatedItemSize={200}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparatorComponent}
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
  scroll: {
    flex: 1,
    minHeight: '100%',
    minWidth: '100%',
    paddingHorizontal: normalize('horizontal', 24),
  },
  tableRight: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.primary.base,
  },
  card: {
    width: '100%',
  },
  imageStyles: {
    width: cardWidth,
  },
  contentContainerStyle: {
    paddingBottom: normalize('vertical', 50),
  },
  flashVertical: {
    height: normalize('height', 30),
  },
});
