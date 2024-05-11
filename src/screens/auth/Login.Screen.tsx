import React from 'react';
import {View, StyleSheet, Text, ViewStyle, TextStyle} from 'react-native';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';
import {SocialButton} from 'components/SocialButton';
import {CommonStyles} from 'theme/commonStyles';
import {Button} from 'components/Button';
import {TypographyStyles} from 'theme/typography';
import {TextLink} from 'components/TextLink';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {Input} from 'components/Input';

export const LoginScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.login>
> = ({navigation}) => {
  return (
    <SafeMainProvider>
      <View style={CommonStyles.flex}>
        <NavBar
          largeTitle={'Welcome!'}
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          leftOnPress={navigation.goBack}
        />
        <View style={styles.inputs}>
          <Input placeholder={'Enter your email'} label={'Email'} />
          <Input placeholder={'Enter your password'} label={'Password'} />
        </View>
        <View style={styles.loginContainer}>
          <Button
            text={'Login'}
            type={'primary'}
            size={'block'}
            position={'center'}
          />
          <Text style={styles.singInText}>or sign in with</Text>
          <View style={styles.socialButton}>
            <SocialButton icon={ImageResources.googleButton} />
            <SocialButton icon={ImageResources.facebookButton} />
            <SocialButton icon={ImageResources.twitterButton} />
          </View>
        </View>
        <View style={styles.footer}>
          <TextLink
            content="Already have an account? Log in"
            center
            highlighted={[
              {
                text: 'Log in',
                callback: () => console.log('conditions'),
              },
            ]}
          />
        </View>
      </View>
    </SafeMainProvider>
  );
};

// ! Styles

const styles = StyleSheet.create({
  loginContainer: {
    gap: normalize('vertical', 32),
  } as ViewStyle,
  socialButton: {
    gap: normalize('horizontal', 24),
    ...CommonStyles.alignJustifyCenterRow,
  } as ViewStyle,
  singInText: {
    textAlign: 'center',
    color: colors.ink.dark,
    ...TypographyStyles.TinyNormalRegular,
  } as TextStyle,
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  inputs: {
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
    gap: normalize('vertical', 24),
  } as ViewStyle,
});
