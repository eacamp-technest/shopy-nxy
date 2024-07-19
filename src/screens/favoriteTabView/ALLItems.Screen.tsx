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

interface IProduct {
  id: number;
  images: string[];
}

const ItemSeparatorComponent = () => {
  return <View style={styles.flashVertical} />;
};

export const ALLItemsScreen: React.FC<SceneRendererProps> = ({}) => {
  const [newData, setNewData] = useState<IProduct[]>();
  const {navigate} = useNavigation();

  const {category} = useAllItemsStore();
  const {fetchCategory} = useAllItemsStoreActions();

  const handleNavigate = (id?: number) => {
    let dataProductDetail;
    newData?.forEach((item: IProduct) => {
      if (item.id === id) {
        dataProductDetail = item.images[0];
      }
    });

    navigate(StackRoutes.productDetail, {
      images: dataProductDetail,
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

  // useEffect(() => {
  //   if (category.length > 0) {
  //     setCat(category[0].name);
  //   }
  // }, [category]);

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
