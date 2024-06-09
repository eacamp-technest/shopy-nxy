import React, {Fragment} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {colors} from 'theme/colors';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {ImageResources} from 'assets/VectorResources.g';
import {SafeTopProvider} from 'containers/SafeTopProvider';
import {NavigationParamList} from 'types/navigation.types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button} from 'components/Button';

export const ProductDetailScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.productDetail>
> = ({navigation}) => {
  return (
    <Fragment>
      <ImageBackground
        style={styles.root}
        source={require('../assets/images/productLarge1.png')}>
        <SafeTopProvider>
          <View style={styles.navbar}>
            <NavBar
              leftColor={colors.ink.base}
              rightColor={colors.ink.base}
              leftIcon={ImageResources.chevronLeft}
              leftOnPress={() => navigation.goBack()}
              rightIcon={ImageResources.rightActionable}
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

const styles = StyleSheet.create({
  root: {
    height: 375,
  },
  navbar: {
    paddingHorizontal: 24,
  },
  main: {
    paddingHorizontal: 24,
  },
});
