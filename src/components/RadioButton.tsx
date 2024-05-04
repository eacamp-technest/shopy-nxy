import {View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {standardHitSlopSize} from 'theme/consts.styles';

interface IRadioButton {
  disabled?: boolean;
  onPress?: () => void;
}

export const RadioButton: React.FC<IRadioButton> = ({disabled}) => {
  const [checkedState, setCheckedState] = useState<boolean>(false);

  const handleRadioButton = () => setCheckedState(!checkedState);

  return (
    <Pressable
      hitSlop={standardHitSlopSize}
      onPress={handleRadioButton}
      disabled={disabled}
      style={[
        styles.normal,
        checkedState && styles.press,
        disabled && styles.disabledNormal,
      ]}>
      <View style={[styles.pressVariant, disabled && styles.disabled]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  normal: {
    borderWidth: 1,
    borderRadius: 32,
    borderColor: colors.skyBase,
    height: normalize('height', 24),
    width: normalize('width', 24),
    ...CommonStyles.alignJustifyCenter,
  },

  disabledNormal: {
    borderWidth: 0,
    backgroundColor: colors.skyLight,
  },

  press: {
    borderWidth: 0,
    backgroundColor: colors.primary.base,
  },

  pressVariant: {
    borderRadius: 32,
    backgroundColor: colors.white,
    height: normalize('height', 8),
    width: normalize('width', 8),
  },

  disabled: {
    backgroundColor: colors.skyLighter,
  },
});
