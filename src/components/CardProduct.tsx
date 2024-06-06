import React, {Fragment, useState} from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {Steppers} from './Steppers';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {CommonStyles} from 'theme/commonStyles';

export type TTypeCard = 'product' | 'list' | 'add' | 'save';

export interface ICardProduct {
  id?: number;
  title?: string;
  price?: number;
  type?: TTypeCard;
  image?: ImageSourcePropType;
}

export const CardProduct: React.FC<ICardProduct> = ({
  type,
  image,
  title,
  price,
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
    <Image
      source={image}
      style={[
        styles.imageNormal,
        isSave && styles.imageMedium,
        isProduct && styles.imageLarge,
      ]}
    />
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
    <View style={[styles.root, isProduct ? styles.product : null]}>
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
    height: normalize('height', 78),
    width: normalize('width', 78),
  },
  imageMedium: {
    height: normalize('height', 100),
    width: normalize('width', 100),
  },
  imageLarge: {
    borderRadius: 8,
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
