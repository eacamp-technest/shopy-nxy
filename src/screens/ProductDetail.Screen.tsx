import React, {Fragment, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {Button} from 'components/Button';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
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
    <Fragment>
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
        <Text>HELLO</Text>
        <Button position={'center'} text={'Add to cart'} />
      </View>
    </Fragment>
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
  },
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
