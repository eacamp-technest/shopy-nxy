import React from 'react';
import {View, StyleSheet, TextStyle} from 'react-native';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {NavBar} from 'components/NavBar';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';
import {Button} from 'components/Button';
import {normalize} from 'theme/metrics';
import {TextLink} from 'components/TextLink';

export const VerificationScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.verification>
> = ({navigation}) => {
  return (
    <SafeMainProvider>
      <View>
        <NavBar
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.ink.base}
          largeTitle={'ENTER SMS CODE'}
          leftOnPress={navigation.goBack}
        />
        <View style={styles.resentText}>
          <TextLink
            content="Didn’t receive code? Resend Code"
            center
            highlighted={[
              {
                text: 'Resend Code',
                callback: () => console.log('conditions'),
              },
            ]}
          />
        </View>
        <Button
          disabled={true}
          text={'Continue'}
          position={'center'}
          type={'primary'}
        />
      </View>
    </SafeMainProvider>
  );
};

// ! Styles

const styles = StyleSheet.create({
  resentText: {
    paddingVertical: normalize('vertical', 32),
  } as TextStyle,
});
