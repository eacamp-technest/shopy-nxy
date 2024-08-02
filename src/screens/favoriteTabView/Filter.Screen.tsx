import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Pressable, Keyboard} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Tables} from 'components/Tables';
import {Divider} from 'components/Divider';
import {ENDPOINTS} from 'services/Endpoints';
import {TypographyStyles} from 'theme/typography';
import {SliderColor} from 'components/SliderColor';
import {PartialsColor} from 'components/PartialsColor';
import {SceneRendererProps} from 'react-native-tab-view';
import {CategoryFilter} from 'components/CategoryFilter';
import {useCategoryStore} from 'store/category-all-store/category.store';
import {useProductDetailStore} from 'store/product-detail/productDetail.store';

export const FilterScreen: React.FC<SceneRendererProps> = ({}) => {
  const [productData, setProductData] = useState();
  const [categories, setCategories] = useState<any>({});

  const sliderCategoryName =
    useCategoryStore().sliderCategoryName.toLocaleLowerCase();
  const {sliderColor} = useProductDetailStore();

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios({
        method: 'GET',
        url: ENDPOINTS.store.categories,
      });

      if (res.status === 200) {
        const categoriesAll = res.data;

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
      const res = await axios({
        method: 'GET',
        url: `${ENDPOINTS.store.productsByCategory}/${sliderCategoryName}`,
      });
      res.status === 200 && setProductData(res.data.products);
    };
    fetchProducts();
  }, [sliderCategoryName]);

  return (
    <ScrollView
      style={styles.root}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}>
      <SliderColor
        sliderColor={{backgroundColor: sliderColor}}
        selectedStyle={{backgroundColor: sliderColor}}
      />
      <Divider height={'large'} />
      <View style={styles.partial}>
        <PartialsColor position={'vertical'} title={'COLORS'} />
      </View>
      <Divider height={'large'} />
      <Pressable onPress={Keyboard.dismiss}>
        <Tables content="CATEGORIES" contentStyle={TypographyStyles.title3} />
        <View style={styles.categoryFilter}>
          <CategoryFilter
            categories={categories}
            backgroundColor={styles.filterButton}
            pressColor={{backgroundColor: sliderColor}}
          />
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderStartColor: colors.white,
    backgroundColor: colors.white,
    paddingTop: normalize('vertical', 24),
  },
  contentContainerStyle: {
    gap: normalize('vertical', 32),
    paddingBottom: normalize('vertical', 50),
  },
  partial: {
    paddingHorizontal: normalize('horizontal', 24),
  },
  categoryFilter: {
    paddingTop: normalize('vertical', 8),
    paddingBottom: normalize('vertical', 32),
    paddingLeft: normalize('horizontal', 24),
  },
  filterButton: {
    backgroundColor: colors.skyLightest,
  },
});
