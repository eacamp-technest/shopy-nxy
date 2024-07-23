import React, {Fragment, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {Divider} from 'components/Divider';
import {SvgImage} from 'components/SvgImage';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {PartialsColor} from 'components/PartialsColor';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useProductDetailStore} from 'store/product-detail/productDetail.store';

export const ProductDetailScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.productDetail>
> = ({navigation, route}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [stars, setStars] = useState<React.JSX.Element[]>([]);
  const [navColor, setNavColor] = useState<boolean>(true);
  const [contentColor, setContentColor] = useState<string>('');

  const {color} = useProductDetailStore();

  useEffect(() => {
    if (color === '#D9D9D9' || color === '#FFD791') {
      setNavColor(true);
      setContentColor('dark-content');
      return;
    }
    setNavColor(false);
    setContentColor('light-content');
  }, [color, navColor]);

  const handleLoadStart = () => setLoading(true);
  const handleLoadEnd = () => setLoading(false);

  useEffect(() => {
    const handleStars = () => {
      const totalStars = 6;
      const starElements = [];

      for (let index = 1; index <= totalStars; index++) {
        if (Number(route.params.rating) >= index) {
          starElements.push(
            <SvgImage
              key={index}
              source={ImageResources.rating}
              color={colors.yellow.base}
            />,
          );
        } else {
          starElements.push(
            <SvgImage
              key={index}
              source={ImageResources.rating}
              color={colors.skyLight}
            />,
          );
        }
      }
      setStars(starElements);
    };

    handleStars();
  }, [route.params.rating]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        style={[styles.root, color ? {backgroundColor: color} : null]}
        source={{uri: route.params.images}}>
        <SafeTopProvider content={contentColor}>
          <Fragment>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={colors.black}
                style={styles.activityIndicator}
              />
            ) : null}
          </Fragment>
          <View style={styles.navbar}>
            <NavBar
              leftColor={navColor ? colors.ink.base : colors.white}
              rightColor={navColor ? colors.ink.base : colors.white}
              leftIcon={ImageResources.chevronLeft}
              leftOnPress={() => navigation.goBack()}
              rightIcon={ImageResources.rightActionable}
              rightOnPress={() => navigation.navigate(StackRoutes.reviewRating)}
            />
          </View>
        </SafeTopProvider>
      </ImageBackground>
      <View style={styles.main}>
        <Text style={styles.category}>{route.params.category}</Text>
        <View style={CommonStyles.alignCenterJustifyBetweenRow}>
          <Text style={styles.title}>{route.params.title}</Text>
          <SvgImage color={colors.primary.base} source={ImageResources.heart} />
        </View>
        <View style={CommonStyles.alignCenterJustifyBetweenRow}>
          <View style={styles.stars}>
            {stars.map((el, index) => (
              <Fragment key={index}>{el}</Fragment>
            ))}
          </View>
          <Text style={styles.price}>{`$${route.params.price}`}</Text>
        </View>
        <Divider height={'small'} />
        <View style={CommonStyles.alignCenterJustifyBetweenRow}>
          <View style={styles.size}>
            <Text style={TypographyStyles.RegularNoneSemibold}>SIZE</Text>
            <Text
              style={
                styles.sizeText
              }>{`H-${route.params.height} / W-${route.params.width}`}</Text>
          </View>
          <SvgImage source={ImageResources.plus} color={colors.ink.darkest} />
        </View>
        <View style={styles.colorContainer}>
          <PartialsColor title="COLOR" position="horizontal" />
          <Button position={'center'} text={'Add to cart'} />
        </View>
      </View>
    </ScrollView>
  );
};

const mainPadding = normalize('horizontal', 24);

const styles = StyleSheet.create({
  root: {
    height: normalize('height', 375),
  },
  navbar: {
    paddingHorizontal: mainPadding,
  },
  main: {
    paddingHorizontal: mainPadding,
    paddingTop: normalize('vertical', 32),
    paddingBottom: normalize('vertical', 21),
    gap: normalize('vertical', 22),
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  category: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.primary.base,
  },
  title: {
    ...TypographyStyles.title3,
    color: colors.ink.base,
  },
  price: {
    ...TypographyStyles.LargeNoneSemibold,
    color: colors.ink.base,
  },
  size: {
    gap: normalize('vertical', 8),
  },
  sizeText: {
    ...TypographyStyles.SmallTightRegular,
    color: colors.skyDark,
  },
  colorContainer: {
    gap: normalize('vertical', 21),
    paddingTop: normalize('vertical', 24),
  },
  stars: {
    flexDirection: 'row',
    gap: normalize('horizontal', 3),
  },
});
