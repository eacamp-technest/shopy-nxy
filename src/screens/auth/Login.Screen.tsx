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
import axios from 'axios';
import {colors} from 'theme/colors';
import {Routes} from 'router/routes';
import {useToast} from 'store/toast';
import {useForm} from 'react-hook-form';
import {normalize} from 'theme/metrics';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {TextLink} from 'components/TextLink';
import {ENDPOINTS} from 'services/Endpoints';
import {FormRules} from 'constants/formRules';
import {useUserStoreActions} from 'store/user';
import {CommonStyles} from 'theme/commonStyles';
import {TypographyStyles} from 'theme/typography';
import {SocialButton} from 'components/SocialButton';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {InputControlled} from 'components/InputControlled';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface ILoginForm {
  email: string;
  password: string;
  fullName: string;
}

export const LoginScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.login>
> = ({navigation}) => {
  const {initUser} = useUserStoreActions();
  const showToast = useToast();

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<ILoginForm>({
    defaultValues: {
      email: __DEV__ ? 'emilys@gmail.com' : '',
      password: __DEV__ ? 'emilyspass' : '',
    },
  });
  const onSubmit = async (data: ILoginForm) => {
    const res = await axios({
      url: ENDPOINTS.auth.login,
      method: 'POST',
      data: {
        username: data.email.replace('@gmail.com', ''),
        password: data.password,
      },
    });

    if (res.status === 200) {
      initUser(res.data);
      showToast('success', 'Login successful');
      // navigation.navigate(Routes.verification, data);
    } else {
      showToast('error', 'Login failed');
    }
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
            // rules={FormRules.password}
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
            fontColor={colors.primary.base}
            content={'Already have an account? Sign up'}
            highlighted={[
              {
                text: 'Sign up',
                callback: () => navigation.navigate(Routes.singUp),
              },
            ]}
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
    gap: normalize('vertical', 24),
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  } as ViewStyle,
});
