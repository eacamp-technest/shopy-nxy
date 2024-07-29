import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, ScrollView, FlatList, Text} from 'react-native';
import axios from 'axios';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {CheckBox} from 'components/CheckBox';
import {ENDPOINTS} from 'services/Endpoints';
import {CommonStyles} from 'theme/commonStyles';
import {cardWidth} from 'utils/home.screen.size';
import {TypographyStyles} from 'theme/typography';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {ImageResources} from 'assets/VectorResources.g';
import {CategoryFilter} from 'components/CategoryFilter';
import {NavigationParamList} from 'types/navigation.types';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {FlexBottomSheet} from 'components/FlexBottomSheet';
import {IProduct} from './favoriteTabView/ALLItems.Screen';
import {useMostPopularStoreActions} from 'store/most-popular';
import {CardProduct, ICardProduct} from 'components/CardProduct';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useCategoryStore} from 'store/category-all-store/category.store';
import {useMostPopularStore} from 'store/most-popular/mostPopular.store';

export const MostPopularScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.mostPopular>
> = ({navigation}) => {
  const [productData, setProductData] = useState();
  const [content, setContent] = useState<boolean>(true);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = () => {
    setContent(false);
    bottomSheetModalRef.current?.present();
  };

  const handleSheetDismiss = () => {
    setContent(true);
    bottomSheetModalRef.current?.close();
  };

  const name = useCategoryStore().name.toLocaleLowerCase();
  const {categories} = useMostPopularStore();
  const {fetchCategories} = useMostPopularStoreActions();

  const handleNavigation = (id?: number) => {
    const items = productData?.find((item: IProduct) => item.id === id);
    items && navigation.navigate(StackRoutes.checkout, {...items});
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
        type={'product'}
        price={item.price}
        title={item.title}
        style={styles.card}
        images={item.images[0]}
        imageStyle={styles.imageStyles}
        onPress={() => handleNavigation(item.id)}
      />
    );
  };

  useEffect(() => {
    categories.length === 0 && fetchCategories();
  }, [categories, fetchCategories]);

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
    <SafeTopProvider
      content={content ? 'light-content' : 'dark-content'}
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
          rightOnPress={handlePresentModalPress}
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
      <FlexBottomSheet
        height={400}
        ref={bottomSheetModalRef}
        handleSheetDismiss={handleSheetDismiss}>
        <View style={styles.main}>
          <Text style={styles.title}>SORT BY</Text>
          <View style={styles.container}>
            <View style={CommonStyles.alignCenterJustifyBetweenRow}>
              <Text style={styles.text}>Lowest price</Text>
              <CheckBox />
            </View>
            <View style={CommonStyles.alignCenterJustifyBetweenRow}>
              <Text style={styles.text}>Relevance</Text>
              <CheckBox />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              text={'Apply'}
              position={'center'}
              onPress={() => bottomSheetModalRef.current?.close()}
            />
          </View>
        </View>
      </FlexBottomSheet>
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
    minHeight: '100%',
    backgroundColor: colors.white,
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
  main: {
    flex: 1,
    gap: normalize('vertical', 29),
    paddingHorizontal: normalize('horizontal', 24),
  },
  title: {
    ...TypographyStyles.title3,
    color: colors.ink.darkest,
  },
  container: {
    gap: normalize('vertical', 24),
  },
  text: {
    ...TypographyStyles.RegularTightRegular,
    color: colors.ink.darkest,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: normalize('vertical', 50),
  },
});
