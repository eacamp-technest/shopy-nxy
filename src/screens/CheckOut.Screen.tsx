import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CardProduct} from 'components/CardProduct';

interface IItems {
  images: string;
  title: string;
  price: number;
}

export const CheckOutScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.checkout>
> = ({navigation, route}) => {
  const {images, title, price} = route.params as IItems;

  return (
    <SafeMainProvider>
      <View style={styles.root}>
        <NavBar
          title={'CART'}
          leftColor={colors.black}
          styleTitle={colors.black}
          rightIcon={ImageResources.edit}
          rightColor={colors.primary.base}
          leftIcon={ImageResources.chevronLeft}
          leftOnPress={() => navigation.goBack()}
        />
        <CardProduct
          type="add"
          price={price}
          title={title}
          images={{uri: images[0]}}
        />
      </View>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: normalize('horizontal', 24),
  },
});
