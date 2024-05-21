import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, ViewStyle, ScrollView, Keyboard} from 'react-native';
import {colors} from 'theme/colors';
import {Routes} from 'router/routes';
import {normalize} from 'theme/metrics';
import {useForm} from 'react-hook-form';
import {NavBar} from 'components/NavBar';
import {Button} from 'components/Button';
import {signUp} from 'constants/textLink';
import {TextLink} from 'components/TextLink';
import {FormRules} from 'constants/formRules';
import {CommonStyles} from 'theme/commonStyles';
import {ImageResources} from 'assets/VectorResources.g';
import {NavigationParamList} from 'types/navigation.types';
import {InputControlled} from 'components/InputControlled';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {keyboardHideEvent, keyboardShowEvent} from 'constants/common.consts';

interface ISigUpForm {
  email: string;
  password: string;
  fullName: string;
}

export const SignUpScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.singUp>
> = ({navigation}) => {
  const scrollRef = useRef<ScrollView>(null);

  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<ISigUpForm>({
    defaultValues: {
      fullName: __DEV__ ? 'Nadir Musayev' : '',
      email: __DEV__ ? 'nadir.musayevv@gmail.com' : '',
      password: __DEV__ ? '123456XX!' : '',
    },
  });
  const onSubmit = (data: ISigUpForm) => {
    navigation.navigate(Routes.verification, data);
  };

  useEffect(() => {
    const showListener = Keyboard.addListener(keyboardShowEvent, () => {
      scrollRef?.current?.scrollToEnd({animated: true});
    });

    const hideListener = Keyboard.addListener(keyboardHideEvent, () => {
      scrollRef?.current?.scrollTo({y: 0, animated: true});
    });

    return () => {
      hideListener.remove();
      showListener.remove();
    };
  }, []);
  return (
    <SafeMainProvider>
      <ScrollView
        scrollEnabled={false}
        style={CommonStyles.flex}
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={CommonStyles.flex}>
        <NavBar
          leftColor={colors.ink.base}
          largeTitle={'Create Account'}
          leftOnPress={navigation.goBack}
          leftIcon={ImageResources.chevronLeft}
        />
        <ScrollView scrollEnabled={false} ref={scrollRef}>
          <View style={styles.inputs}>
            <InputControlled
              type={'text'}
              name={'fullName'}
              control={control}
              label={'Full Name'}
              keyboardType={'default'}
              rules={FormRules.fullName}
              placeholder={'Enter your full name'}
              errorMessage={errors.fullName?.message}
            />
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
              label={'Password'}
              type={'password'}
              rules={FormRules.password}
              placeholder={'Enter your password'}
              errorMessage={errors.password?.message}
            />
          </View>
          <Button
            position={'center'}
            loading={isSubmitting}
            disabled={isSubmitting}
            text={'Create an account'}
            onPress={handleSubmit(onSubmit)}
          />
        </ScrollView>
        <View style={styles.footer}>
          <TextLink
            center
            content={signUp.content}
            highlighted={signUp.highlighted}
            fontColor={colors.primary.base}
          />
        </View>
      </ScrollView>
    </SafeMainProvider>
  );
};

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: normalize('vertical', 12),
  } as ViewStyle,
  inputs: {
    paddingTop: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
    gap: normalize('vertical', 24),
  } as ViewStyle,
});
