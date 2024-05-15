import React from 'react';
import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {Routes} from 'router/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {TextLink} from 'components/TextLink';
import {methodPayment} from 'constants/textLink';
import {normalize} from 'theme/metrics';
import {TypographyStyles} from 'theme/typography';
import {Button} from 'components/Button';

export const PaymentMethodScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.paymentMethod>
> = ({navigation}) => {
  return (
    <SafeMainProvider>
      <NavBar
        leftColor={colors.ink.base}
        leftOnPress={navigation.goBack}
        textRight={'Skip'}
        leftIcon={ImageResources.chevronLeft}
        largeTitle={'PAYMENT METHODS'}
      />
      <View style={styles.textLink}>
        <Text style={styles.text}>STORED CARD</Text>
        <TextLink
          content={methodPayment.content}
          highlighted={methodPayment.highlighted}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>STORED CARD</Text>
        <Text style={styles.textError}>
          You don’t have a connected bank account.
        </Text>
      </View>
      <Button
        type={'primary'}
        position={'center'}
        text={'Connect a bank account'}
      />
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  textLink: {
    gap: normalize('vertical', 12),
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  } as TextStyle,
  text: {
    ...TypographyStyles.RegularNoneSemibold,
    color: colors.ink.darkest,
  } as TextStyle,
  textContainer: {
    gap: normalize('vertical', 12),
    paddingBottom: normalize('vertical', 24),
  } as ViewStyle,
  textError: {
    ...TypographyStyles.RegularNormalRegular,
    color: colors.ink.lighter,
  } as TextStyle,
});
