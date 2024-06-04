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
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';

type ISize = 'small' | 'medium' | 'large';

interface ICardCategory {
  id?: number;
  size?: ISize;
  title?: string;
  image?: ImageSourcePropType;
  background?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const CardCategory: React.FC<ICardCategory> = ({
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
      <View style={[styles.largeContainer, {backgroundColor: background}]}>
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
    height: 184,
    borderWidth: 0,
    borderRadius: 16,

    justifyContent: 'flex-end',
    backgroundColor: colors.red.base,
  },
  image: {
    position: 'absolute',
    left: -10,
    width: 350,
    height: 193,
  },
  largeContainer: {
    height: 179,
    borderRadius: 0,
    alignItems: 'center',
  },
  largeImage: {
    height: 282,
    width: normalize('width', 350),
  },
  smallContainer: {
    gap: normalize('horizontal', 16),
    ...CommonStyles.alignCenterRow,
  },
  small: {
    borderWidth: 0,
    borderRadius: 8,
  },
  smallImage: {
    width: normalize('width', 56),
    height: normalize('height', 56),
  },
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
});
