import React from 'react';
import {View} from 'react-native';
import {CommonStyles} from 'theme/commonStyles';
import {NavBar} from 'components/NavBar';
import {SafeMainProvider} from 'containers/SafeMainProvider';
import {ImageResources} from 'assets/VectorResources.g';
import {colors} from 'theme/colors';
import {Button} from 'components/Button';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from 'types/navigation.types';
import {Routes} from 'router/routes';

export const SignUpScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.singUp>
> = ({navigation}) => {
  return (
    <SafeMainProvider>
      <View style={CommonStyles.flex}>
        <NavBar
          largeTitle={'Create Account'}
          leftIcon={ImageResources.chevronLeft}
          leftColor={colors.gray.base}
          onPress={navigation.goBack}
        />
        <Button text={'Create an account'} position={'center'} />
      </View>
    </SafeMainProvider>
  );
};

// ! Styles

// const styles = StyleSheet.create({});
