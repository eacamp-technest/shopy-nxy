import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {ENDPOINTS} from 'services/Endpoints';
import {cardWidth} from 'utils/home.screen.size';
import {ImageResources} from 'assets/VectorResources.g';
import {CategoryFilter} from 'components/CategoryFilter';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {useMostPopularStoreActions} from 'store/most-popular';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCategoryStore} from 'store/category-all-store/category.store';
import {useMostPopularStore} from 'store/most-popular/mostPopular.store';

export const MostPopularScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.mostPopular>
> = ({navigation}) => {
  const [productData, setProductData] = useState();

  const name = useCategoryStore().name.toLocaleLowerCase();
  const {categories} = useMostPopularStore();
  const {fetchCategories} = useMostPopularStoreActions();

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
        images={item.images}
        price={item.price}
        title={item.title}
        style={styles.card}
        imageStyle={styles.imageStyles}
      />
    );
  };

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, [categories, fetchCategories]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (name === 'all') {
        const res = await axios({
          method: 'GET',
          url: ENDPOINTS.store.products,
        });

        if (res.status === 200) {
          setProductData(res.data.products);
        } else {
          console.log('Error');
        }
        return;
      }

      const res = await axios({
        method: 'GET',
        url: `${ENDPOINTS.store.productsByCategory}/${name}`,
      });

      if (res.status === 200) {
        setProductData(res.data.products);
      } else {
        console.log('Error');
      }
    };
    fetchProducts();
  }, [name]);

  return (
    <SafeTopProvider
      content={'light-content'}
      backColorSafeProvider={colors.bdazzledBlue.darkest}
      statusBarColorAndroid={colors.bdazzledBlue.darkest}>
      <View style={styles.header}>
        <NavBar
          title={'MOST POPULAR'}
          leftColor={colors.white}
          rightColor={colors.white}
          styleTitle={colors.white}
          rightIcon={ImageResources.sliders}
          leftIcon={ImageResources.chevronLeft}
          leftOnPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.categoryFilter}>
        <CategoryFilter
          categories={categories}
          titleColor={styles.titleFilterColor}
          backgroundColor={styles.filterButton}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <FlatList
          data={productData}
          numColumns={2}
          scrollEnabled={false}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </ScrollView>
    </SafeTopProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: normalize('horizontal', 24),
  },
  categoryFilter: {
    paddingTop: normalize('vertical', 24),
    paddingLeft: normalize('horizontal', 24),
    paddingBottom: normalize('vertical', 32),
  },
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flex: 1,
    backgroundColor: colors.white,
    minHeight: '100%',
    paddingTop: normalize('vertical', 20),
    paddingHorizontal: normalize('horizontal', 24),
  },
  card: {
    width: '50.7%',
  },
  imageStyles: {
    width: cardWidth,
  },
  contentContainerStyle: {
    gap: normalize('vertical', 25),
    paddingBottom: normalize('vertical', 230),
  },
  filterButton: {
    backgroundColor: colors.bdazzledBlue.blueBase,
  },
  titleFilterColor: {
    color: colors.white,
  },
});
