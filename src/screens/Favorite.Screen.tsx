import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {colors} from 'theme/colors';
import {product} from 'mock/product';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes, TabRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const FavoriteScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, TabRoutes.favorite>
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
    <SafeTopProvider
      style={colors.bdazzledBlue.darkest}
      content={'light-content'}
      statusBarColor={colors.bdazzledBlue.darkest}>
      <View style={styles.header}>
        <NavBar styleTitle={colors.white} title={'SAVED ITEMS'} />
      </View>
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
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    gap: normalize('vertical', 24),
    paddingHorizontal: normalize('horizontal', 24),
  },
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
