import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Keyboard, Pressable} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Tables} from 'components/Tables';
import {ENDPOINTS} from 'services/Endpoints';
import {SvgImage} from 'components/SvgImage';
import {cardWidth} from 'utils/home.screen.size';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import {CategoryFilter} from 'components/CategoryFilter';
import {SceneRendererProps} from 'react-native-tab-view';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {useCategoryStore} from 'store/category-all-store/category.store';
import Animated, {
  runOnJS,
  withTiming,
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

export const ALLStoresScreenTab: React.FC<SceneRendererProps> = ({}) => {
  const [productData, setProductData] = useState();
  const [categories, setCategories] = useState<any>({});
  const [disabledCategory, setDisabledCategory] = useState(true);

  const translateY = useSharedValue(0);
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollOffset.value = event.contentOffset.y;
    translateY.value = withTiming(event.contentOffset.y > 0 ? -120 : 0);
  });

  useDerivedValue(() => {
    if (scrollOffset.value > 50 && disabledCategory) {
      runOnJS(setDisabledCategory)(false);
    } else if (scrollOffset.value <= 50 && !disabledCategory) {
      runOnJS(setDisabledCategory)(true);
    }
  }, [scrollOffset, disabledCategory]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const scrollViewStyle = useAnimatedStyle(() => {
    return {
      paddingTop: disabledCategory ? 0 : 0,
    };
  });

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
      if (item.rating <= 2) {
        numberOfStars = 1;
      } else if (item.rating > 3 && item.rating < 4) {
        numberOfStars = 3;
      } else if (item.rating >= 4) {
        numberOfStars = 4;
      } else if (item.rating > 4.5) {
        numberOfStars = 6;
      } else {
        numberOfStars = 0;
      }

      return numberOfStars;
    };

    const numOfStars = renderOfStars();

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
        const categories = res.data;
        categories.unshift('all');

        const updatedCategories = categories.map((category: string) => {
          return category.charAt(0).toUpperCase() + category.slice(1);
        });
        setCategories(updatedCategories);
      } else {
        console.log('Error');
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
    <Pressable onPress={Keyboard.dismiss} style={styles.root}>
      {disabledCategory ? (
        <Animated.View style={[styles.header, animatedStyle]}>
          <Tables content="CATEGORIES" contentStyle={TypographyStyles.title3} />
          <View style={styles.categoryFilter}>
            <CategoryFilter
              categories={categories}
              backgroundColor={styles.filterButton}
            />
          </View>
        </Animated.View>
      ) : null}
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={[styles.scroll, scrollViewStyle]}>
        <FlatList
          data={productData}
          numColumns={2}
          scrollEnabled={false}
          renderItem={renderProduct}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </Animated.ScrollView>
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
    width: '51.8%',
  },
  imageStyles: {
    width: cardWidth,
  },
  contentContainerStyle: {
    gap: normalize('vertical', 25),
    paddingBottom: normalize('vertical', 150),
  },
  filterButton: {
    backgroundColor: colors.skyLightest,
  },
  header: {
    zIndex: 1,
  },
});
