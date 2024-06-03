import React from 'react';
import {StyleSheet, Image} from 'react-native';

type TSize = 'tiny' | 'small' | 'medium' | 'large';

interface IAvatar {
  size: TSize;
  image: any;
}

export const Avatar: React.FC<IAvatar> = ({size, image}) => (
  <Image source={image} style={[styles.view, styles[size]]} />
);

const styles = StyleSheet.create({
  view: {
    borderRadius: 999,
  },
  tiny: {
    width: 24,
    height: 24,
  },
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 40,
    height: 40,
  },
  large: {
    width: 64,
    height: 64,
  },
});
