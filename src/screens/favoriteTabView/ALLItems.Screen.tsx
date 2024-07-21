import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {StackRoutes} from 'router/routes';
import {ENDPOINTS} from 'services/Endpoints';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {useAllItemsStoreActions} from 'store/all-items';
import {SceneRendererProps} from 'react-native-tab-view';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {useAllItemsStore} from 'store/all-items/all-Items.store';

export interface IProduct {
  id: number;
  category: string;
  title: string;
  images: string;
  price: string;
}

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const ALLItemsScreen: React.FC<SceneRendererProps> = () => {
  const {navigate} = useNavigation();

  const [newData, setNewData] = useState<IProduct[]>();

  const {allCategory} = useAllItemsStore();
  const {fetchCategory} = useAllItemsStoreActions();

  const handleNavigate = (id?: number) => {
    let images;
    let category;
    let title;
    let price;

    newData?.forEach((item: IProduct) => {
      if (item.id === id) {
        images = item.images[0];
        category = item.category?.toLocaleUpperCase();
        title = item.title;
        price = item.price;
      }
    });

    navigate(StackRoutes.productDetail, {
      images,
      title,
      price,
      category,
    });
  };

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
        brand={item.brand}
        title={item.title}
        price={item.price}
        images={item.images}
        onPress={() => handleNavigate(item.id)}
      />
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios({
        method: 'GET',
        url: `${ENDPOINTS.store.productsByCategory}/motorcycle`,
      });
      res.status === 200 && setNewData(res.data.products);
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
