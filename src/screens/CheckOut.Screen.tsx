import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {StackRoutes} from 'router/routes';
import {CardProduct} from 'components/CardProduct';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface IItems {
  images: string;
  title: string;
  price: number;
}

export const CheckOutScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, StackRoutes.checkout>
> = ({navigation, route}) => {
  const {images, title, price} = route.params as unknown as IItems;

  const [count, setCount] = useState<number>(1);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [newPrice, setPriceNewPrice] = useState(price);

  const handlePlus = () => {
    setDisabled(false);
    setCount(prev => prev + 1);
    setPriceNewPrice(prev => prev + price);
  };
  const handleMinus = () => {
    if (count === 1) {
      setDisabled(true);
      return;
    }
    setCount(prev => prev - 1);
    setPriceNewPrice(newPrice - price);
  };

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
          count={count}
          title={title}
          price={newPrice}
          disabled={disabled}
          increment={handlePlus}
          decrement={handleMinus}
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
