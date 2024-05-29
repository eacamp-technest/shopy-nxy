import React from 'react';
import {
  Text,
  Image,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';

type ISize = 'small' | 'medium' | 'large';
type ICategory = 'women' | 'men' | 'kids' | 'teens';

interface ICartItem {
  size: ISize;
  title?: string;
  image?: string;
  category: ICategory;
  style?: StyleProp<ViewStyle>;
}

export const CartItem: React.FC<ICartItem> = ({
  size,
  title,
  image,
  category,
}) => {
  return (
    <Pressable style={styles.root}>
      <Text style={styles.title}>WOMEN</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/imageWoman.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    borderWidth: 0,
    backgroundColor: colors.red.base,
    height: normalize('height', 184),
    justifyContent: 'flex-end',
  },
  title: {
    ...TypographyStyles.title3,
    color: colors.white,
    paddingLeft: normalize('horizontal', 24),
    paddingBottom: normalize('vertical', 16),
  },
  image: {
    position: 'absolute',
    height: 193,
    width: 350,
    left: -10,
  },
});
