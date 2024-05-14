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
import {login} from 'constants/textLink';

export interface ILoginForm {
  email: string;
  password: string;
}

export const LoginScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.login>
> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<ILoginForm>({
    defaultValues: {
      email: __DEV__ ? 'nadir.musayevv@gmail.com' : '',
      password: __DEV__ ? '123456XX!' : '',
    },
  });
  const onSubmit = (data: ILoginForm) => {
    navigation.navigate(Routes.verification, data);
  };

  return (
    <SafeMainProvider>
      <ScrollView
        scrollEnabled={false}
        style={CommonStyles.flex}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.flex}>
        <NavBar
          largeTitle={'Welcome!'}
          leftColor={colors.ink.base}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
        <View style={styles.inputs}>
          <InputControlled
            type={'text'}
            name={'email'}
            label={'Email'}
            control={control}
            rules={FormRules.email}
            keyboardType={'email-address'}
            placeholder={'Enter your email'}
            errorMessage={errors.email?.message}
          />
          <InputControlled
            control={control}
            name={'password'}
            type={'password'}
            label={'Password'}
            rules={FormRules.password}
            placeholder={'Enter your password'}
            errorMessage={errors.password?.message}
          />
        </View>
        <View style={styles.loginContainer}>
          <Button
            text={'Login'}
            size={'block'}
            type={'primary'}
            position={'center'}
            loading={isSubmitting}
            disabled={isSubmitting}
            onPress={handleSubmit(onSubmit)}
          />
          <Text style={styles.singInText}>or sign in with</Text>
          <View style={styles.socialButton}>
            <SocialButton
              icon={ImageResources.googleButton}
              onPress={() => Linking.openSettings()}
            />
            <SocialButton
              icon={ImageResources.facebookButton}
              onPress={() => Linking.openSettings()}
            />
            <SocialButton
              icon={ImageResources.twitterButton}
              onPress={() => Linking.openSettings()}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TextLink
            center
            content={login.content}
            highlighted={login.highlighted}
          />
        </View>
      </ScrollView>
    </SafeMainProvider>
  );
};

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
    paddingVertical: normalize('vertical', 14),
  } as ViewStyle,
  inputs: {
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
    gap: normalize('vertical', 24),
  } as ViewStyle,
});
