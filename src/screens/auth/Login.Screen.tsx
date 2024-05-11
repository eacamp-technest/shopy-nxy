import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
  ScrollView,
  Linking,
} from 'react-native';
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
import {useForm} from 'react-hook-form';
import {InputControlled} from 'components/InputControlled';
import {FormRules} from 'constants/formRules';

// ! Interface

interface ILoginForm {
  email?: string;
  password?: string;
}

export const LoginScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.login>
> = ({navigation}) => {
  const {
    control,
    // handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<ILoginForm>();
  // const onSubmit = (data: ILoginForm) => {
  //   console.log(data);

  //   return new Promise(resolve => setTimeout(resolve, 2000));
  // };

  const handleValidation = () => {
    navigation.navigate(Routes.verification);
  };

  // handleSubmit(onSubmit);

  return (
    <SafeMainProvider>
      <ScrollView
        scrollEnabled={false}
        style={CommonStyles.flex}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.flex}>
        <NavBar
          largeTitle={'Welcome!'}
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          leftOnPress={navigation.goBack}
        />
        <View style={styles.inputs}>
          <InputControlled
            control={control}
            name={'email'}
            label={'Email'}
            errorMessage={errors.email?.message}
            rules={FormRules.email}
            type={'text'}
            keyboardType={'email-address'}
            placeholder={'Enter your email'}
          />
          <InputControlled
            control={control}
            name={'password'}
            label={'Password'}
            errorMessage={errors.password?.message}
            rules={FormRules.password}
            type={'password'}
            caption={'Caption'}
            placeholder={'Enter your password'}
          />
        </View>
        <View style={styles.loginContainer}>
          <Button
            text={'Login'}
            type={'primary'}
            size={'block'}
            disabled={isSubmitting}
            loading={isSubmitting}
            position={'center'}
            onPress={handleValidation}
          />
          <Text style={styles.singInText}>or sign in with</Text>
          <View style={styles.socialButton}>
            <SocialButton
              onPress={() => Linking.openSettings()}
              icon={ImageResources.googleButton}
            />
            <SocialButton
              onPress={() => Linking.openSettings()}
              icon={ImageResources.facebookButton}
            />
            <SocialButton
              onPress={() => Linking.openSettings()}
              icon={ImageResources.twitterButton}
            />
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
      </ScrollView>
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
