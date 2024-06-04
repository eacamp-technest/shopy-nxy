import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {normalize} from 'theme/metrics';

type TTypeCard = 'list' | 'add' | 'save';

interface ICardProduct {
  type: TTypeCard;
  image?: string;
  title?: string;
  price?: number;
}

export const CardProduct: React.FC<ICardProduct> = ({
  type,
  image,
  title,
  price,
}) => {
  return (
    <View style={styles.root}>
      <Image
        source={image}
        style={[styles.imageNormal, type === 'save' ? styles.imageLarge : null]}
      />
      <View style={[styles.list]}>
        <Text numberOfLines={2}>{title}</Text>
        {type === 'list' ? (
          <Text>{`$${price}`}</Text>
        ) : (
          <View style={styles.main}>
            <Text>ICON</Text>
            <Text>{`$${price}`}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    gap: normalize('horizontal', 20),
  },
  imageNormal: {
    height: normalize('height', 78),
    width: normalize('width', 78),
  },
  imageLarge: {
    height: normalize('height', 100),
    width: normalize('width', 100),
  },
  list: {
    flex: 1,
    gap: 8,
    justifyContent: 'space-between',
    paddingVertical: normalize('vertical', 7),
  },
  main: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
