import React from 'react';
import {View, StyleSheet, ViewStyle, ScrollView} from 'react-native';
import {CommonStyles} from 'theme/commonStyles';
import {NavBar} from 'components/NavBar';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {Button} from 'components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {TextLink} from 'components/TextLink';
import {normalize} from 'theme/metrics';
import {InputControlled} from 'components/InputControlled';
import {FormRules} from 'constants/formRules';
import {useForm} from 'react-hook-form';
import {signUp} from 'constants/textLink';

interface ISigUpForm {
  email?: string;
  password?: string;
  fullName?: string;
}

export const SignUpScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.singUp>
> = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<ISigUpForm>();
  const onSubmit = () => {
    navigation.navigate(Routes.login);
    return new Promise(resolve => setTimeout(resolve, 2000));
  };
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
        <View style={styles.footer}>
          <TextLink
            center
            content={signUp.content}
            highlighted={signUp.highlighted}
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
