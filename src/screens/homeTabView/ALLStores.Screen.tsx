import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Tables} from 'components/Tables';
import {StackRoutes} from 'router/routes';
import {ENDPOINTS} from 'services/Endpoints';
import {SvgImage} from 'components/SvgImage';
import {cardWidth} from 'utils/home.screen.size';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import {CategoryFilter} from 'components/CategoryFilter';
import {SceneRendererProps} from 'react-native-tab-view';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {useCategoryStore} from 'store/category-all-store/category.store';

import {useProductInfoStoreActions} from 'store/product-info';

export const ALLStoresScreenTab: React.FC<SceneRendererProps> = ({jumpTo}) => {
  const [productData, setProductData] = useState();
  const [categories, setCategories] = useState<any>({});

  const {addProduct} = useProductInfoStoreActions();

  const name = useCategoryStore().name.toLocaleLowerCase();

  const renderProduct = ({
    item,
    index,
  }: {
    index: number;
    item: ICardProduct;
  }) => {
    const renderStars = (rating: number) => {
      const stars = [];
      const totalStars = 6;

      for (let i = 1; i <= totalStars; i++) {
        if (rating >= i) {
          stars.push(
            <SvgImage
              key={i}
              color={colors.yellow.base}
              source={ImageResources.rating}
            />,
          );
        } else {
          stars.push(
            <SvgImage
              key={i}
              color={colors.skyLight}
              source={ImageResources.rating}
            />,
          );
        }
      }

      return stars;
    };

    const renderOfStars = () => {
      let numberOfStars;
      if (item.rating <= 3) {
        numberOfStars = 1;
      } else if (item.rating > 3 && item.rating < 4) {
        numberOfStars = 4;
      } else if (item.rating >= 4) {
        numberOfStars = 5;
      } else if (item.rating >= 4.1) {
        numberOfStars = 6;
      } else {
        numberOfStars = 0;
      }

      return numberOfStars;
    };

    const numOfStars = renderOfStars();

    const handleDateProductInfo = (idProduct?: number) => {
      const fetchProducts = async () => {
        const res = await axios({
          method: 'GET',
          url: `${ENDPOINTS.store.productsByCategory}/${name}`,
        });

        if (res.status === 200) {
          const filterDataProduct = res.data.products.filter(
            (itemProduct: ICardProduct) => itemProduct.id === idProduct,
          );
          addProduct(filterDataProduct);
        } else {
          console.log('Error');
        }
      };
      fetchProducts();
      jumpTo(StackRoutes.productInfo);
    };

    return (
      <CardProduct
        key={index}
        type={'product'}
        images={item.images}
        price={item.price}
        title={item.title}
        style={styles.card}
        star={renderStars(numOfStars)}
        imageStyle={styles.imageStyles}
        onPress={() => handleDateProductInfo(item.id)}
      />
    );
  };

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios({
        method: 'GET',
        url: ENDPOINTS.store.categories,
      });

      if (res.status === 200) {
        const categoriesAll = res.data;
        categoriesAll.unshift('all');

        const updatedCategories = categoriesAll.map((category: string) => {
          return category.charAt(0).toUpperCase() + category.slice(1);
        });
        setCategories(updatedCategories);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (name === 'all') {
        const res = await axios({
          method: 'GET',
          url: ENDPOINTS.store.products,
        });
        res.status === 200 && setProductData(res.data.products);
        return;
      }

      const res = await axios({
        method: 'GET',
        url: `${ENDPOINTS.store.productsByCategory}/${name}`,
      });
      res.status === 200 && setProductData(res.data.products);
    };
    fetchProducts();
  }, [name]);

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.root}>
      <View style={styles.header}>
        <Tables content="CATEGORIES" contentStyle={TypographyStyles.title3} />
        <View style={styles.categoryFilter}>
          <CategoryFilter
            categories={categories}
            backgroundColor={styles.filterButton}
          />
        </View>
      </View>
      <ScrollView
        style={styles.scroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyleScroll}>
        <FlatList
          data={productData}
          numColumns={2}
          scrollEnabled={false}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </ScrollView>
    </Pressable>
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
    width: '52%',
  },
  imageStyles: {
    width: cardWidth,
  },
  contentContainerStyle: {
    gap: normalize('vertical', 25),
    paddingBottom: normalize('vertical', 50),
  },
  contentContainerStyleScroll: {
    flex: 1,
    paddingBottom: normalize('vertical', 120),
  },

  filterButton: {
    backgroundColor: colors.skyLightest,
  },
  header: {
    zIndex: 1,
  },
});
