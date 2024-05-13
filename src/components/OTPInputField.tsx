import React, {useRef, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  ViewStyle,
} from 'react-native';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';

// ! Interface

interface OTPInput {
  length?: number;
  value?: Array<string>;
  setDisabled: (value: boolean) => void;
  onChange?(value: Array<string>): void;
}

export const OTPInputField: React.FC<OTPInput> = ({length, setDisabled}) => {
  const [focus, setFocus] = useState<number | null>(null);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: any, index: number) => {
    if (index === 3) {
      setDisabled(false);
    }

    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }

    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackSpace = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const {nativeEvent} = event;
    if (nativeEvent.key === 'Backspace') {
      setDisabled(true);
      handleChange('', index);
    }
  };

  return (
    <View style={[styles.root]}>
      {[...new Array(length)].map((_, index) => (
        <TextInput
          key={index}
          maxLength={1}
          contextMenuHidden
          selectTextOnFocus
          style={[styles.input, focus === index ? styles.boxFocus : null]}
          testID={`OTPInput-${index}`}
          keyboardType={'decimal-pad'}
          onFocus={() => setFocus(index)}
          onSubmitEditing={Keyboard.dismiss}
          placeholderTextColor={colors.ink.base}
          ref={ref => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={event => handleBackSpace(event, index)}
        />
      ))}
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: normalize('horizontal', 24),
    paddingTop: normalize('vertical', 16),
    ...CommonStyles.justifyCenterRow,
  } as ViewStyle,
  input: {
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    borderColor: colors.skyLight,
    width: normalize('width', 48),
    height: normalize('height', 48),
    ...TypographyStyles.RegularNoneBold,
    ...CommonStyles.alignJustifyCenter,
  } as ViewStyle,
  boxFocus: {
    borderColor: colors.primary.base,
  } as ViewStyle,
});
