import React, {useRef, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';

// ! Interface

interface OTPInput {
  length?: number;
  value?: Array<string>;
  disabled?: boolean;
  onChange?(value: Array<string>): void;
}

export const OTPInputField: React.FC<OTPInput> = ({
  length,
  disabled,
  onChange,
  value,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleOnFocus = () => setIsFocused(true);
  const handleOnBlur = () => setIsFocused(false);

  return (
    <View style={[styles.root]}>
      {[...new Array(length)].map((_, index) => {
        return (
          <TextInput
            key={index}
            keyboardType={'decimal-pad'}
            style={styles.input}
            maxLength={length}
            contextMenuHidden
            selectTextOnFocus
            editable={disabled}
            // ref={}
            testID={`OTPINput-${index}`}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            placeholderTextColor={colors.ink.base}
          />
        );
      })}
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: normalize('horizontal', 24),
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.skyLight,
    width: normalize('width', 48),
    height: normalize('height', 48),
    ...TypographyStyles.RegularNoneBold,
  },
  boxFocus: {
    borderColor: colors.primary.base,
  },
});
