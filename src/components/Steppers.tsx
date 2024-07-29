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
  disabled?: boolean;
  increment?: () => void;
  decrement?: () => void;
}
export const Steppers: React.FC<ISteppers> = ({
  type,
  count,
  size,
  disabled,
  increment,
  decrement,
}) => {
  const styles = getStyles(size, type);

  return (
    <View style={styles.container}>
      <SvgImage
        source={minus}
        isPressable={true}
        disabled={disabled}
        onPress={decrement}
        color={colors.skyBase}
      />
      {type === 'noCounter' ? (
        <View style={styles.line} />
      ) : (
        <Text style={styles.count}>{count}</Text>
      )}
      <SvgImage
        source={plus}
        isPressable={true}
        disabled={false}
        onPress={increment}
        color={colors.primary.base}
      />
    </View>
  );
};

const plus = require('../assets/vectors/plus.svg');
const minus = require('../assets/vectors/minus.svg');

const getStyles = (size: TSize, type: TType) =>
  StyleSheet.create({
    container: {
      gap: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
    line: {
      width: 1,
      height: size === 'small' ? 32 : 48,
      backgroundColor: colors.skyLight,
    },
  });
