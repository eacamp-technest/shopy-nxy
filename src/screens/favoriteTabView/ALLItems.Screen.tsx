import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {product} from 'mock/product';
import {normalize} from 'theme/metrics';
import {StackRoutes} from 'router/routes';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {useAllItemsStoreActions} from 'store/all-items';
import {SceneRendererProps} from 'react-native-tab-view';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {useAllItemsStore} from 'store/all-items/all-Items.store';
import {ENDPOINTS} from 'services/Endpoints';
import axios from 'axios';
import {set} from 'react-hook-form';

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const ALLItemsScreen: React.FC<SceneRendererProps> = ({}) => {
  const [newData, setNewData] = useState();
  const [cat, setCat] = useState('');
  const {navigate} = useNavigation();

  const {category} = useAllItemsStore();
  const {fetchCategory} = useAllItemsStoreActions();

  const renderProduct = ({
    item,
    index,
  }: {
    index: number;
    item: ICardProduct;
  }) => {
    console.log(item.title);

    return (
      <CardProduct
        key={index}
        type={'save'}
        brand={item.brand}
        title={item.title}
        price={item.price}
        images={item.images}
        onPress={() => navigate(StackRoutes.productDetail as never)}
      />
    );
  };

  useEffect(() => {
    if (category.length > 0) {
      setCat(category[0].name);
    }
  }, [category]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios({
        method: 'GET',
        url: `${ENDPOINTS.store.productsByCategory}/smartphones`,
      });

      if (res.status === 200) {
        setNewData(res.data.products);
      } else {
        console.log('Error');
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  return (
    <ScrollView
      style={styles.main}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      <FlashList
        data={newData}
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
    minHeight: 2,
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
