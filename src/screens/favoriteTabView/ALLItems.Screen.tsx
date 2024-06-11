import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {product} from 'mock/product';
import {normalize} from 'theme/metrics';
import {StackRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {NavigationParamList} from 'types/navigation.types';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const ALLItemsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.allItems>
> = ({navigation}) => {
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
        type={'save'}
        title={item.title}
        price={item.price}
        image={item.image}
        onPress={() => navigation.navigate(StackRoutes.productDetail)}
      />
    );
  };
  return (
    <ScrollView
      style={styles.main}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <FlashList
        data={product}
        scrollEnabled={false}
        estimatedItemSize={200}
        renderItem={renderProduct}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: normalize('horizontal', 24),
  },
  contentContainer: {
    paddingVertical: normalize('vertical', 32),
  },
  flashVertical: {
    height: 24,
  },
});
