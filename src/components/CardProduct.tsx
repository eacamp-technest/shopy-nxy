import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {Steppers} from './Steppers';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';

export type TTypeCard = 'product' | 'list' | 'add' | 'save';

export interface ICardProduct {
  id?: number;
  title: string;
  price?: number;
  type?: TTypeCard;
  image?: ImageSourcePropType;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

export const CardProduct: React.FC<ICardProduct> = ({
  type,
  image,
  title,
  price,
  style,
  onPress,
  imageStyle,
}) => {
  const [heartSvg, setHeartSvg] = useState<boolean>(false);

  const heartColor = () => {
    setHeartSvg(!heartSvg);
  };

  const isAdd = type === 'add';
  const isSave = type === 'save';
  const isList = type === 'list';
  const isProduct = type === 'product';

  const renderImage = () => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image
        resizeMode="cover"
        source={typeof image === 'string' ? {uri: image} : image}
        style={[
          styles.imageNormal,
          isSave && styles.imageMedium,
          isProduct && styles.imageLarge,
          imageStyle,
        ]}
      />
    </TouchableOpacity>
  );

  const renderTitle = () => (
    <Text style={styles.title} numberOfLines={2}>
      {title}
    </Text>
  );

  const renderPrice = () => <Text style={styles.title}>{`$${price}`}</Text>;

  const renderProductInfo = () => (
    <View style={styles.main}>
      {renderTitle()}
      {renderPrice()}
      <Text style={styles.link}>nike.com</Text>
    </View>
  );

  const renderListInfo = () => (
    <View style={styles.list}>
      {renderTitle()}
      {isList ? (
        renderPrice()
      ) : isAdd ? (
        <View style={CommonStyles.alignCenterJustifyBetweenRow}>
          <Steppers type="transparent" size="small" count={0} />
          {renderPrice()}
        </View>
      ) : (
        <Fragment>
          {renderPrice()}
          <View style={CommonStyles.alignCenterJustifyBetweenRow}>
            <Text style={styles.textSave}>Move to Bag</Text>
            <SvgImage
              isPressable={true}
              onPress={heartColor}
              color={colors.primary.base}
              source={heartSvg ? heart : heartWhite}
            />
          </View>
        </Fragment>
      )}
    </View>
  );

  return (
    <View style={[styles.root, isProduct ? styles.product : null, style]}>
      {renderImage()}
      <Fragment>{isProduct ? renderProductInfo() : renderListInfo()}</Fragment>
    </View>
  );
};

const heart = require('../assets/vectors/heart.svg');
const heartWhite = require('../assets/vectors/heartWhite.svg');

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    gap: normalize('horizontal', 20),
  },
  product: {
    flexDirection: 'column',
    gap: normalize('vertical', 12),
  },
  imageNormal: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#b0c4de',
    height: normalize('height', 78),
    width: normalize('width', 78),
  },
  imageMedium: {
    borderRadius: 8,
    height: normalize('height', 100),
    width: normalize('width', 100),
  },
  imageLarge: {
    borderRadius: 11,
    height: normalize('height', 156),
    width: normalize('width', 141),
  },
  list: {
    flex: 1,
    gap: normalize('vertical', 8),
    justifyContent: 'space-between',
    paddingVertical: normalize('vertical', 7),
  },
  main: {
    gap: normalize('vertical', 8),
  },
  title: {
    width: '90%',
    ...TypographyStyles.RegularNoneSemibold,
    color: colors.ink.base,
  },
  textSave: {
    paddingHorizontal: normalize('horizontal', 16),
    ...TypographyStyles.RegularNoneRegular,
    color: colors.ink.base,
  },
  link: {
    ...TypographyStyles.TinyNormalRegular,
    color: colors.ink.lighter,
  },
});
