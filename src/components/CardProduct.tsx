import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {normalize} from 'theme/metrics';
import {Steppers} from './Steppers';
import {SvgImage} from './SvgImage';
import {ImageResources} from 'assets/VectorResources.g';

type TTypeCard = 'product' | 'list' | 'add' | 'save';

interface ICardProduct {
  title?: string;
  price?: number;
  type: TTypeCard;
  image?: ImageSourcePropType;
}

export const CardProduct: React.FC<ICardProduct> = ({
  type,
  image,
  title,
  price,
}) => {
  return (
    <View style={[styles.root, type === 'product' ? styles.product : null]}>
      <Image
        source={image}
        style={[
          styles.imageNormal,
          type === 'save' ? styles.imageMedium : null,
          type === 'product' ? styles.imageLarge : null,
        ]}
      />
      <Fragment>
        {type === 'product' ? (
          <View>
            <Text>{title}</Text>
            <Text>{`$${price}`}</Text>
            <Text>nike.com</Text>
          </View>
        ) : (
          <View style={styles.list}>
            <Text numberOfLines={2}>{title}</Text>
            {type === 'list' ? (
              <Text>{`$${price}`}</Text>
            ) : (
              <Fragment>
                {type === 'add' ? (
                  <View style={[styles.main]}>
                    <Steppers type="transparent" size={'small'} count={0} />
                    <Text>{`$${price}`}</Text>
                  </View>
                ) : (
                  <Fragment>
                    <Text>{`$${price}`}</Text>
                    <View style={[styles.main]}>
                      <Text style={{paddingHorizontal: 16}}>Move to Bag</Text>
                      <SvgImage
                        isPressable={true}
                        source={ImageResources.bell}
                      />
                    </View>
                  </Fragment>
                )}
              </Fragment>
            )}
          </View>
        )}
      </Fragment>
    </View>
  );
};

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
    gap: 8,
    justifyContent: 'space-between',
    paddingVertical: normalize('vertical', 7),
  },
  main: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
