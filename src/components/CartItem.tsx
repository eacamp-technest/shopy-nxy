import React, {Fragment} from 'react';
import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';

type ISize = 'small' | 'medium' | 'large';

interface ICartItem {
  id?: number;
  size?: ISize;
  title?: string;
  image?: ImageSourcePropType;
  background?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const CartItem: React.FC<ICartItem> = ({
  size = 'medium',
  title,
  image,
  onPress,
  background,
}) => {
  const renderSmallItem = () => {
    return (
      <View style={styles.smallContainer}>
        <View style={[styles.small, {backgroundColor: background}]}>
          <Image style={styles.smallImage} source={image} />
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  };

  const renderLargeItem = () => {
    return (
      <View style={[styles.large, {backgroundColor: background}]}>
        <Image style={styles.largeImage} source={image} />
      </View>
    );
  };

  return (
    <Fragment>
      {size === 'medium' ? (
        <Pressable
          onPress={onPress}
          style={({pressed}) => [
            styles.root,
            {opacity: pressed ? 0.8 : 1},
            {backgroundColor: background},
          ]}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.image} source={image} />
        </Pressable>
      ) : null}
      {size === 'large' ? renderLargeItem() : null}
      {size === 'small' ? renderSmallItem() : null}
    </Fragment>
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
  large: {
    borderRadius: 0,
  },
  largeImage: {
    height: normalize('height', 193),
    width: normalize('width', 350),
    left: -60,
  },
  smallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  small: {
    borderRadius: 16,
    borderWidth: 0,
    height: 56,
    width: 56,
    backgroundColor: 'green',
  },
  smallImage: {},
  text: {
    ...TypographyStyles.SmallNoneSemibold,
    color: colors.ink.base,
  },
  title: {
    paddingLeft: normalize('horizontal', 24),
    paddingBottom: normalize('vertical', 16),
    ...TypographyStyles.title3,
    color: colors.white,
  },
  image: {
    position: 'absolute',
    height: 193,
    width: 350,
    left: -10,
  },
});
