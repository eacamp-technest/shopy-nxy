import React from 'react';
import {Routes} from './routes';
import {NavigationParamList} from 'types/navigation.types';
import {
  authStackScreenOption,
  defaultScreenOptions,
} from 'configs/navigation.configs';
import {PaymentScreensTab} from 'screens/payment';
import {LoginScreen} from 'screens/auth/Login.Screen';
import {SignUpScreen} from 'screens/auth/SignUp.Screen';
import {OnboardingScreen} from 'screens/auth/Onboarding.Screen';
import {VerificationScreen} from 'screens/auth/Verification.Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator<NavigationParamList>();

export const AuthRouter = () => {
  return (
    <AuthStack.Navigator
      screenOptions={authStackScreenOption}
      initialRouteName={Routes.onboarding}>
      <AuthStack.Screen
        name={Routes.onboarding}
        component={OnboardingScreen}
        options={defaultScreenOptions}
      />
      <AuthStack.Screen name={Routes.login} component={LoginScreen} />
      <AuthStack.Screen name={Routes.singUp} component={SignUpScreen} />
      <AuthStack.Screen
        name={Routes.paymentScreensTab}
        component={PaymentScreensTab}
      />
      <AuthStack.Screen
        name={Routes.verification}
        component={VerificationScreen}
      />
    </AuthStack.Navigator>
  );
};
