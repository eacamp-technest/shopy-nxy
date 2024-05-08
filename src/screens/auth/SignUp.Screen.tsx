import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
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
import {Input} from 'components/Input';
import {normalize} from 'theme/metrics';

export const SignUpScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.singUp>
> = ({navigation}) => {
  return (
    <SafeMainProvider>
      <View style={CommonStyles.flex}>
        <NavBar
          largeTitle={'Create Account'}
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          leftOnPress={navigation.goBack}
        />
        <View style={styles.inputs}>
          <Input
            type={'text'}
            variant={'default'}
            position={'right'}
            icon={ImageResources.mapPin}
            placeholder={'Placeholder text'}
            label={'Text Label'}
            disabled={false}
            errorMessage={'Error Message'}
            maxLength={50}
          />
          <Input
            type={'text'}
            variant={'floating'}
            icon={ImageResources.mapPin}
            placeholder={'Placeholder text'}
            label={'Text Label'}
            position={'default'}
            disabled={false}
            errorMessage={'Error Message'}
            // caption={'Caption'}
            maxLength={50}
          />
          <Input
            type={'text'}
            variant={'floating'}
            // icon={ImageResources.mapPin}
            placeholder={'Placeholder text'}
            label={'Text Label'}
            position={'right'}
            disabled={true}
            errorMessage={'Error Message'}
            maxLength={50}
          />
        </View>
        <Button
          text={'Create an account'}
          position={'center'}
          onPress={() => navigation.navigate(Routes.verification)}
        />
        <View style={styles.footer}>
          <TextLink
            content="By signing up you agree to our Terms and Conditions of Use"
            center
            highlighted={[
              {
                text: 'Terms',
                callback: () => console.log('terns'),
              },
              {
                text: 'Conditions of Use',
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
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  } as ViewStyle,
  inputs: {
    gap: normalize('vertical', 24),
    paddingBottom: normalize('vertical', 32),
  } as ViewStyle,
});
