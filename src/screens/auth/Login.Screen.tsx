import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {normalize} from 'theme/metrics';
import {colors} from 'theme/colors';
import {SocialButton} from 'components/SocialButton';
import {CommonStyles} from 'theme/commonStyles';
import {Button} from 'components/Button';
import {TypographyStyles} from 'theme/typography';

export const LoginScreen: React.FC = () => {
  return (
    <SafeMainProvider>
      <View style={CommonStyles.flex}>
        <NavBar
          largeTitle={'Welcome!'}
          leftIcon={ImageResources.chevronLeft}
          style={styles.largeText}
          leftColor={colors.gray.base}
        />
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
      </View>
    </SafeMainProvider>
  );
};

// ! Styles

const styles = StyleSheet.create({
  largeText: {
    paddingTop: normalize('vertical', 16),
    paddingBottom: normalize('vertical', 24),
  },
  loginContainer: {
    gap: normalize('vertical', 32),
  },
  socialButton: {
    gap: normalize('horizontal', 24),
    ...CommonStyles.alignJustifyCenterRow,
  },
  singInText: {
    textAlign: 'center',
    color: colors.gray.dark,
    ...TypographyStyles.smallNormal,
  },
});
