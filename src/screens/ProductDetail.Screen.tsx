import React, {Fragment, useState} from 'react';
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
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export const ProductDetailScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.productDetail>
> = ({navigation, route}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoadStart = () => setLoading(true);
  const handleLoadEnd = () => setLoading(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        style={styles.root}
        source={{uri: route.params.images}}>
        <SafeTopProvider>
          <Fragment>
            {loading ? (
              <ActivityIndicator
                size="large"
                color={colors.primary.base}
                style={styles.activityIndicator}
              />
            ) : null}
          </Fragment>
          <View style={styles.navbar}>
            <NavBar
              leftColor={colors.ink.base}
              rightColor={colors.ink.base}
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
        <View style={styles.container}>
          <Text style={styles.title}>{route.params.title}</Text>
          <SvgImage
            color={colors.primary.base}
            source={ImageResources.heartWhite}
          />
        </View>
        <View style={styles.container}>
          <Text>STARTS</Text>
          <Text style={styles.price}>{`$${route.params.price}`}</Text>
        </View>
        <Divider height={'small'} />
        <View style={styles.sizeContainer}>
          <View style={styles.size}>
            <Text>SIZE</Text>
            <Text>W-xsax H-sxas</Text>
          </View>
          <Text>ICON</Text>
        </View>
        <Button position={'center'} text={'Add to cart'} />
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
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
