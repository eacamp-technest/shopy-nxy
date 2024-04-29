import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';

interface IRadioButton {
  checked?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}
export const RadioButton = ({checked, disabled}: IRadioButton) => {
  const [checkedState, setCheckedState] = useState<boolean>(false);
  const getChangedIcon = (check: boolean) => {
    setCheckedState(!check);
  };

  return (
    <TouchableOpacity onPress={() => getChangedIcon(checkedState)}>
      {checked ? (
        <View style={styles.buttonIconTrue}>
          <View style={styles.buttonIconCircle} />
        </View>
      ) : disabled ? (
        <View style={styles.buttonIconDisabled}>
          <View style={styles.buttonDisabledCircle} />
        </View>
      ) : (
        <View style={styles.buttonIconFalse}>
          <View style={styles.buttonFalseCircle} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonIconTrue: {
    height: normalize('height', 24),
    width: normalize('width', 24),
    borderRadius: 12,
    backgroundColor: colors.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIconCircle: {
    height: normalize('height', 8),
    width: normalize('width', 8),
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  buttonIconFalse: {
    height: normalize('height', 24),
    width: normalize('width', 24),
    borderRadius: 12,
    backgroundColor: colors.skyBase,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFalseCircle: {
    height: normalize('height', 20),
    width: normalize('width', 20),
    borderRadius: 12,
    backgroundColor: colors.white,
  },
  buttonIconDisabled: {
    height: normalize('height', 24),
    width: normalize('width', 24),
    borderRadius: 12,
    backgroundColor: colors.skyLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabledCircle: {
    height: normalize('height', 8),
    width: normalize('width', 8),
    borderRadius: 12,
    backgroundColor: colors.skyLighter,
  },
});
