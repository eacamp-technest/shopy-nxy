import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from './Avatar';
import {Divider} from './Divider';
import {SvgImage} from './SvgImage';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';

export interface IReview {
  date?: string;
  star?: string;
  name?: string;
  image?: string;
  surname?: string;
  description?: string;
}

export const Review: React.FC<IReview> = ({
  name,
  date,
  image,
  surname,
  description,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.main}>
        <Avatar size={'medium'} image={image} />
        <View style={CommonStyles.flex}>
          <View style={styles.stars}>
            <View>
              <Text style={styles.user}>{`${name} ${surname}`}</Text>
              <View style={styles.starsSvg}>
                <SvgImage
                  height={16}
                  width={16}
                  color={colors.yellow.base}
                  source={ImageResources.rating}
                />
                <SvgImage
                  height={16}
                  width={16}
                  color={colors.yellow.base}
                  source={ImageResources.rating}
                />
                <SvgImage
                  height={16}
                  width={16}
                  color={colors.yellow.base}
                  source={ImageResources.rating}
                />
                <SvgImage
                  height={16}
                  width={16}
                  color={colors.yellow.base}
                  source={ImageResources.rating}
                />
                <SvgImage
                  height={16}
                  width={16}
                  color={colors.skyLight}
                  source={ImageResources.rating}
                />
                <SvgImage
                  height={16}
                  width={16}
                  color={colors.skyLight}
                  source={ImageResources.rating}
                />
              </View>
            </View>
            <Text style={styles.date}>{date}</Text>
          </View>
          <Text style={styles.description} numberOfLines={6}>
            {description}
          </Text>
        </View>
      </View>
      <Divider height={'small'} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    gap: normalize('vertical', 24),
  },
  main: {
    flexDirection: 'row',
    gap: normalize('horizontal', 16),
  },
  stars: {
    paddingBottom: normalize('vertical', 16),
    ...CommonStyles.justifyBetweenRow,
  },
  starsSvg: {
    flexDirection: 'row',
    gap: normalize('horizontal', 2),
  },
  user: {
    paddingBottom: normalize('vertical', 4),
    ...TypographyStyles.RegularTightSemibold,
    color: colors.ink.darkest,
  },
  description: {
    width: '95%',
    ...TypographyStyles.SmallNormalRegular,
    color: colors.ink.base,
  },
  date: {
    ...TypographyStyles.TinyNormalRegular,
    color: colors.ink.lighter,
  },
});
