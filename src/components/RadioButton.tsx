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
export const RadioButton = ({disabled}: IRadioButton) => {
  const [checkedState, setCheckedState] = useState<boolean>(false);
  const getChangedIcon = (check: boolean) => {
    setCheckedState(check);
  };

  return (
    <Pressable
      hitSlop={standardHitSlopSize}
      onPress={() => getChangedIcon(!checkedState)}
      style={[
        styles.button,
        disabled
          ? styles.disabled
          : checkedState
          ? styles.checkOn
          : styles.normal,
      ]}>
      <View style={[disabled ? styles.disableCircle : styles.circle]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: colors.skyBase,
    borderRadius: 32,
    height: normalize('height', 24),
    width: normalize('width', 24),
    ...CommonStyles.alignJustifyCenter,
  },
  normal: {
    borderWidth: 1,
  },
  checkOn: {
    padding: 8,
    backgroundColor: colors.primary.base,
  },
  circle: {
    borderWidth: 1,
    borderRadius: 32,
    borderColor: colors.white,
    height: normalize('height', 8),
    width: normalize('width', 8),
    backgroundColor: colors.white,
  },
  disabled: {
    borderRadius: 32,
    backgroundColor: colors.skyLight,
    borderColor: colors.skyLight,
    height: normalize('height', 24),
    width: normalize('width', 24),
  },
  disableCircle: {
    borderWidth: 1,
    borderRadius: 32,
    height: normalize('height', 8),
    width: normalize('width', 8),
    borderColor: colors.skyLighter,
    backgroundColor: colors.skyLighter,
  },
});
