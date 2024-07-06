import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Tables} from 'components/Tables';
import {FlashList} from '@shopify/flash-list';
import {TypographyStyles} from 'theme/typography';
import {SceneRendererProps} from 'react-native-tab-view';
import {product} from 'mock/product';
import {CardProduct} from 'components/CardProduct';
import {cardWidth} from 'utils/home.screen.size';

export const ALLStoresScreenTab: React.FC<SceneRendererProps> = ({}) => {
  const renderProduct = ({item}) => {
    return (
      <CardProduct
        style={{width: '100%'}}
        imageStyle={{width: cardWidth}}
        type={'product'}
        image={item.image}
        key={item.index}
        price={item.price}
        title={item.title}
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: 'yellow'}}
        style={styles.scroll}>
        <View style={styles.flashSize}>
          <FlashList
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={styles.contentContainerStyle}
            showsHorizontalScrollIndicator={false}
            data={product}
            renderItem={renderProduct}
            estimatedItemSize={200}
            ItemSeparatorComponent={() => (
              <View style={styles.flashHorizontal} />
            )}
          />
        </View>
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
    height: 50,
    paddingHorizontal: 24,
    backgroundColor: 'red',
  },
  flashSize: {
    flex: 1,
    minHeight: '100%',
    minWidth: '100%',
  },
  contentContainerStyle: {
    backgroundColor: 'green',
    borderWidth: 1,
  },
  tableRight: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.primary.base,
  },
  flashHorizontal: {
    width: 16,
  },
});
