import React from 'react';
import {View, Text, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {colors} from 'theme/colors';
import {Routes} from 'router/routes';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {TextLink} from 'components/TextLink';
import {methodPayment} from 'constants/textLink';
import {TypographyStyles} from 'theme/typography';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

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
          fontColor={colors.primary.base}
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
        onPress={() => navigation.navigate(Routes.addNewCard)}
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
