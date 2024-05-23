import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colors} from 'theme/colors';
import {normalize} from 'theme/metrics';
import {SvgImage} from 'components/SvgImage';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';

interface IBankCard {
  disabled?: boolean;
  onPress?: () => void;
  holder: string;
  cardNumber: string;
  expiration: string;
  empty?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const BankCard: React.FC<IBankCard> = ({
  holder,
  onPress,
  disabled,
  cardNumber,
  expiration,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, styles.root]}>
      <View style={CommonStyles.alignCenterJustifyBetweenRow}>
        <Text style={styles.mainText}>Universal Card</Text>
        <SvgImage source={ImageResources.masterCard} />
      </View>
      <Text style={styles.numberCard}>{cardNumber}</Text>
      <View style={styles.cardHolder}>
        <Text style={styles.text}>CARD HOLDER</Text>
        <Text style={styles.text}>CARD SAVE</Text>
      </View>
      <View style={CommonStyles.alignCenterJustifyBetweenRow}>
        <Text style={styles.textData}>{holder}</Text>
        <Text style={styles.textData}>{expiration}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    backgroundColor: colors.blue.base,
    height: normalize('height', 200),
    paddingTop: normalize('vertical', 16),
    paddingBottom: normalize('vertical', 24),
    paddingHorizontal: normalize('horizontal', 24),
  },
  mainText: {
    ...TypographyStyles.RegularTightSemibold,
    color: colors.mellow.lightest,
  },
  numberCard: {
    paddingTop: normalize('vertical', 29),
    paddingBottom: normalize('vertical', 16),
    ...TypographyStyles.title3,
    color: colors.mellow.lightest,
  },
  cardHolder: {
    ...CommonStyles.alignCenterJustifyBetweenRow,
    paddingBottom: normalize('vertical', 8),
  },
  text: {
    ...TypographyStyles.Inter,
    color: colors.mellow.lightest,
    opacity: 0.5,
  },
  textData: {
    ...TypographyStyles.TinyNoneSemibold,
    color: colors.mellow.lightest,
  },
});
