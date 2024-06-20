import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'theme/colors';
import {Resources, SvgImage} from './SvgImage';
import {TypographyStyles} from 'theme/typography';
import {normalize} from 'theme/metrics';

interface IMainTab {
  title?: string;
  caption?: string;
  leftIcon?: Resources;
  rightIcon?: Resources;
}

export const MainTab: React.FC<IMainTab> = ({
  title,
  caption,
  leftIcon,
  rightIcon,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <SvgImage color={colors.primary.base} source={leftIcon} />
        <View>
          <Text style={styles.title}>{title}</Text>
          {caption ? <Text style={styles.caption}>{caption}</Text> : null}
        </View>
      </View>
      <SvgImage color={colors.skyDark} source={rightIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: {
    flexDirection: 'row',
    gap: normalize('horizontal', 12),
    alignItems: 'center',
  },
  title: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.ink.darkest,
  },
  caption: {
    ...TypographyStyles.SmallTightRegular,
    color: colors.ink.lighter,
  },
});
