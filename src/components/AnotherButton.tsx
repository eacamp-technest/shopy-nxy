import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {SvgImage} from './SvgImage';
import {ImageResources} from 'assets/VectorResources.g';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {colors} from 'theme/colors';
import {CommonStyles} from 'theme/commonStyles';

type TButton = {
  typeButton: 'bank' | 'add';
};

interface IAnotherButton {
  text?: string;
  type?: TButton | string;
  onPress?: () => void;
}

export const AnotherButton: React.FC<IAnotherButton> = ({
  text,
  onPress,
  type = 'add',
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.root]}>
      <View style={styles.main}>
        <SvgImage
          style={styles.controller}
          source={
            type === 'add'
              ? ImageResources.controlsButton
              : ImageResources.masterCardBlack
          }
        />
        <View style={styles.texts}>
          <Text style={TypographyStyles.RegularNoneSemibold}>{text}</Text>
          {type === 'bank' ? (
            <View style={styles.container}>
              <Text style={styles.textCard}>Primary</Text>
            </View>
          ) : null}
        </View>
      </View>
      <SvgImage source={ImageResources.iconPlaceholder} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: normalize('vertical', 12),
    ...CommonStyles.alignCenterJustifyBetweenRow,
  },
  main: {
    gap: normalize('horizontal', 12),
    ...CommonStyles.alignCenterRow,
  },
  controller: {
    paddingVertical: normalize('vertical', 12),
  },
  texts: {
    gap: normalize('vertical', 8),
  },
  container: {
    width: normalize('width', 74),
    borderRadius: 100,
    backgroundColor: colors.lavender.lightest,
  },
  textCard: {
    textAlign: 'center',
    ...TypographyStyles.TinyNoneSemibold,
    color: colors.lavender.base,
    paddingVertical: normalize('vertical', 4),
  },
});
