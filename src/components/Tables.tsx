import React, {isValidElement} from 'react';
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';

interface ITables {
  content?: string;
  caption?: string;
  Left?: React.ReactNode | null;
  Right?: React.ReactNode | null;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export const Tables: React.FC<ITables> = ({
  content,
  Left,
  Right,
  contentStyle,
  onPress,
  style,
  caption,
}) => {
  const isLeftValid = isValidElement(Left);
  const isRightValid = isValidElement(Right);

  return (
    <Pressable onPress={onPress} style={[styles.root, style]}>
      {isLeftValid ? Left : null}
      <View style={styles.texts}>
        <Text style={[TypographyStyles.RegularTightRegular, contentStyle]}>
          {content}
        </Text>
        {caption ? <Text style={styles.caption}>{caption}</Text> : null}
      </View>
      {isRightValid ? Right : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize('vertical', 12),
    paddingHorizontal: normalize('horizontal', 24),
    gap: normalize('horizontal', 12),
  },
  rightStyle: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.primary.base,
  },
  texts: {
    flexGrow: 1,
    justifyContent: 'center',
    gap: normalize('horizontal', 4),
  },
  rightContainer: {
    gap: normalize('horizontal', 4),
  },
  caption: {
    ...TypographyStyles.SmallTightRegular,
    color: colors.ink.lighter,
  },
});
