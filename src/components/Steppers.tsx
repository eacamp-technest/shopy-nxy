import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {SvgImage} from './SvgImage';
import {TypographyStyles} from 'theme/typography';

type TSize = 'small' | 'normal';
type TType = 'normal' | 'noCounter' | 'transparent';

interface ISteppers {
  size: TSize;
  type: TType;
  count?: number;
  onPress?: () => void;
}
export const Steppers: React.FC<ISteppers> = ({type, count, size}) => {
  const styles = getStyles(size, type);

  return (
    <View style={styles.container}>
      <SvgImage isPressable={true} color={colors.skyBase} source={minus} />
      {type === 'noCounter' ? (
        <SvgImage color={colors.skyLight} source={line} />
      ) : (
        <Text style={styles.count}>{count}</Text>
      )}
      <SvgImage isPressable={true} color={colors.primary.base} source={plus} />
    </View>
  );
};

const plus = require('../assets/vectors/plus.svg');
const minus = require('../assets/vectors/minus.svg');
const line = require('../assets/vectors/line.svg');

const getStyles = (size: TSize, type: TType) =>
  StyleSheet.create({
    container: {
      gap: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderColor: colors.skyLight,
      height: size === 'small' ? 32 : 48,
      width: type === 'noCounter' ? 104 : 124,
      borderWidth: type === 'transparent' ? 0 : 1,
      borderRadius: type === 'noCounter' ? 60 : 8,
    },
    count: {
      ...TypographyStyles.RegularNoneBold,
      color: colors.ink.darkest,
      lineHeight: 0,
    },
  });
