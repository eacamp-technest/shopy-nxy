import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingScreen} from 'screens/auth/Onboarding.Screen';
import {LoginScreen} from 'screens/auth/Login.Screen';
import {SignUpScreen} from 'screens/auth/SignUp.Screen';
import {PaymentMethodScreen} from 'screens/auth/PaymentMethod.Screen';
import {VerificationScreen} from 'screens/auth/Verification.Screen';
import {Routes} from './routes';
import {NavigationParamList} from 'types/navigation.types';
import {
  authStackScreenOption,
  defaultScreenOptions,
} from 'configs/navigation.configs';
import {PaymentAddCardScreen} from 'screens/auth/PaymentAddCard.Screen';

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
        name={Routes.verification}
        component={VerificationScreen}
      />
      <AuthStack.Screen
        name={Routes.paymentMethod}
        component={PaymentMethodScreen}
      />
      <AuthStack.Screen
        name={Routes.paymentAddCard}
        component={PaymentAddCardScreen}
      />
    </AuthStack.Navigator>
  );
};
